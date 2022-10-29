import React from 'react'
import axios from 'axios'
import useLoginEmail from '../../../utils/useLoginEmail'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'




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

    return (
        <div>
            <div className='col-12 mb-3 '>
                { typeof userOrders === 'object' ? userOrders.map(order =>
                    <div key={order.id} className="card border-secondary p-2 shadow-md mb-5">
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
                                    <span class="position-absolute mx-5  top-0 start-0 translate-middle badge rounded bg-danger">
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
                                        <span class="position-absolute mx-3 mb-2 top-0 start-0 translate-middle badge rounded bg-danger">
                                        Products
                                        </span>
                                        <span class="position-absolute mx-3 fs-6 px-3 top-100 start-50 translate-middle badge rounded bg-danger">
                                            $ {order.total_payment}
                                        </span>
                                        {order.status==='created' && <span class="position-absolute mx-3 fs-6 px-3 top-100 end-0 translate-middle badge rounded bg-warning text-dark">
                                            Continue payment process!
                                        </span>}
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
