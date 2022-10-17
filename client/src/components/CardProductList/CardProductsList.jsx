import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProduct from './CardProduct';
import FilterAndOrder from "../FilterAndOrderProducts/FilterAndOrder";
import { getAllProducts } from '../../redux/actions';
import PaginationProducts from './Pagination';




const CardProductsList = () => {

    const dispatch = useDispatch();
    const totalPages = useSelector(state => state.products.totalPages);
    const products = useSelector(state => state.products.products);

    const [size, setSize] = useState(8);
    const [page, setPage] = useState(0);
    const [categoryFilter, setCategoryFilter] = useState(undefined);
    
    function setPagePagination(n) {
        setPage(n)
    }
    function setCategory(category) {
        setCategoryFilter(category);
    }

    useEffect(() => {
        dispatch(getAllProducts(size, page,categoryFilter));
    }, [dispatch, size, page, categoryFilter])

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <FilterAndOrder  setCategory = {setCategory}/>
                    </div>
                    <div className="col-9">
                        <Container className="bg-light border shadow p-3">
                            <Row>
                                {
                                    products ? products.map(product => (
                                        <Col sm={6} md={6} lg={4} xl={3} className='mb-4'>
                                            <CardProduct product={product} />
                                        </Col>
                                    )) : (<p>Cargando . . .</p>)
                                }
                            </Row>

                            <div className="container mx-auto">
                                <PaginationProducts currentPage={ page + 1 } setPagePagination={setPagePagination} totalPages={totalPages} />
                            </div>

                        </Container>

                    </div>
                </div>
            </div>

        </>
    )

}

export default CardProductsList;