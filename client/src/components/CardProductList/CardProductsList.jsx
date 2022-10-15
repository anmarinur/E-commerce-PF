import React, {useEffect, useState}  from 'react';
import { connect  } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProduct from './CardProduct';
import {getAllProducts} from '../../redux/actions/productActions';
import PaginationProducts from './Pagination';




const CardProductsList = (props) => {

    const [size] = useState(4);
    const [page,setPage] = useState(0);

    function setPagePagination (n) {
        setPage(n)
    }


    useEffect( () => {
        console.log('getAllProducts')
        props.getAllProducts(size, page);
    },[page,size] )

    const array = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Container className="bg-light border shadow p-3">
                <Row>
                    {
                        props.products ?  props.products.map( product => (
                            <Col  sm={6} md={6} lg={4} xl={3} className='mb-4'>
                                <CardProduct product={product} />
                            </Col>
                        )) : ( <p>Cargando . . .</p> )

                        /* products && products.map( product => (
                            <Col  sm={6} md={6} lg={4} xl={3} className='mb-4'>
                                <CardProduct product={product} />
                            </Col>
                        )) */
                    }
                </Row>
                
                <div className="row">
                    <div className="col mx-auto">
                        <PaginationProducts currentPage={page+1} setPagePagination={setPagePagination} totalPages = {props.totalPages}/>
                    </div>
                </div>
                
            </Container>
        </>
    )

}


function mapStateToProps(state) {
    return {
        products: state.products.products,
        totalPages : state.products.totalPages
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: (size, page) => dispatch(getAllProducts(size, page))

    };
  }

export default connect(mapStateToProps, mapDispatchToProps) (CardProductsList);