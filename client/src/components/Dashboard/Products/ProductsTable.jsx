import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getAllProducts, setAlert } from '../../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios";

const ProductsTable = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const { getAccessTokenSilently } = useAuth0()
    const history = useHistory()

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    const deleteP = async (id) => {
        const token =  await getAccessTokenSilently();
        try {
            await axios.delete(`/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setAlert({
              type:'success',
              show :true,
              title : 'Product Removed',
              body : 'product has been successfully deleted'
            }))
        } catch (error) {
          dispatch(setAlert({
            type:'error',
            show :true,
            title : 'ERROR!!',
            body : `${error.name} : ${error.message}`
          }))
        }
        dispatch(getAllProducts());
      }


    const updateProduct = (props) => {
        history.push({pathname:'/create', state: props})
    }

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
                                        <button type="button" className="btn btn-sm btn-primary" onClick={() => deleteP(p.id)}><i className="fa-solid fa-trash"></i></button>
                                        <button type="button" className="btn btn-sm btn-warning" onClick={() => updateProduct(
                                            {
                                                id: p.id,
                                                name: p.name,
                                                image: p.image,
                                                brand: p.brand ,
                                                description: p.description,
                                                price: p.price,
                                                category: p.category,
                                                stock: p.stock,
                                            })
                                            }><i className="fa-solid fa-pen-to-square"></i></button>   
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductsTable;