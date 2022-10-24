import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import FormOrder from './FormOrder';
import OrderDetailsProduct from './OrderDetailsProduct';
import { useAuth0 } from '@auth0/auth0-react';
import { clearCart } from '../../redux/actions';

const Order = () => {

    const { user } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

    const dispatch = useDispatch();
    const productsCart = useSelector( state => state.cart);
    const quantityOrder = useSelector(state => state.currentOrder);
    const totalCart = useSelector(state => state.totalPayment)
    const [shippingCheck, setShippingCheck] = useState('');
    const [check, setCheck] = useState(false);

    const totalProducts = productsCart.map((product) => {
        return {
            ...product,
            qty: quantityOrder[product.id]
        }
    })

    const finalOrder = {
        user_email: user.email,
        total_payment: totalCart,
        shipping_address: shippingCheck,
        status: "in process"
    }

    function handleCheck(e) {
        setCheck(true);
    }

    async function mercadopago() {
        try {
            const token = await getAccessTokenSilently();
            await axios.post('/order', finalOrder, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(clearCart());
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
                                        Check your personal information
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <FormOrder setShippingCheck={setShippingCheck}/>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            <div className="col">
                                <div className="border rounded mt-4 py-4 px-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" onChange={handleCheck}/>
                                        <label className="form-check-label fs-6 fw-bold" htmlFor="flexCheckIndeterminate">
                                            I have read and accept store polices
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-4 text-end">
                                <button disabled={shippingCheck === '' || check === false} type="button" className="btn btn-success px-5 py-3 fw-semibold fs-5" onClick={mercadopago}>Place your order</button>
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
