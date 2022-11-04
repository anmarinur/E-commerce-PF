import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getOffers } from "../../../redux/actions"; 
import { useState } from "react";

export default function Offers() {
  const dispatch = useDispatch();

  const allOffers = useSelector((state) => state.offers);
  const [allproducts, setAllProducts] = useState([])

  React.useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  const getProducts = async (disc) => {
   try {
     const result = await axios.get(`/product?disc=${disc}`)
     setAllProducts(result.data.products);             
   } catch (error) {
    console.log(error)
   }    
  };

  return (
    <div className="container-fluid mt-4">
      <div>
        <div className="col-4 py-2">
          <Link to="/Dashboard/Offers/Create" className="btn btn-primary">
            <i className="fa-solid fa-plus me-2"></i>New offer
          </Link>
        </div>
      </div>
      <div className="col-12 bg-light border border-secondary px-2 rounded shadow">
        <table className="table  table-hover text-center">
          <thead>
            <tr>
              <th className="fw-semibold fs-6">Offer name</th>
              <th className="fw-semibold fs-6">Discount %</th>
              <th className="fw-semibold fs-6">Starts at</th>
              <th className="fw-semibold fs-6">Finishes at</th>
              <th className="fw-semibold fs-6">Apply in</th>
            </tr>
          </thead>
          <tbody>
            {allOffers &&
              allOffers.map((o) => (
                <tr key={o.id}>
                  <td>{o.event}</td>
                  <td>{o.discount}</td>
                  <td>{o.startDay}</td>
                  <td>{o.endDay}</td>
                  <td>
                    {getProducts(o.id) && allproducts.map((e) => (
                      <p key={e.id}>{e.name}</p>
                    ))} 
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
