import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Starv2 from './Starv2';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export default function AddComment({products, email, idOrder}) {
  const [star, setStar] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false
  })

  const rating = Object.values(star).filter((el) => el === true).length
  const { getAccessTokenSilently } = useAuth0();
  let comments = [];

  const [input, setInput] = useState({
    productId: '',
    comment: '',
    orderId: ''
  })

  const commentRate = {
    email,
    comment: input.comment,
    rating,
    idOrder,
    idProduct: input.productId
  }

  function handleChange(e) {
    console.log('name: ', e.target.name, 'value: ', e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit() {
    const token = await getAccessTokenSilently();
    console.log('comentario', commentRate)
    const response = await axios.post('/review', commentRate,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    console.log(response)
    comments = await (await axios.get('review/' + 3)).data[0].Reviews;
    console.log(comments)
  }

  return(
    <div>
      <Card style={{margin: '30px' }}>
        <Card.Body>
          <Card.Title>Comment and rate your product(s)</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select product</Form.Label>
              <Form.Control as="select" name="productId" onChange={(e) => handleChange(e)}>
                <option>Select a product</option>
                {products ? products.map((product) => {
                  return (
                  <option key={product.id} value={product.id} >{product.name}</option>
                  )
                }):('')}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="rate">
              <Form.Label>Rate</Form.Label>        
                <Starv2 star={star} setStar={setStar}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="review">
              <Form.Label>Review:</Form.Label>
              <Form.Control as="textarea" rows={2} name="comment" value={input.comment} onChange={(e) => handleChange(e)} placeholder="Enter a review"/>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-around py-3 w-50 mx-auto">
            <Button variant="danger" type="submit"  onClick={onSubmit}>Submit</Button>{' '}
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}