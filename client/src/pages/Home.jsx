import CardProductsList from "../components/CardProductList/CardProductsList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import {  ToastContainer, toast } from 'react-toastify';
import { useHistory, useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import axios from "axios";

export default function Home(){

  // --------------- temporal
    const location = useLocation();
    const history  = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get('status');
    const id = searchParams.get('id');

  // ---------------------------

  useCallback(()=>{
    if(id && status) axios.put(`order/status/${status}?id=${id}`);
    history.replace("/")
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