import React from 'react';
import Card from 'react-bootstrap/Card';

const FilterAndOrder = (props) => {


    return (
        <Card className='shadow w-100 p-0 rounded-0 border bg-light' >
            <Card.Body className=''>

                <div id='filter' className=''>
                    <p className='text-start fs-6 m-0 mx-3 fw-semibold'>Categories</p>
                    <div className='mx-5 my-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="laptops" onChange={ (e) => {props.setCategory(e.target.id)} } />
                            <label className="form-check-label fw-semibold"  htmlFor="laptops">
                                Laptops
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="smartphones" onChange={ (e) => {props.setCategory(e.target.id)} } />
                            <label className="form-check-label fw-semibold" htmlFor="smartphones">
                                Smartphones
                            </label>
                        </div>

                        

                    </div>

                </div>

                <div id="order">
                    <p className="text-start fs-6 m-0 mx-3 fw-semibold">Order By</p>
                    <div className='mx-5 my-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="radioOrderBy" id="orderByPrice" />
                            <label className="form-check-label fw-semibold" htmlFor="orderByPrice">
                                Price
                            </label>
                        </div>
                    </div>

                </div>


              
            </Card.Body>
        </Card>
    )
}


export default FilterAndOrder;