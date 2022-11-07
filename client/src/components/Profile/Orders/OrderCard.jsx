import React from 'react'
import axios from 'axios'
import useLoginEmail from '../../../utils/useLoginEmail'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import AddComment from '../../Reviews/AddComment'
import Loading from '../../Loading/Loading'




const OrderCard = () => {
    const { getAccessTokenSilently } = useAuth0();
    const userEmail = useLoginEmail();
    const [userOrders, setUserOrders] = useState([]);
    const [userData, setUserData] = useState({});

    async function getUserOrders() {
        const token = await getAccessTokenSilently()
        try {
            let result = await axios.get(`/order/email/${userEmail}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserOrders(result.data)
            let userGet = await axios.get(`/user/${userEmail}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserData(userGet.data)
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
                { Array.isArray(userOrders) && userOrders.length > 0 ? userOrders.map(order =>
                    <div key={order.id} style={ {backgroundColor : '#FDEDEC'} } className="card shadow border-gray p-2 mb-5">
                        <div className="row">
                            {/* Order ID */}
                            <div className="col-xl-6 col-sm-4 text-center mx-auto py-2">
                                <span className=' text-sm fw-semibold  bg-danger text-white px-4 rounded'>ID: {order.id} </span>
                            </div>
                            {/* Order Status */}
                            <div className="col-xl-6 col-sm-8 text-danger fs-6 fw-bold text-center py-2">
                                <p> status: 
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
                                            <div className="col-12 mt-1"><span>{order.shipping_address}</span></div>
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
                                                    { product.Offer?.active ==="true" ? <div className="col-2"><span className='fw-bold'>{Math.trunc(product.price*(1-product.Offer.discount/100))}</span></div>
                                                    : <div className="col-2"><span className='fw-bold'>{product.price}</span></div>}
                                                    <div className="col-2"><span className='fw-bold'>{product.OrderDetail.units}</span></div>
                                                    { product.Offer?.active ==="true" ? <div className="col-2"><span className='fw-bold'>$ {product.OrderDetail.units * Math.trunc(product.price*(1-product.Offer.discount/100))}</span></div>
                                                    :<div className="col-2"><span className='fw-bold'>$ {product.OrderDetail.units * product.price}</span> </div>}
                                                </div>
                                            )}
                                        </div>
                                </div>
                                        {order.status==='created' && <button value={order.id} className="mx-3 mt-3 fs-6 px-3 rounded btn btn-warning fw-bold text-dark" onClick={(e) => payment(e.target.value)}>
                                            Continue payment process
                                        </button>}
                                        {order.status==='received' && <AddComment products={order.Products} email={userEmail} idOrder={order.id} block={userData.block}/>}
                            </div>
                        </div>
                    </div>
                    ) :
                    <div className='d-flex flex-column align-items-center mt-4'>
                        <i class="fa-solid fa-circle-exclamation fs-4 text-danger"></i>
                        <p className='text-danger fw-bold fs-4 mt-2'>Without Orders</p>
                    </div>
                }
            </div>
        </div>
    )
}
export default OrderCard;
