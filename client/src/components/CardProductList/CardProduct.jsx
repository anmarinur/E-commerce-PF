import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardProduct = () => {



    return (
        <Card  className='' >
            <Card.Img variant="top" src="https://dummyjson.com/image/i/products/1/1.jpg" />
            <Card.Body>
                <Card.Title className="text-center">iPhone 9</Card.Title>
                <Card.Text>
                    <p className="text-center fw-light text-muted start lh-1" >Smartphone</p>
                    <p className="text-center  text-danger fs-4">$549</p>
                    <p className="text-center fw-light text-muted start lh-1" >"An apple mobile which is nothing like apple"</p>
                    

                </Card.Text>
                <div className="row text-center">
                    <div className="col-6">
                        <Button variant="danger"> Fav </Button>
                    </div>
                    <div className="col-6">
                        <Button variant="danger"> Add a Cart</Button>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}


export default CardProduct;