import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Starv2 from './Starv2'

export default function AddComment({products, email}) {
  const [star, setStar] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false
  })

  const [input, setInput] = useState({
    email: '',
    id: '',
    comment: '',
    rating: 0
  })
  console.log(input)

  function handleChange(e) {
    console.log('name: ', e.target.name, 'value: ', e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit() {
    const rating = Object.values(star).filter((el) => el === true).length
    console.log(rating)
    setInput({
      ...input,
      email,
      rating
    })

  }


  
  return(
    <div>
      <Card style={{margin: '30px' }}>
        <Card.Body>
          <Card.Title>Comment and rate your product(s)</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select product</Form.Label>
              <Form.Control as="select" name="id" onChange={(e) => handleChange(e)}>
                <option>Select a product</option>
                {products.map((product) => {
                  return (
                  <option key={product.id} value={product.id} >{product.name}</option>
                  )
                })}
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