import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setTotalPayment } from '../../redux/actions';

const CardPrice = ({ order }) => {
    const dispatch = useDispatch();
    const total = Object.values(order)?.reduce((acc, text)=>{
       return acc += Number(text.split("|")[1]);
    }, 0);
    
    useEffect(()=>{
        dispatch(setTotalPayment(total));
    },[order])

    return (
        <>
            <div className="col-xl-4  col-md-12 card border border-secondary shadow  bg-light p-4">
                <h5 className="text-left mb-4 pb-2">Cart Price</h5>

                <div className="d-flex justify-content-between mb-4">
                    <h6 className="fw-bold fs-4">Total : </h6>
                    <span className="fw-bold fs-4"> $ {total}</span>
                </div>
                
                { total === 0 ? <>  <button disabled size="md" className="btn btn-dark mt-4 w-100 disable" >  Pay Now  </button> </> :
                    <>
                        <NavLink disabled={total === 0} to={'/Order'} variant="dark" size="md" className="btn btn-success mt-4 w-100">
                            Pay Now
                        </NavLink>
                    </>
                }

            </div>
        </>
    )

}
export default CardPrice;