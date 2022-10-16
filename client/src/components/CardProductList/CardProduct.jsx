import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




const CardProduct = ({product}) => {

    return (
        <Card  className='h-100' >
            <Card.Img variant="top" src={product.image}  style={{ width: '100%', height : '150px'}} />
            <Card.Body>
                <Link to={`/product/${product.id}`} className="text-decoration-none text-danger">
                    <Card.Title className="text-center"> {product.name} </Card.Title>
                </Link>
                <Card.Text>
                    <p className="text-center fw-light text-muted start lh-1" >{product.category}</p>
                    <p className="text-center  text-danger fs-4">${product.price}</p>
                    <p className="text-center fw-light text-muted start lh-1" >{product.brand}</p>
                    

                </Card.Text>
                <div className="row text-center">
                    <div className="col-6">
                        <Button variant="danger"> <i class="fa-solid fa-heart-circle-plus"></i> </Button>
                    </div>
                    <div className="col-6">
                        <Button variant="danger"> <i class="fa-solid fa-cart-plus"></i> </Button>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}


export default CardProduct;