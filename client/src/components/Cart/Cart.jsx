import React from "react";
import { Link } from "react-router-dom";
import { Container, Table, Row } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ProductTrElement from './ProductTrElement';
import { useLocalStorage } from '../../utils/localStore';
import CardPrice from "./CartPrice";


export const Cart = () => {

  // function Cart() {

  const [cart, setCart] = useLocalStorage('cart', '')
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.subTotal;
    });
    setTotalPrice(total);
  }, [totalPrice, setTotalPrice, cart])


  function editCart(cant, id) {
    const producEdit = cart.find(p => p.id === id);
    producEdit.cant = cant;
    producEdit.subTotal = cant * producEdit.price;
    setCart(cart);
    setTotalPrice();
  }
  function removeCart(id) {
    console.log(id);
    setCart(
      cart.filter(p => p.id !== id)
    )

  }



  return (
    <div>
      <Nav />
      <div className="">
        <Container className="card mb-5 mt-4 rounded border border-secondary p-3 shadow  bg-light">
          <h5 className="text-left mb-4 ps-2">Cart List</h5>
          <Row className="mx-1" >
            <div className="col-xl-8  col-md-12 col-sm-12 cartShow">
              <Table className='rounded bg-light overflow-hidden border border-secondary' bordered hover responsive="md">
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

                  {cart.length ? cart.map((product, idx) => (
                    <>
                      <ProductTrElement
                        product={product}
                        key={idx}
                        isCart={true}
                        editCart={editCart}
                        removeCart={removeCart}
                      />
                    </>
                  )) :
                    (<>
                      <tr >
                        <td colspan={6}>
                          <p className="text-center fs-5 my-2">You have no product in the Cart;</p>
                        </td>
                      </tr>
                    </>)}
                </tbody>
               {/* {console.log(cart)} */}
              </Table>
            </div>
            <CardPrice totalPrice={totalPrice} />
          </Row>
        </Container>
      </div>



     {/* <Link to={'/'} className=' dropdown-item'> Home </Link> */}
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




