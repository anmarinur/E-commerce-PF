import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../../redux/actions';

const ProductsTable = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <>
            <div className="container mt-4 mx-auto bg-light">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>

                        {products && products.map(p => (
                            <tr key={p.id}>
                                <th scope="row">{p.id}</th>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-sm btn-primary"><i className="fa-solid fa-trash"></i></button>
                                        <button type="button" className="btn btn-sm btn-warning"><i className="fa-solid fa-pen-to-square"></i></button> 
                                    </div>
                                </td>
                            </tr>

                        ))}
                        {/* <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductsTable;