import Card from 'react-bootstrap/Card';
import Star from './Star'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import { getReviews } from '../../redux/actions';
import isAdmin from '../../utils/isAdmin';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function Coment({ id, rating, comment, name, createdAt }) {

  const [open, setOpen] = useState(false);
  const reviews = useSelector(state => state.reviews[0].Reviews);


  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<Star state={true} size='small' />)
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<Star state={false} size='small' />)
  }

  const [admin, setAdmin] = useState();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();


  useEffect(() => {
    isAdmin(getAccessTokenSilently).then((res) => setAdmin(res)).catch(() => setAdmin(false));
    if (admin === false) {
      setOpen(o => !o)
    }
    if (reviews.length === 0) dispatch(getReviews());
  }, [admin]);



  const deleteP = async (id) => {
    const token = await getAccessTokenSilently();
    try {
      await axios.delete(`/review/${id}`, {

        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(id)
      toast.success("Comment delete successfully");
    }
    catch (error) {
    }
    dispatch(getReviews());
  }



  return (
    <div className='col-xl-6'>
 
      <Card >
        <Card.Body>

          {admin ?
            <button onClick={() => deleteP(id)} type="button" className="btn-close" style={{ float: 'right' }} aria-label="Close"></button> : null
          }
          <div className="d-flex">
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="avatar"
              style={{ maxWidth: '4em', maxHeight: '4em' }}
            />
            <div className="row">
              <p className='ms-4 text-start my-0'>User Name </p>
              <p className='ms-4 text-start my-0'>{ new Date(createdAt).toLocaleString() } </p>
            </div>
          </div>

          <div className="d-flex flex-row px-2 pt-3">
            {stars.map((star) => {
              return star
            })}
          </div>
          <Card.Text>
            {comment}
          </Card.Text>
          {/* <div>
            <Button className="m-3 fw-bold text-danger" variant="light" onClick={() => deleteP(id)}>X</Button>
          </div> */}
        </Card.Body>
      </Card>
    </div>
  )
}


