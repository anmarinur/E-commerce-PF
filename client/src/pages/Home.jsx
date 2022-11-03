import CardProductsList from "../components/CardProductList/CardProductsList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import {  useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardProduct from "../components/CardProductList/CardProduct";
import Modal from 'react-bootstrap/Modal';
import logo from "../components/Nav/images/Logo.png";
import CardBestRaitingProduct from "../components/Oferts/CardBestRaitingProduct";


export default function Home() {

  // --------------- temporal
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let status = searchParams.get('status');
  let id = searchParams.get('id');
  const [show, setShow] = useState(true);
  const [lastestProducts, setLastestProducts] = useState();
  const [bestRatingProducts, setBestRatingProducts] = useState();
  // ---------------------------


  useEffect(() => {
    getLastestProducts();
    getBestRatingProducts();

  }, [])
  const getLastestProducts = async () => {
    try {
      const result = await axios.get('/product/latest');
      setLastestProducts(result.data.products);
    } catch (error) {
      console.error(error.message);
    }
  }
  const getBestRatingProducts = async () => {
    try {
      const result = await axios.get('/product/bestranking');
      setBestRatingProducts(result.data.products);
    } catch (error) {
      console.error(error.message);
    }
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1200, min: 757 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 757, min: 0 },
      items: 1
    }
  };

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1200, min: 757 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 757, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    if (id && status) axios.put(`order/status/${status}?id=${id}`);
    id = '';
    status = '';
  }, []);

  return (
    <>
      <Nav />
      <CardProductsList />
      <Footer />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={true}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <img src={logo} className='me-3' alt="" style={{width:"2em"}} />
            TecnoShop Ofert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row  py-4 m-0 bg-light "  >
            <div className="col-12 text-center text-dark ">
              <h3 className="text-uppercase fw-bold mt-4" >Product News</h3>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                itemClass="px-2"
                customTransition="all .5s"
                transitionDuration={1000}
                containerClass="carousel-container m-5">
                {
                  lastestProducts ? lastestProducts.map(p =>
                    <CardProduct product={p} />
                  ) : (<>Cargando . . .</>)
                }
              </Carousel>;
            </div>

            <div className="col-12 text-center text-dark bg-white">
              <h3 className="text-uppercase fw-bold my-4">product offer.</h3>
              <div className="row g-4 px-5">
                {
                  lastestProducts ? lastestProducts.map(p =>
                    <div className="col-xl-4 col-md-6">
                      <div className="card p-2 border shadow">
                        <div className="row">
                          <div className="col-6">
                            <img style={{ maxWidth: '12em', maxHeight: '10em' }} src={p.image} alt="IMG_PRODUCT_OFERT" />
                          </div>
                          <div className="col-6 text-end">
                            <h4 className='text-danger fs-5 text-wrap'>{p.name}</h4>
                            <p className='m-0 p-0 fw-semibold  fs-6 ' > 20% <span className='text-decoration-line-through'>$ {p.price}</span></p>
                            <p className='m-0 p-0 fw-bold fs-5 text-danger' >$ {(p.price - (p.price * 0.2))}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (<>s</>)
                }
              </div>

            </div>

            <div className="col-12 mt-2 text-center">
              <h3 className="text-uppercase fw-bold my-4" >best ranking</h3>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive2}
                autoPlay={true}
                autoPlaySpeed={5000}
                itemClass="px-2"
                customTransition="all .5s"
                transitionDuration={1000}
                containerClass="carousel-container m-5">               
                {
                  bestRatingProducts ? bestRatingProducts.map(p =>
                    <CardBestRaitingProduct p={p} />
                  ) : (<>Cargando . . .</>)
                }             
              </Carousel>;
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}