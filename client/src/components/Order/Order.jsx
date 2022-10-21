import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Order = () => {


    return (
        <>
            <Nav />



            <div className="container mt-4 " >
                <h2>Order</h2>
                <div className="row">
                    <div className="col-7 border rounded bg-light shadow me-4 p-4">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button text-dark     fw-bold " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Shipping
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">

                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Contact Name</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div class="form-floating ">
                                                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                                                    <label for="floatingPassword">City</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div class="form-floating ">
                                                    <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                                                    <label for="floatingPassword">Department or Region</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            <div className="col">
                                <div className="border rounded mt-4 py-4 px-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                        <label class="form-check-label fs-6 fw-bold" for="flexCheckIndeterminate">
                                            Agreement with the seller.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-4 text-end">
                                <button type="button" class="btn btn-success px-5 py-3 fw-semibold fs-5" >Make the payment</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 border rounded bg-light shadow p-4">
                        <div className="row   ">
                            <div className="col-12 border p-1 rounded" >
                                <p className="text-center m-0"> Samsung Galaxy</p>
                                <p className="text-center m-0 text-danger fw-bold"> 4</p>
                                <p className="text-center m-0">  $400 </p>
                            </div>
                            <div className="col-12 border p-1 rounded mt-2" >
                                <p className="text-center m-0"> Samsung Galaxy</p>
                                <p className="text-center m-0 text-danger fw-bold"> 4</p>
                                <p className="text-center m-0 text-danger fw-bold">  $400 </p>
                            </div>

                            <div className='text-center mt-4 fs-4'>
                                Pay <span className='text-danger fw-bold'>$1400</span>
                            </div>
                            

                        </div>

                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Order;
