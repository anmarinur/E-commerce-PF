import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

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

    const [errors, setErrors] = useState({
        name: 'Enter a valid name',
        image: 'Enter a valid url',
        description: 'Enter a description',
        price: 'Enter a value higher than 0',
        category: 'Select one category',
        stock: 'Enter a value higher than 0',
        brand: 'Enter a valid brand name'
    })

    function validate(input) {
        if(!input.name || input.name.length < 3) {
            errors.name = 'Enter a valid name';
        } else {
            errors.name = '';
        }

        if(!input.image || input.image.length < 5) {
            errors.image = 'Enter a valid url'
        } else {
            errors.image = '';
        }

        if(!input.description || input.description.length < 10) {
            errors.description = 'Enter a description'
        } else {
            errors.description = '';
        }

        if(!input.price || input.price <= 0) {
            errors.price = 'Enter a value higher than 0'
        } else {
            errors.price = '';
        }

        if(!input.category) {
            errors.category = 'Select one category'
        } else {
            errors.category = '';
        }

        if(!input.stock || input.stock <= 0) {
            errors.stock = 'Enter a value higher than 0'
        } else {
            errors.stock = '';
        }

        if(!input.brand || input.brand.length < 2) {
            errors.brand = 'Enter a valid brand name'
        } else {
            errors.brand = '';
        }
        console.log(errors)
        return errors;
    }

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value
            })
        )
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
         <Nav />
            <h1 className="text-center">Create a new product</h1>
            <Form className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Label>Name</Form.Label>        
                    <Form.Control type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} placeholder="Enter a name"/>
                    {errors.name && <Form.Text className="text-muted">Enter a valid name</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="productImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="url" name="image" value={input.image} onChange={(e) => handleChange(e)} placeholder="Enter an URL"/>
                    {errors.image && <Form.Text className="text-muted">Enter a valid url</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="productDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} name="description" value={input.description} onChange={(e) => handleChange(e)} placeholder="Enter a description"/>
                    {errors.description && <Form.Text className="text-muted">Enter a description</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="productPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value ={input.price} onChange={(e) => handleChange(e)} placeholder="Enter a price"/>
                    {errors.price && <Form.Text className="text-muted">Enter a value higher than 0</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="productCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" onChange={(e) => handleChange(e)}>
                        <option>Select a category</option>
                        <option value="smartphones">Smartphones</option>
                        <option value="laptops">PC Laptops</option>
                    </Form.Control>
                    {errors.category && <Form.Text className="text-muted">Select one category</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="productStock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" name="stock" value={input.stock} onChange={(e) => handleChange(e)} placeholder="Set an initial stock"/>
                    {errors.stock && <Form.Text className="text-muted">Enter a value higher than 0</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="productBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" name="brand" value={input.brand} onChange={(e) => handleChange(e)} placeholder="Enter a brand" />
                    {errors.brand && <Form.Text className="text-muted">Enter a valid brand name</Form.Text>}
                </Form.Group>
            </Form>

            <div className="text-center">
                <Button variant="danger" type="submit"  onClick={(e) => handleClick(e)} 
                disabled={(errors.name || errors.image || errors.description || errors.price || errors.category || errors.stock || errors.brand) ? true : ''}
                >Submit</Button>{' '}
            </div>
          <Footer />
        </div>
    )
}