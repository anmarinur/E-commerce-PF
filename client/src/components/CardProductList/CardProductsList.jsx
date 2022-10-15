import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProduct from './CardProduct';


const CardProductsList = () => {

    const array = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Container className="bg-light border shadow p-3">
                <Row>
                    {array && array.map(c => (
                        <Col  sm={6} md={6} lg={4} xl={3} className='mb-4'>
                            <CardProduct />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )

}


export default CardProductsList;