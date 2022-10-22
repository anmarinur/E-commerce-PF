import React from 'react';
import { NavLink } from 'react-router-dom';

const CardPrice = ({ totalPrice }) => {


    return (
        <>
            <div className="col-xl-4  col-md-12 card border border-secondary shadow  bg-light p-4">
                <h5 className="text-left mb-4 pb-2">Cart Price</h5>

                <div className="d-flex justify-content-between mb-4">
                    <h6 className="fw-bold fs-4">Total : </h6>
                    <span className="fw-bold fs-4"> $ {totalPrice}</span>
                </div>
                
                { totalPrice === 0 ? <>  <button disabled size="md" className="btn btn-dark mt-4 w-100 disable" >  Pay Now  </button> </> :
                    <>
                        <NavLink disabled={totalPrice === 0} to={'/Order'} variant="dark" size="md" className="btn btn-success mt-4 w-100">
                            Pay Now
                        </NavLink>
                    </>
                }

            </div>
        </>
    )

}
export default CardPrice;