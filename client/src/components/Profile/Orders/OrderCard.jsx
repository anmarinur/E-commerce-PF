import React from 'react'
import axios from 'axios'
import useLoginEmail from '../../../utils/useLoginEmail'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import AddComment from '../../Reviews/AddComment'




const OrderCard = () => {
    const { getAccessTokenSilently } = useAuth0()
    const userEmail = useLoginEmail()
    const [userOrders, setUserOrders] = useState([])


    async function getUserOrders() {
        const token = await getAccessTokenSilently()
        try {
            var result = await axios.get(`/order/email/${userEmail}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserOrders(result.data)
        } catch (error) {
            console.log("getUserOrders Error:", error)
        }
    }

    useEffect(() => {
        getUserOrders()
      },[])

    async function payment(orderId){
        const order = userOrders.find((el) => el.id === Number(orderId));
        const id = orderId;
        const totalProducts = order.Products.map((product) => {
            return ({
                name: product.name,
                price: product.price,
                qty: product.OrderDetail.units,
                image: product.image
            })
        });
        let checkoutURL = await axios.post('/checkout', { totalProducts, id });
        window.location.replace(`${checkoutURL.data}`)
    }

    return (
        <div>
            <div className='col-12 mb-3 '>
                { typeof userOrders === 'object' ? userOrders.map(order =>
                    <div key={order.id} style={ {backgroundColor : '#EAEAEA'} } className="card border-secondary p-2 shadow-md mb-5">
                        <div className="row">
                            {/* Order ID */}
                            <div className="col-7">
                                <p className=' text-sm fw-semibold  bg-danger text-white px-2 w-25 text-center rounded'>Order ID: {order.id} </p>
                            </div>
                            {/* Order Status */}
                            <div className="col-5 text-danger fs-6 fw-bold">
                                <p> Order status: 
                                    { order.status==='created' && ( <> <span style={ {backgroundColor : '#000000'} } className=" text-white text-uppercase  py-1 px-2 rounded"> <i className="fa-solid fa-cart-shopping"></i> { order.status }</span> </> )}
                                    { order.status==='pending' && ( <> <span style={ {backgroundColor : '#facc25'} }  className=" text-black text-uppercase  py-1 px-2 rounded"> <i className="fa-solid fa-spinner"></i> { order.status }</span> </> )}
                                    { order.status==='in process' && ( <> <span style={ {backgroundColor : '#2967e3'} }  className=" text-white text-uppercase  py-1 px-2 rounded"> <i className="fa-solid fa-box-open"></i> { order.status }</span> </> )}
                                    { order.status==='delivered' && ( <> <span style={ {backgroundColor : '#de7f12'} }  className=" text-white text-uppercase  py-1 px-2 rounded"> <i className="fa-solid fa-truck"></i> { order.status }</span> </> )}
                                    { order.status==='received' && ( <> <span style={ {backgroundColor : '#128305'} } className="text-white text-uppercase  py-1 px-2 rounded"> <i className="fa-solid fa-house-circle-check"></i> { order.status }</span> </> )}
                                    { order.status==='cancelled' && ( <> <span style={ {backgroundColor : '#830505'} } className="text-white text-uppercase  py-1 px-2 rounded"><i className="fa-solid fa-ban"></i> { order.status }</span> </> )}
                        
                                  </p>
                            </div>
                            {/* shipping information */}  
                            <div className="col-12 mb-3">
                                <div className=' card position-relative mx-3 border border-danger'>
                                    <span className="position-absolute mx-5  top-0 start-0 translate-middle badge rounded bg-danger">
                                        Shipping Information
                                    </span>
                                    <div className="row m-2">
                                            <div className="col-6 mt-1"><span>{order.shipping_address}</span></div>
                                    </div>
                                </div>
                            </div>
                            {/* Products */}
                                <div className="col-12 pb-2">
                                    <div className=' card position-relative mx-3 border border-danger'>
                                        <span className="position-absolute mx-3 mb-2 top-0 start-0 translate-middle badge rounded bg-danger">
                                        Products
                                        </span>
                                        <span className="position-absolute mx-3 fs-6 px-3 top-100 start-50 translate-middle badge rounded bg-danger">
                                            $ {order.total_payment}
                                        </span>
                                        <div className='m-2'>
                                            {order.Products.map(product =>
                                                <div key={product.id} className="row text-center mb-2">
                                                    <div className="col-2"> <img style={{ maxHeight : '3em', maxWidth : '3em' , minHeight : '1em', minWidth:'2em'}} src={product.image} alt="" /> </div>
                                                    <div className="col-4"><span className='fw-bold text-wrap'>{product.name}</span> </div>
                                                    <div className="col-2"><span className='fw-bold'>{product.price}</span></div>
                                                    <div className="col-2"><span className='fw-bold'>{product.OrderDetail.units}</span></div>
                                                    <div className="col-2"><span className='fw-bold'>$ {product.OrderDetail.units * product.price}</span> </div>
                                                </div>
                                            )}
                                        </div>
                                </div>
                                        {order.status==='created' && <button value={order.id} className="mx-3 mt-3 fs-6 px-3 badge rounded bg-warning text-dark" onClick={(e) => payment(e.target.value)}>
                                            Continue payment process
                                        </button>}
                                        {order.status==='received' && <AddComment products={order.Products} email={userEmail}/>}
                            </div>
                        </div>
                    </div>
                    ) : <p>Without Orders</p>
                }
            </div>
        </div>
    )
}
export default OrderCard;
