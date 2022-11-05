import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import TransitionY from '../../Transition/TransitionY';
import OrderCard from './OrderCard';

const OrderContainer = () => {

    return (
        <>
            <TransitionY>
            <div className='container  p-2 mt-4'>
                <div className="row">
                    <OrderCard />
                </div>
            </div>
            </TransitionY>
        </>
    )
}
export default OrderContainer;