import React from "react";
import { Link } from "react-router-dom";
import { Container, Table, Row, Button } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useSelector, connect } from "react-redux";
import { useEffect, useState } from "react";
import ProductTrElement from './ProductTrElement';


export const Cart = () => {
  
// function Cart() {
// let cart= props.cart
  const cart = useSelector(state => state.cart);

  const [subTotalPrice, setsubTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

     useEffect(() => {
       let price = 0;
       cart.forEach((item) => {
         price += item.qty * item.price;
       });
       setsubTotalPrice(price);
       setTotalPrice(price + tax);
       if (cart.length === 0) {
         setTax(0);
         let cartShow = document.querySelector(".cartShow");
         let table = document.querySelector("Table");
         table.style.display = "none";
         cartShow.innerHTML += "No Products in cart list";
       }
     }, [cart, totalPrice, setTotalPrice, tax, setTax]);




  return (
    <div>
      <Nav />
      <div className="">
        <Container className="card mb-5 mt-4 rounded-0 p-3 shadow">
          <h5 className="text-left mb-4 ps-2">Cart List</h5>
          <Row className="mx-1" >
            <div className="col-xl-8  col-md-12 col-sm-12 cartShow">
              <Table className=' border shadow' bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>Product Img</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
               
                  {cart && cart.map((product, idx) => (
                    <>
                      <ProductTrElement
                        product={product}
                        key={idx}
                        isWish={false}
                        isCart={true}
                      />
{console.log(product)}
                      {/* <tr>
                        <td className="align-middle text-center"> <img className="align-middle" src={product.image} alt="IMG_PRODUCT" style={{ maxHeight: '5em' }} /> </td>
                        <td className="align-middle fs-6">{product.name}</td>
                        <td className="align-middle fs-6"> $ {product.price}</td>
                        <td style={{ maxWidth: '1em', minHeight: '1em' }} className=" align-middle fs-6">
                          <input className="form-control form-control-sm text-center" type="number" name="quality" id="quality" />
                        </td>

                      </tr> */}

                    </>


                  ))}
                </tbody>
              </Table>
            </div>
            <div className="col-xl-4  col-md-12 card cartSum shadow rounded-0 bg-light p-4">
              <h5 className="text-left mb-4 pb-2">Cart Price</h5>
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-normal">Tax :</h6>
                <span>#</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h6 className="fw-normal">SubTotal Price :</h6>
                <span>{subTotalPrice}</span>
              </div>
              <div className="d-flex justify-content-between fw-bold">
                <h6>Total Price :</h6>
                <span>{totalPrice}</span>
              </div>
              <Button variant="dark" size="md" className="mt-4 w-100">
                pay now
              </Button>
            </div>
          </Row>
        </Container>
      </div>



      <Link to={'/'} className=' dropdown-item'> Home </Link>
      <Footer />
    </div>


  )
}

//  const mapStateToProps = (state) => {
//    return {
//      cart: state.rCart.cart,
//    };
//  };

//  export default connect(mapStateToProps)(Cart);




