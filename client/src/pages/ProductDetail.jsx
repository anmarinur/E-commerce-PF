import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import  {toast}  from 'react-toastify';
import { useLocalStorage } from "../utils/localStore";


export default function ProductDetail(props) {

  const dispatch = useDispatch();
  const id = props.match.params.id;
  const history = useHistory()
  const [cart,setCart] = useLocalStorage ('cart','')
  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])

  const productDetail = useSelector((state) => state.details)


  const addCart = (e, prod) => {
    e.preventDefault();
    let existingProdInCart=cart.find(x=> x.id===prod.id);
    if(existingProdInCart){
        existingProdInCart.cant++;
        existingProdInCart.subTotal+=prod.price;
        setCart([...cart])
    }
    else
        setCart([...cart, Object.assign(prod, { cant: 1, subTotal: prod.price })])
        
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
      }

  return (
    <>
      <Nav />
      <div className="container mt-4">

        <Card className="border border-danger shadow" >
          <Card.Header className="text-center align-items-center text-uppercase py-0 px-3 bg-danger text-white fw-semibold">
          <Card.Title className="d-flex justify-content-between fs-3 align-items-center"> 
            {productDetail.name}
            <div>
              <Link to="/">
                <Button className="m-3 fw-bold text-danger" variant="light">X</Button>
              </Link>
            </div>
          </Card.Title>


          </Card.Header>
          <Card.Body className="text-center">
            
            <Card.Img  style={ {width : 'auto', maxHeight : '25em', marginTop: '2em', marginBottom:'2em'} } className="rounded" src={productDetail.image} />
            <Card.Subtitle className="mt-3 mb-3 text-muted fs-5 w-70 mx-auto">
              <b className="text-danger">Description:</b> {productDetail.description}
            </Card.Subtitle>
            <p className="text-center text-muted start lh-1 mb-4">
              <b className="text-danger">Category: </b>{productDetail.category}

            </p>
            <p className="text-center text-muted start lh-1 fw-semibold mb-4">
              <b className="text-danger">In Stock:</b> {productDetail.stock}
            </p>

            <p className="text-center  text-danger fs-4">Price: ${productDetail.price}</p>
            <div className="row text-center">
              <div className="col-6">
                <Button className="px-5 py-2" variant="danger"> <i class="fa-solid fa-heart-circle-plus"></i> </Button>
              </div>
              <div className="col-6">
                <Link to='/cart'>
                <Button className="px-5 py-2" variant="danger" onClick={(e) => addCart(e, productDetail)}> <i class="fa-solid fa-cart-plus"></i> </Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>


      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}