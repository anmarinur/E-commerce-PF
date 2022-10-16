import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";



export default function ProductDetail(props) {
    
    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id])
    
    
    const productDetail = useSelector((state) => state.details)
 

    return (
      <>
        <Nav />
        <Card style={{ width: "30rem", height: "30rem" }}>
          <Link to="/home">
            <Button variant="primary">X</Button>
          </Link>
          <Card.Title>Nombre del producto: {productDetail.name}</Card.Title>

          <Card.Img variant="top" src={productDetail.image} />

          <Card.Subtitle className="mb-2 text-muted">
            Description:{productDetail.description}
          </Card.Subtitle>
          <Card.Body>
            <p className="text-center fw-light text-muted start lh-1">
              Category:{productDetail.category}
            </p>
            <p className="text-center  text-danger fs-4">Price: {productDetail.price}</p>
          </Card.Body>
        </Card>
        <Footer />
      </>
    );

}