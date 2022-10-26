import CardProductsList from "../components/CardProductList/CardProductsList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import {  ToastContainer, toast } from 'react-toastify';
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Home(){

  // --------------- temporal
    const location = useLocation();
    const history  = useHistory();
    const searchParams = new URLSearchParams(location.search);
    let status = searchParams.get('status');
    let id = searchParams.get('id');

  // ---------------------------

  useEffect(()=>{
    if(id && status) axios.put(`order/status/${status}?id=${id}`);
    id = '';
    status = '';
  },[]);

    return (
      <>
        <Nav />
        <CardProductsList />
        <Footer />
        <ToastContainer />
      </>
    );
}