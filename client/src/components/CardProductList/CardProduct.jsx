import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions';
import { toast } from 'react-toastify';
  



const CardProduct = ({ product }) => {

    const dispatch = useDispatch();
    
    const addFavorite = (e)=>{
        e.preventDefault();
        console.log('add Fav');
        
    }

    const addCart = (e) =>{
        e.preventDefault();
        dispatch (addToCart(e, product, product.id));;
        toast.success('Added to Cart')
    }

    return (
        <Link to={`/product/${product.id}`} className='card h-100 text-decoration-none shadow-sm ' >
            <div className="row h-100 align-items-center">
                <div className="col mx-auto align-middle"  >
                    <Card.Img variant="top" src={product.image} style={{ maxWidth:'90%', minWidth:'100%', minHeight : '100%' }} className="img-fluid w-50  mx-auto d-block p-3" />
                </div>
            </div>

            <Card.Body>

                <Card.Title className="text-center text-danger"> {product.name} </Card.Title>

                <p className="card-text text-center fw-light text-muted start lh-1" >{product.category}</p>
                <p className="card-text text-center  text-danger fs-4">${product.price}</p>
                <p className="card-text text-center fw-light text-muted start lh-1" >{product.brand}</p>
                <div className="row text-center">
                    <div className="col-6">
                        <Button variant="danger" onClick={addFavorite}> <i className="fa-solid fa-heart-circle-plus fa-xl"></i> </Button>
                    </div>
                    <div className="col-6">
                        <Link to='/cart'>
                        <Button variant="danger" onClick={ addCart } > <i className="fa-solid fa-cart-plus fa-xl"></i> </Button>
                        </Link>
                    </div>
                </div>

            </Card.Body>
        </Link>
    )
}


export default CardProduct;