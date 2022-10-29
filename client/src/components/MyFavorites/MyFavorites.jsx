import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {getTotalFav} from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function MyFavorites() {
    const { user, getAccessTokenSilently } = useAuth0();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {

        getFav(user ? user.email : user);
        
    }, [])

    const getFav = async (email) => {
        try {
            const token = await getAccessTokenSilently()
            const result = await axios.get(`/favourites?email=${email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const token2 = await getAccessTokenSilently()
        setProducts(result.data);
        dispatch(getTotalFav(email,token2))  ;  
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFav = async(email,id) => {
        const token = await getAccessTokenSilently()
        try {
            const result = await axios.delete(`/favourites?email=${email}&id=${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (result.status === 200) { getFav(email)}
            const token2 = await getAccessTokenSilently()
        dispatch(getTotalFav(email,token2));
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="container">
                <h3>MyFavorites</h3>
                <div className="row">
                    <div className="col-12">

                        {products.length !==0 ? products.map(product =>(
                            <div  key={product.id} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img style={{ maxWidth: '9em', maxHeight : '9em' }} src={product.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title m-0 p-0">{product.name}</h5>
                                            <p className="card-text m-0 p-0 fw-semibold">Price : ${product.price}</p>
                                            <p className="card-text m-0 p-0 fw-semibold"><small className="text-muted fs-6 text-danger">Stock  : {product.stock}</small></p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <button onClick={ () => deleteFav(user.email,product.id)} className='mx-auto  btn btn-secondary' ><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        )) : (<p> NO FAVORITES </p>)}
                        
                    </div>
                </div>
            </div>
        </>
    )
}