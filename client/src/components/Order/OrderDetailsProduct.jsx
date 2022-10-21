import React from 'react'

const OrderDetailsProduct = ({ products, totalPay }) => {

    return (
        <>
            <div className="row   ">
                {products && products.map(p => (
                    <div key={p.id} className="col-12 border mt-2 border-secondary p-1 rounded" >
                        <p className="text-center m-0">{p.name}</p>
                        <p className="text-center m-0 text-danger fw-bold"> {p.qty}</p>
                        <p className="text-center m-0">  $ {p.price} </p>
                    </div>                   
                ))}


                <div className='text-center mt-4 fs-4'>
                    Pay <span className='text-danger fw-bold'>{totalPay}</span>
                </div>
            </div>
        </>
    )
}

export default OrderDetailsProduct;