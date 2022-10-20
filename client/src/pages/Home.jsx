import CardProductsList from "../components/CardProductList/CardProductsList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import {  ToastContainer } from 'react-toastify';
export default function Home(){
    return (
      <>
        <Nav />
        <CardProductsList />
        <Footer />
        <ToastContainer />
      </>
    );
}