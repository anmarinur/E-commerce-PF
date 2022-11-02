import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartGlobal, getDetails, getTotalFav } from "../redux/actions";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useLocalStorage } from "../utils/useLocalStorage";
import Star from '../components/Reviews/Star';
import Comment from '../components/Reviews/Comment';
import AddComment from "../components/Reviews/AddComment";
import { getReviews } from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import isAdmin from "../utils/isAdmin";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';

export default function ProductDetail(props) {

  const dispatch = useDispatch();
  const cartGlobal = useSelector((state) => state.cart);
  const id = props.match.params.id;
  const history = useHistory()
  const [cart, setCart] = useLocalStorage('cart', '');
  const [admin, setAdmin] = useState();
  const productDetail = useSelector((state) => state.details)
  const productReviews = useSelector((state) => state.reviews[0])
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  



  useEffect(() => {
    dispatch(getDetails(id))
    dispatch(getReviews(id))

    isAdmin(getAccessTokenSilently)
      .then((res) => setAdmin(res))
      .catch(() => setAdmin(false));


  }, [dispatch, id])


  const addCart = (e, product) => {
    e.preventDefault();
    const exist = cartGlobal.find(i => i.id === product.id)
    if (!exist) {
      dispatch(addCartGlobal(product));

      toast.success('Added to Car!', {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error('Already added!', {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const addFavorite = async (e, id) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    const result = await axios.post('/favourites',
        {
            "email": user.email,
            "favs": [id]
        }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (result.status === 200) {
        try {
            const token2 = await getAccessTokenSilently();
            dispatch(getTotalFav(user.email, token2))
            toast.success('Added to Fav!', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.log(error)
        }
    }
    


}

  /* const deleteP = async (review) => {
    const token = await getAccessTokenSilently();
    try {
      await axios.delete(`/review/${review}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Comment delete successfully");
      dispatch(getReviews(id));
    } catch (error) {
      console.log(error)
    }
  }; */

  return (
    <>
      <Nav />
      <div className="container mt-4">
        <Card className="border shadow">
          {/* <Card.Header className="text-center align-items-center text-uppercase py-0 px-3 bg-danger text-white fw-semibold">
            <Card.Title className="d-flex justify-content-between fs-3 align-items-center">
              {productDetail.name}
              <div>
                <Link to="/">
                  <Button className="m-3 fw-bold text-danger" variant="light">
                    X
                  </Button>
                </Link>
              </div>
            </Card.Title>
          </Card.Header> */}
          
          <Card.Body className="text-center">
          <Link to="/" type="button" className="text-decoration-none bg-light border shadow-sm rounded text-danger fs-5 px-2 py-0" style={ {float: 'right'} } aria-label="Close">x</Link>
            <div className="row p-3">
              <div className="col-xl-6">
                <Card.Img
                  style={{
                    width: "auto",
                    maxWidth: "25em",
                    maxHeight: "25em",
                    marginTop: "2em",
                    marginBottom: "2em",
                  }}
                  className="rounded"
                  src={productDetail.image}
                />
              </div>
              <div className="col-xl-6">
                <h3 className="text-start fs-2 fw-semibold"> {productDetail.name}</h3>
                <p className="text-start  text-danger fs-4">
                  Price: ${productDetail.price}
                </p>
                <p className="text-start text-muted start lh-1 mb-4">
                  <b className="text-danger">Category: </b>
                  {productDetail.CategoryId}
                </p>
                <p className="text-start text-muted start lh-1 fw-semibold mb-4">
                  <b className="text-danger">In Stock:</b> {productDetail.stock}
                </p>
                <p className="text-start text-muted start lh-1 fw-semibold mb-4">
                  <b className="text-danger">Brand:</b> {productDetail.brand}
                </p>

                <div>
                  <div className="d-flex flex-row justify-content-center">
                    {productReviews
                      ? [...Array(Math.round(productReviews.rating))].map(
                        (el, i) => <Star key={i.id} state={true} size="big" />
                      )
                      : ""}
                    {productReviews
                      ? [...Array(5 - Math.round(productReviews.rating))].map(
                        (el, i) => <Star  key={i.id} state={false} size="big" />
                      )
                      : ""}
                  </div>

                  {productReviews ? (
                    <div>{Math.round(productReviews.rating)} of 5</div>
                  ) : (
                    <div>0 of 5</div>
                  )}
                </div>
                <Card.Subtitle className="mt-3 mb-3 text-muted fs-5 w-70 mx-auto">
                  <b className="text-danger">Description:</b>{" "}
                  {productDetail.description}
                </Card.Subtitle>
                <div className="row text-center">
                  <div className="col-6">
                    <Button className="px-3 py-3 rounded-4 " variant="danger"
                    onClick={(e) => addFavorite(e, productDetail.id)}>
                      {" "}
                      <i className="fa-solid fa-heart-circle-plus fa-xl"></i>{" "}
                    </Button>
                  </div>
                  <div className="col-6">
                    <Link to="/cart">
                      <Button
                        className="px-3 py-3 rounded-4 "
                        variant="danger"
                        onClick={(e) => addCart(e, productDetail)}
                      >
                        {" "}
                        <i className="fa-solid fa-cart-plus fa-xl"></i>{" "}
                      </Button>
                    </Link>
                  </div>
                </div>


              </div>
              <div className="col-xl-12">
                <Card.Subtitle className="mt-5 mb-3 text-muted fs-5 w-70 mx-auto">
                  Customer reviews
                </Card.Subtitle>
                <div className="row g-4">
                  {productReviews && productReviews.Reviews.length > 0 ? (
                    productReviews.Reviews.map((review) => (
                      
                        <Comment
                          key={review.id}
                          rating={review.rating}
                          comment={review.comment}
                          id={review.id}
                          createdAt={review.createdAt}
                        />

                    ))
                  ) : (
                    <h4>There are no comments</h4>
                  )}
                </div>

              </div>
              <div className="col-xl-6">
                
              </div>
            </div>
            {/* <Card.Img
              style={{
                width: "auto",
                maxHeight: "25em",
                marginTop: "2em",
                marginBottom: "2em",
              }}
              className="rounded"
              src={productDetail.image}
            />
            <Card.Subtitle className="mt-3 mb-3 text-muted fs-5 w-70 mx-auto">
              <b className="text-danger">Description:</b>{" "}
              {productDetail.description}
            </Card.Subtitle>
            <p className="text-center text-muted start lh-1 mb-4">
              <b className="text-danger">Category: </b>
              {productDetail.category}
            </p>
            <p className="text-center text-muted start lh-1 fw-semibold mb-4">
              <b className="text-danger">In Stock:</b> {productDetail.stock}
            </p>

            <p className="text-center  text-danger fs-4">
              Price: ${productDetail.price}
            </p>
            <div>
              <div className="d-flex flex-row justify-content-center">
                {productReviews
                  ? [...Array(Math.round(productReviews.rating))].map(
                    (el, i) => <Star state={true} size="big" />
                  )
                  : ""}
                {productReviews
                  ? [...Array(5 - Math.round(productReviews.rating))].map(
                    (el, i) => <Star state={false} size="big" />
                  )
                  : ""}
              </div>

              {productReviews ? (
                <div>{Math.round(productReviews.rating)} of 5</div>
              ) : (
                <div>0 of 5</div>
              )}
            </div>
            <div className="row text-center">
              <div className="col-6">
                <Button className="px-5 py-2" variant="danger">
                  {" "}
                  <i className="fa-solid fa-heart-circle-plus"></i>{" "}
                </Button>
              </div>
              <div className="col-6">
                <Link to="/cart">
                  <Button
                    className="px-5 py-2"
                    variant="danger"
                    onClick={(e) => addCart(e, productDetail)}
                  >
                    {" "}
                    <i className="fa-solid fa-cart-plus"></i>{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <Card.Subtitle className="mt-5 mb-3 text-muted fs-5 w-70 mx-auto">
              Customer reviews
            </Card.Subtitle> */}
          </Card.Body>

          {/* <div className="w-70 mx-auto">
            {productReviews && productReviews.Reviews.length > 0 ? (
              productReviews.Reviews.map((review) => (

                <Card style={{ width: '500px', margin: '30px' }}>
                  {admin ? 
                  <Button
                    className="fw-bold text-danger"
                    variant="light"
                    onClick={() => deleteP(review.id)}
                    style={{
                      'border': '1px solid #cfcece',
                      'border-radius': '18px',
                      'cursor': 'pointer',
                      'display': 'block',
                      'font-size': '24px',
                      'padding': '2px 5px',
                      'position': 'absolute',
                      'right': '-10px',
                      'top': '-10px',}}
                  >×</Button> : null
                  }
                  <Comment
                    rating={review.rating}
                    comment={review.comment}
                    image={review.image}
                    id={review.id}
                  />
                </Card>
               ))

            ) : (
              <h4>There are no comments</h4>
            )}
          </div> */}
        </Card>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}