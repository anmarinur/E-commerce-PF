import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import TransitionY from '../../Transition/TransitionY';
import OrderCard from './OrderCard';

const OrderContainer = () => {

    return (
        <>
            <TransitionY>
            <div className='container '>
              <h3>My Orders</h3>
                <div className="row">
                    <OrderCard />
                </div>
            </div>
            </TransitionY>
        </>
    )
}
export default OrderContainer;