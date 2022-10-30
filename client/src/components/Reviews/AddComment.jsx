import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

export default function AddComment({products}) {
  const [star, setStar] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false
  })
  console.log(star)
  
  function handleHover(e){
    console.log(e.target)
  }

  return(
    <div>
      <Card style={{margin: '30px' }}>
        <Card.Body>
          <Card.Title>Comment and rate your product(s)</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select product</Form.Label>
              <Form.Control as="select" name="products">
                {products.map((product) => {
                  return (
                  <option key={product.id} value={product.id}>{product.name}</option>
                  )
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="rate">
              <Form.Label>Rate</Form.Label>        
                <div className="d-flex flex-row">
                  <i className={star.star1 ? 'fa fa-star text-danger fa-2x' : 'fa fa-star fa-2x'} onClick={() => star.star1 && !star.star2 && !star.star3 && !star.star4 && !star.star5 ? setStar({
                    star1: false,
                    star2: false,
                    star3: false,
                    star4: false,
                    star5: false,
                    }) : setStar({
                      star1: true,
                      star2: false,
                      star3: false,
                      star4: false,
                      star5: false,
                      }) }></i>
                  <i className={star.star2 ? 'fa fa-star text-danger fa-2x' : 'fa fa-star fa-2x'} onClick={() => setStar({
                    star1: true,
                    star2: true,
                    star3: false,
                    star4: false,
                    star5: false,
                    })}></i>
                    <i className={star.star3 ? 'fa fa-star text-danger fa-2x' : 'fa fa-star fa-2x'} onClick={() => setStar({
                    star1: true,
                    star2: true,
                    star3: true,
                    star4: false,
                    star5: false,
                    })}></i>
                    <i className={star.star4 ? 'fa fa-star text-danger fa-2x' : 'fa fa-star fa-2x'} onClick={() => setStar({
                    star1: true,
                    star2: true,
                    star3: true,
                    star4: true,
                    star5: false,
                    })}></i>
                    <i className={star.star5 ? 'fa fa-star text-danger fa-2x' : 'fa fa-star fa-2x'} onClick={() => setStar({
                    star1: true,
                    star2: true,
                    star3: true,
                    star4: true,
                    star5: true,
                    })}></i>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="review">
              <Form.Label>Review:</Form.Label>
              <Form.Control as="textarea" rows={2} name="review" onChange={(e) => console.log(e)} placeholder="Enter a review"/>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-around py-3 w-50 mx-auto">
            <Button variant="danger" type="submit"  onClick={(e) => console.log(e)}>Submit</Button>{' '}
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}