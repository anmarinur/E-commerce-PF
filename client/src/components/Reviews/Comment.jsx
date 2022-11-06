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



export default function Coment({ rating, comment, createdAt, image }) {


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
    <div className="w-50 my-3 p-3 border border-danger rounded bg-light bg-gradient">
      <div className='d-flex flex-row justify-content-between mt-2'>
        <div className="d-flex justify-content-between">
        {stars.map((star) => {
          return star
        })}
        </div>
        <div>
          <p>{ new Date(createdAt).toLocaleString() } </p>
        </div>
      </div>
      <div>
        <p className='fs-5 text-start'>{comment}</p>
      </div>
      <div className='text-center rounded' style={{width: '300px'}}>
        {image !== null && <img src={image} alt='product'/>}
      </div>
    </div>
  )
}


