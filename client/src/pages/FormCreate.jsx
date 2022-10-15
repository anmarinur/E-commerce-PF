import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function FormCreate(){

    const [input, setInput]= useState({
        name: '',
        image: '',
        description: '',
        price: 0,
        category: '',
        stock: 0,
        brand: ''
    });

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleClick(e) {
        alert('Product created successfully');
        setInput({
            name: '',
            image: '',
            description: '',
            price: 0,
            category: '',
            stock: 0,
            brand: ''
        })
    }

    return (
        <div>
            <h1 className="text-center">Create a new product</h1>
            <Form className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Label>Name</Form.Label>        
                    <Form.Control type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} placeholder="Enter a name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="url" name="image" value={input.image} onChange={(e) => handleChange(e)} placeholder="Enter an URL"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} name="description" value={input.description} onChange={(e) => handleChange(e)} placeholder="Enter a description"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value ={input.price} onChange={(e) => handleChange(e)} placeholder="Enter a price"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" onChange={(e) => handleChange(e)}>
                        <option>Select a category</option>
                        <option value="Smartphones">Smartphones</option>
                        <option value="PC Laptops">PC Laptops</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productStock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" name="stock" value={input.stock} onChange={(e) => handleChange(e)} placeholder="Set an initial stock"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="productBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" name="brand" value={input.brand} onChange={(e) => handleChange(e)} placeholder="Enter a brand" />
                </Form.Group>
            </Form>

            <div className="text-center">
                <Button variant="danger" type="submit"  onClick={(e) => handleClick(e)}>Submit</Button>{' '}
            </div>
        </div>
    )
}