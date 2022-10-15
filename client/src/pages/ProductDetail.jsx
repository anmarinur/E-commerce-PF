import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions";
import { useEffect } from "react";




export default function ProductDetail() {
    
    return(
       
        <div>
             <Link to='/home'>
        <button className="button">X</button>
    </Link>
        <h1>Detail Product ID</h1>
        <h2> Name:</h2>
        <img width="400px" height="250px" />
        <h2> Description:</h2>
        <h2> Price:</h2>
        <h2> Category:</h2>
       
        
        
        
       
    </div>
       
       )
}