import React from 'react'

const OrderCard = () => {


    return (
        <>
            <div className='col-12 mb-3'>
                <div className="card border-secondary p-2 shadow-sm">
                    <div className="row">

                        {/* Order ID */}
                        <div className="col-8">
                            <p className=' text-sm fw-semibold  bg-danger text-white px-2 w-25 text-center rounded rounded-pill'> 182156 </p>
                        </div>
                        {/* Order Status */}
                        <div className="col-4 text-danger fs-6 fw-bold">
                            <p> Pendiente  </p>
                        </div>
                        {/* customer information */}
                        <div className="col-6 mb-3">
                            <div className=' card position-relative mx-3 border border-danger'>
                                <span class="position-absolute mx-5  top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                    customer information
                                </span>
                                <div className="row m-2">
                                    <div className="col">
                                        <span className='mr-2'>Andres Patrana</span>
                                        <span className='ms-2'>apastrana@gmail.com</span>
                                        <span className='ms-2'> +57 318465156 </span>


                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* shipping information */}  
                        <div className="col-6 mb-3">
                            <div className=' card position-relative mx-3 border border-danger'>
                                <span class="position-absolute mx-5  top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                    shipping information
                                </span>
                                <div className="row m-2">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-6"> <span> Buenaventura </span></div>
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
                                    $ 31000
                                </span>
                                <div className='m-2'>
                                    <div className="row text-center">
                                        <div className="col"><span className=''>Samsung 8</span> </div>
                                        <div className="col"><span className='fw-bold'>$ 800</span> </div>
                                        <div className="col"><span className=''>2</span> </div>
                                        <div className="col"><span className='fw-bold   '>$ 1600</span> </div>


                                    </div>
                                    <div className="row text-center">
                                        <div className="col"><span className=''>iPhone XR</span> </div>
                                        <div className="col"><span className='fw-bold'>$ 1500</span> </div>
                                        <div className="col"><span className=''>1</span> </div>
                                        <div className="col"><span className='fw-bold   '>$ 1500</span> </div>


                                    </div>
                                    
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </div>

        </>
    )
}
export default OrderCard;