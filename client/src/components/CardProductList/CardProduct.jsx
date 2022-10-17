import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




const CardProduct = ({ product }) => {

    return (
        <Card className='h-100' >
            <div className="row h-50">
                <div className="col mx-auto align-middle"  >
                    <Card.Img variant="top" src={product.image} className="img-fluid w-50  mx-auto d-block " />
                </div>
            </div>

            <Card.Body>
                <Link to={`/product/${product.id}`} className="text-decoration-none text-center text-danger">
                    <Card.Title className="text-center"> {product.name} </Card.Title>
                </Link>
                <p className="card-text text-center fw-light text-muted start lh-1" >{product.category}</p>
                <p className="card-text text-center  text-danger fs-4">${product.price}</p>
                <p className="card-text text-center fw-light text-muted start lh-1" >{product.brand}</p>
                <div className="row text-center">
                    <div className="col-6">
                        <Button variant="danger"> <i className="fa-solid fa-heart-circle-plus"></i> </Button>
                    </div>
                    <div className="col-6">
                        <Button variant="danger"> <i className="fa-solid fa-cart-plus"></i> </Button>
                    </div>
                </div>

            </Card.Body>
        </Card>
    )
}


export default CardProduct;