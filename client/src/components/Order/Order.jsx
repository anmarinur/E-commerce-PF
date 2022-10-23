import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FormOrder from './FormOrder';
import OrderDetailsProduct from './OrderDetailsProduct';

const Order = () => {

    const productsCart = useSelector( state => state.cart);
    const quantityOrder = useSelector(state => state.currentOrder);
    console.log('cantidades', quantityOrder)

    const totalProducts = productsCart.map((product) => {
        return {
            ...product,
            qty: quantityOrder[product.id]
        }
    })

    console.log(totalProducts)

    async function mercadopago() {
        try {
            let checkoutURL = await axios.post('/checkout', totalProducts);
            window.location.replace(`${checkoutURL.data}`)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Nav />



            <div className="container mt-4 " >
                <h2>Order</h2>
                <div className="row g-4">
                    <div className="col-xl-7 col-md-8  border border-secondary   rounded bg-light shadow me-4 p-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button text-dark     fw-bold " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Shipping
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <FormOrder />

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            <div className="col">
                                <div className="border rounded mt-4 py-4 px-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                        <label className="form-check-label fs-6 fw-bold" for="flexCheckIndeterminate">
                                            Agreement with the seller.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-4 text-end">
                                <button type="button" className="btn btn-success px-5 py-3 fw-semibold fs-5" onClick={mercadopago}>Place your order</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-3  border border-secondary rounded bg-light shadow p-4">
                        <OrderDetailsProduct products={productsCart} totalPay={productsCart.length} />

                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Order;
