import React from 'react';

const AdminOrderCard = ({ order,updateStatus,availableStatus }) => {


    return (
        <div className="col-12">
            <div class="card mb-3 mx-2 border border-dark p-2  shadow " >
                <div class="row g-0">
                    
                    <div class="col-md-12">
                        <div class="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <p class="card-text  m-0 fs-5 text-muted" >Order ID : <span className='fw-bold fs-5 text-muted'> { order.id }</span> </p>
                                    <h5 class="card-title fw-semibold"> email : {order.user_email}</h5>
                                    <p class="card-text m-0"> Total payment : $ {order.total_payment}</p>
                                    <p class="card-text m-0"> Shipping address : {order.shipping_address}</p>
                                    <p class="card-text"><small class=""> date created :{new Date(order.createdAt).toLocaleString()}    -    last update : {new Date(order.updatedAt).toLocaleString()} </small></p>
                                </div>
                                <div className="col">
                                <select onChange={(e)=> updateStatus(e, order.id)} class="form-select text-uppercase w-75">
                                                    <option selected>{order.status}</option>
                                                    {availableStatus.map(status=> !(status == order.status) ?
                                                    <option value={status}>{status}</option> : null
                                                        )}
                                                </select>
                                    <button className="btn btn-info text-white mt-3"> <i class="me-2 fa-solid fa-eye"></i>View </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrderCard;