import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, deleteProduct } from "../redux/actions";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import CloseButton from 'react-bootstrap/CloseButton';
import { useAuth0 } from "@auth0/auth0-react";



export default function ProductDetail(props) {

  const dispatch = useDispatch();
  const id = props.match.params.id;
  const history = useHistory()

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])

  const { isAuthenticated } = useAuth0()

  const deleteP = (id) => {
    dispatch(deleteProduct(id))
    alert("Product Removed")
    history.push("/")
  }

  const productDetail = useSelector((state) => state.details)


  return (
    <>
      <Nav />
      <div className="container mt-4">

        <Card className="border border-danger shadow" >
          <Card.Header className="text-center text-uppercase py-3 bg-danger text-white fw-semibold">
          <Card.Title className="text-start fs-3"> 
            {productDetail.name} 
            {isAuthenticated && <Button type="button" class="btn text-white" variant="danger" onClick={() => deleteP(id)}>Remove Product</Button>}
          </Card.Title>
            <div class="position-absolute top-0 end-0">
              <Link to="/">
                <Button className="m-3 fw-bold text-danger" variant="light">X</Button>
              </Link>
            </div>


          </Card.Header>
          <Card.Body className="text-center">
            
            <Card.Img  style={ {width : '25em',height : '30em', maxWidth : '100%'} } className=" rounded " src={productDetail.image} />
            <Card.Subtitle className="my-2 text-muted fs-5">
              Description:{productDetail.description}
            </Card.Subtitle>
            <p className="text-center fw-light text-muted start lh-1">
              Category: {productDetail.category}

            </p>
            <p className="text-center fw-light text-muted start lh-1 fw-semibold">
              In Stock: {productDetail.stock}
            </p>

            <p className="text-center  text-danger fs-4">Price: ${productDetail.price}</p>
            <div className="row text-center">
              <div className="col-6">
                <Button className="px-5 py-2" variant="danger"> <i class="fa-solid fa-heart-circle-plus"></i> </Button>
              </div>
              <div className="col-6">
                <Button className="px-5 py-2" variant="danger"> <i class="fa-solid fa-cart-plus"></i> </Button>
              </div>
            </div>
          </Card.Body>
        </Card>


      </div>
      <Footer />
    </>
  );
}