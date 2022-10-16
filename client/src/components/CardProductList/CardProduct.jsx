import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const CardProduct = ({product}) => {

    return (
        <Card  className='h-100' >
            <Card.Img variant="top" src={product.image}  style={{ width: '100%', height : '150px'}} />
            <Card.Body>
                <Card.Title className="text-center">{product.name}</Card.Title>
                <Card.Text>
                    <p className="text-center fw-light text-muted start lh-1" >{product.category}</p>
                    <p className="text-center  text-danger fs-4">{product.price}</p>
                    <p className="text-center fw-light text-muted start lh-1" >{product.description}</p>
                    

                </Card.Text>
                <div className="row text-center">
                    <div className="col-6">
                        <Button variant="danger"> Fav </Button>
                    </div>
                    <div className="col-6">
                        <Button variant="danger">add to cart</Button>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}


export default CardProduct;