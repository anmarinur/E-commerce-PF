import React from 'react'
import axios from 'axios'
import useLoginEmail from '../../../utils/useLoginEmail'
import { useEffect } from 'react'
import { getUserOrders } from "../../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'



const OrderCard = () => {
    const dispatch = useDispatch()
    const userEmail = useLoginEmail()

    useEffect(() => {
        dispatch(getUserOrders(userEmail))
      },[dispatch])

      const userOrders = useSelector((state) => state.userOrders)

    return (
        <div>
            <div className='col-12 mb-3'>
                { userOrders.length !== 0 ? userOrders.map(order =>
                    <div key={order.id} className="card border-secondary p-2 shadow-sm mb-3">
                        <div className="row">
                            {/* Order ID */}
                            <div className="col-8">
                                <p className=' text-sm fw-semibold  bg-danger text-white px-2 w-25 text-center rounded rounded-pill'>Order ID: {order.id} </p>
                            </div>
                            {/* Order Status */}
                            <div className="col-4 text-danger fs-6 fw-bold">
                                <p> Order status: {order.status}  </p>
                            </div>
                            {/* customer information */}
                            <div className="col-6 mb-3">
                                <div className=' card position-relative mx-3 border border-danger'>
                                    <span class="position-absolute mx-5  top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                    Customer information
                                    </span>
                                    <div className="row m-2">
                                        <div className="col">
                                            <span className='mr-2'>Andres Patrana</span>
                                            <span className='ms-2'>{order.user_email}</span>
                                            <span className='ms-2'> +57 318465156 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* shipping information */}  
                            <div className="col-6 mb-3">
                                <div className=' card position-relative mx-3 border border-danger'>
                                    <span class="position-absolute mx-5  top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                        Shipping Information
                                    </span>
                                    <div className="row m-2">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-6"> <span> {order.shipping_adress} </span></div>
                                                <div className="col-6"> <span> Valle del Cauca</span></div>
                                                <div className="col-6"> <span> Cra 43 N 4 a 13</span></div>
                                                <div className="col-6"> <span> 4891564</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Products */}
                                <div className="col-12 pb-2">
                                    <div className=' card position-relative mx-3 border border-danger'>
                                        <span class="position-absolute mx-3 mb-2 top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                        Products
                                        </span>
                                        <span class="position-absolute mx-3 fs-6 px-3 top-100 start-50 translate-middle badge rounded-pill bg-danger">
                                            $ {order.total_payment}
                                        </span>
                                        <div className='m-2'>
                                            {order.Products.map(product =>
                                                <div key={product.id} className="row text-center">
                                                    <div className="col"><span className='fw-bold'>{product.name}</span> </div>
                                                    <div className="col"><span className='fw-bold'>{product.price}</span></div>
                                                    <div className="col"><span className='fw-bold'>{product.OrderDetail.units}</span></div>
                                                    <div className="col"><span className='fw-bold'>$ {product.OrderDetail.units * product.price}</span> </div>
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