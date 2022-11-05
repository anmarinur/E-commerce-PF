import CardProductsList from "../components/CardProductList/CardProductsList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardProduct from "../components/CardProductList/CardProduct";
import Modal from 'react-bootstrap/Modal';
import logo from "../components/Nav/images/Logo.png";
import CardBestRaitingProduct from "../components/Oferts/CardBestRaitingProduct";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../redux/actions";
import Transition from "../components/Transition/Transition";
import Spinner from 'react-bootstrap/Spinner';
import CardOfferProduct from "../components/Oferts/CardOfferProduct";




export default function Home() {

  // --------------- temporal
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let status = searchParams.get('status');
  let id = searchParams.get('id');
  const [lastestProducts, setLastestProducts] = useState();
  const [bestRatingProducts, setBestRatingProducts] = useState();
  const [offerProducts, setOfferProducts] = useState();

  const modalShow = useSelector(state => state.modalShow);
  const dispatch = useDispatch();
  // ---------------------------


  useEffect(() => {
    getLastestProducts();
    getBestRatingProducts();
    getOfferProduct();
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

  const getOfferProduct = async () => {
    try {
      const result = await axios.get('/offer');
      var offerlast = result.data.length;
      const resultTwo = await axios.get(`/product?disc=${offerlast}&size=6`);
      if ( resultTwo.data.products.length < 6) {
        const result3 = await axios.get(`/product?disc=${offerlast - 1}&size=${6 - (resultTwo.data.products.length) }`);
        setOfferProducts(resultTwo.data.products.concat(result3.data.products));
      }else{
        setOfferProducts(resultTwo.data.products);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

  const [showUp, setShowUp] = useState("0");

  useEffect(() => {
    window.onscroll = function () {
      let scroll = window.scrollY;
      if (scroll < 300) setShowUp("0");
      if (scroll >= 300) setShowUp("1");
    }
  }, []);

  const goUp = () => {
    window.scroll(0, 0);
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Transition>
        <CardProductsList goUp={goUp} />
      </Transition>
      <Footer />
      <button style={{ position: "fixed", right: 20, bottom: 20, transition: "0.5s", scale: showUp }}
        className={`px-3 py-2 border-0 ms-2 bg-danger text-white rounded mx-5}`}
        onClick={goUp}> <i className="fa-solid fa-angle-up"></i> </button>
      <Modal
        show={modalShow}
        onHide={() => dispatch(setModal(false))}
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <img src={logo} className='me-3' alt="" style={{ width: "2em" }} />
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
                    <CardProduct product={p} key={p.id} />
                  ) : (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>)
                }
              </Carousel>;
            </div>

            <div className="col-12 text-center text-dark bg-white">
              <h3 className="text-uppercase fw-bold my-4">product offer.</h3>
              <div className="row g-4 px-5">
                {offerProducts && offerProducts.length === 0 && <p>no offert</p>}
                {
                  offerProducts ? offerProducts.map(p =>

                    <CardOfferProduct p={p} key={p.id} />

                  ) : (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>)
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
                {bestRatingProducts && bestRatingProducts.length === 0 && <p>no best Rating Products</p>}
                {
                  bestRatingProducts ? bestRatingProducts.map(p =>
                    <CardBestRaitingProduct p={p} key={p.id} />
                  ) : (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>)
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