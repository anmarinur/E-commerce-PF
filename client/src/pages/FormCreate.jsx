import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function FormCreate(){
    return (
        <div>
            <h1 className="text-center">Create a new product</h1>
            <Form className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Label>Name</Form.Label>        
                    <Form.Control type="text" placeholder="Enter a name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="url" placeholder="Enter an URL"/>
                </Form.Group>

                <Form.Group clasName="mb-3" controlId="productDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder="Enter a description"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter a price"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                        <option>Select a category</option>
                        <option value="smarthphones">Smarthphones</option>
                        <option value="laptops">Laptops</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productStock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" placeholder="Set an initial stock"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Enter a brand" />
                </Form.Group>
            </Form>

            <div className="text-center">
                <Button variant="danger">Submit</Button>{' '}
            </div>
            
        </div>
        
    )
}