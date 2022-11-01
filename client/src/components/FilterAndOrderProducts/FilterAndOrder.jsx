import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions';
import Accordion from 'react-bootstrap/Accordion';

const FilterAndOrder = (props) => {

    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories(""));
    }, []);

    useEffect(() => {
        if (!props.brands.find(brand => brand === props.brandsSelected)) props.setBrandsSelected('')
    }, [props.brands]);

    return (
        <Card className='shadow w-100 p-0 rounded-0 border bg-light' >
            <Card.Body className=''>

                <div id='filter' className=''>


                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Categories</Accordion.Header>
                            <Accordion.Body>
                                <div className='row mx-1 my-1'>
                                    <div className="col-xl-12 col-md-6 col-sm-6 col-6 form-check">
                                        <input className="form-check-input" type="radio" name="category" id="all" onChange={(e) => { props.setCategory(0) }} />
                                        <label className="form-check-label fw-semibold" htmlFor="all">
                                            All
                                        </label>
                                    </div>
                                    {categories.map(element => {
                                        return (
                                            <div key={element.id} className="col-xl-12 col-md-6 col-sm-6 col-6 form-check">
                                                <input className="form-check-input" type="radio" name="category" id={element.id} onChange={(e) => { props.setCategory(element.id) }} />
                                                <label className="form-check-label fw-semibold" htmlFor={element.id}>
                                                    {`${element.category[0].toUpperCase()}${element.category.slice(1)} `}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Brands</Accordion.Header>
                            <Accordion.Body>

                                <div className='row mx-1 my-1'>
                                    <div className="col-xl-12 col-md-6 col-sm-6 col-6 form-check">
                                        <input checked={props.check} className="form-check-input" type="radio" name="brand" id="allBrands" onChange={(e) => { props.setBrandsSelected('') }} />
                                        <label className="form-check-label fw-semibold" htmlFor="allBrands">
                                            All
                                        </label>
                                    </div>
                                    {props.brands && props.brands.map(b => (
                                        <div key={b} className="col-xl-12 col-md-6 col-sm-6 col-6 form-check">
                                            <input className="form-check-input" type="radio" name="brand" id={b} onChange={(e) => { props.setBrandsSelected(e.target.id) }} />
                                            <label className="form-check-label fw-semibold" htmlFor={b}>
                                                {b}
                                            </label>
                                        </div>
                                    ))}


                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                    {/* <p className='text-start fs-6 m-0 mx-3 fw-semibold'>Categories</p>
                    <div className='mx-5 my-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="category" id="all" onChange={(e) => { props.setCategory(0) }} />
                            <label className="form-check-label fw-semibold" htmlFor="all">
                                All
                            </label>
                        </div>
                        {categories.map(element => {
                            return (
                                <div key={element.id} className="form-check">
                                    <input className="form-check-input" type="radio" name="category" id={element.id} onChange={(e) => { props.setCategory(element.id) }} />
                                    <label className="form-check-label fw-semibold" htmlFor={element.id}>
                                        {`${element.category[0].toUpperCase()}${element.category.slice(1)} `}
                                    </label>
                                </div>
                            )
                        })}
                    </div> */}
                </div>


                {/* <div id='filter' className=''>
                    <p className='text-start fs-6 m-0 mx-3 fw-semibold'>Brands</p>
                    <div className='mx-5 my-2'>
                        <div className="form-check">
                            <input checked={props.check} className="form-check-input" type="radio" name="brand" id="allBrands" onChange={(e) => { props.setBrandsSelected('') }} />
                            <label className="form-check-label fw-semibold" htmlFor="allBrands">
                                All
                            </label>
                        </div>
                        {props.brands && props.brands.map(b => (
                            <div key={b} className="form-check">
                                <input className="form-check-input" type="radio" name="brand" id={b} onChange={(e) => { props.setBrandsSelected(e.target.id) }} />
                                <label className="form-check-label fw-semibold" htmlFor={b}>
                                    {b}
                                </label>
                            </div>
                        ))}


                    </div>

                </div> */}

                <div id="order">
                    {/* <p className="text-start fs-6 m-0 mx-3 fw-semibold">Order By</p> */}
                    <div className='mx-5 my-2'>
                        {/* <div className="form-check"> */}
                        {/* <input disabled className="form-check-input" type="radio" name="radioOrderBy" id="orderByPrice" /> */}
                        {/* <label className="form-check-label fw-semibold" htmlFor="orderByPrice">
                                Price
                            </label> */}
                        {/* </div> */}
                    </div>
                    <div className="  my-2 row g-3 align-items-center">
                        {/* <div className="col-auto">
                            <label className="form-check-label fw-semibold" htmlFor="sortByPrice">
                             Sort By Price
                                {props.sort === 'ASC' && <i className="mx-2 fa-solid fa-arrow-up-short-wide"></i>}
                                {props.sort === 'DESC' && <i className="mx-2 fa-solid fa-arrow-up-wide-short"></i>}

                            </label>
                        </div>
                        <div className="col-auto">

                            <select onChange={(e) => { props.setSortOrder(e.target.value) }} className="p-1 border-0 w-auto fw-semibold text-white bg-danger" id='sortByPrice' aria-label="Default select example">
                                <option className='fw-semibold text-white bg-danger' value={undefined}></option>
                                <option className='fw-semibold text-white bg-danger' value="ASC">ASC</option>
                                <option className='fw-semibold text-white bg-danger' value="DESC">DESC</option>
                            </select>

                        </div> */}
                    </div>



                </div>



            </Card.Body>
        </Card>
    )
}


export default FilterAndOrder;