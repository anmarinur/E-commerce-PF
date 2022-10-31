import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Starv2 from './Starv2';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { toast } from 'react-toastify';

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

  const [input, setInput] = useState({
    idProduct: 0,
    comment: ''
  })

  const commentRate = {
    email,
    comment: input.comment,
    rating,
    idOrder,
    idProduct: Number(input.idProduct)
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit() {
    const token = await getAccessTokenSilently();

    const comments = await axios.get('/review/' + commentRate.idProduct);
    const checkComment = comments.data[0].Reviews.length > 0 ? comments.data[0].Reviews.map((comment) => {
      return comment.orderId === commentRate.idOrder && comment.ProductId === commentRate.idProduct ? true : false
    }) : ''
    const key = checkComment ? checkComment.find((el) => el === true) : ''
    const response = !key ? await axios.post('/review', commentRate,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }) : '';
    response ? toast.success('Review and rate added sueccesfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }) : toast.error('You already rate this product', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
  }

  return(
    <div>
      <Card style={{margin: '30px' }}>
        <Card.Body>
          <Card.Title>Comment and rate your product(s)</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select product</Form.Label>
              <Form.Control as="select" name="idProduct" onChange={(e) => handleChange(e)}>
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