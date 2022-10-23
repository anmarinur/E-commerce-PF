import Card from 'react-bootstrap/Card';
import Star from './Star'

export default function Coment({rating, comment, name}){

  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<Star state={true} size='small'/>)
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<Star state={false} size='small'/>)
  }

  return(
    <div>
      <Card style={{ width: '500px', margin: '30px' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
            <div class="d-flex flex-row">
              {stars.map((star) => {
                return star
              })}
            </div>
          <Card.Text>
            {comment}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  )
}