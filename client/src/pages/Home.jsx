import CardProductsList from "../components/CardProductList/CardProductsList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import {  ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Home(){

  // --------------- temporal
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get('status');
    const id = searchParams.get('id');

  // ---------------------------

  useEffect(()=>{
    if(id) axios.put(`order/status/${status}?id=${id}`);
  },[id]);

    return (
      <>
        <Nav />
        <CardProductsList />
        <Footer />
        <ToastContainer />
      </>
    );
}