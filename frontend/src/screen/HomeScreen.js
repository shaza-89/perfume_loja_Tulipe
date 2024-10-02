import React from 'react';
import { Row, Col } from "react-bootstrap";
import Perfume from '../components/Perfume';
import Perfumes from '../Products';
// import Loader from '../components/Loader';

const HomeScreen = () => {
    return (
        <>
            {/* <Loader /> */}
            <h1>últimos produtos</h1>
            <Row>
                {Perfumes.map((perfume) => ( // Cambiado a "perfume"
                    <Col key={perfume._id} sm={12} md={6} lg={4} xl={3}>
                        <Perfume perfume={perfume} /> {/* Cambiado a "perfume" */}
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
