import CardProductsList from "../components/CardProductList/CardProductsList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import {  ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";

export default function Home(){

  // --------------- temporal
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get('status');
    const payment_id = searchParams.get('payment_id')
    const order_id = searchParams.get('merchant_order_id')

  // ---------------------------
    return (
      <>
        <Nav />
        {/* ---------------temporal */}
        {status === 'approved' ? 
        toast.success('Payment approved', {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
          : <div></div>}
        {/* ---------------------------- */}
        <CardProductsList />
        <Footer />
        <ToastContainer />
      </>
    );
}