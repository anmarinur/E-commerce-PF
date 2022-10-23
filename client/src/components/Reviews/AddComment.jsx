import Star from './Star';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function AddComment() {

  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push(<Star state={false} size='small'/>)
  }

  return(
    <div>
      <Card style={{ width: '500px', margin: '30px' }}>
        <Card.Body>
          <Card.Title>Add comment</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="rate">
              <Form.Label>Rate</Form.Label>        
              <Form.Control as="select" name="rating" onChange={(e) => console.log(e)}>
                  <option>Select a rate</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </Form.Control>
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