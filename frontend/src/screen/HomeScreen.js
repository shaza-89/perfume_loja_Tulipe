import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import Perfume from '../components/Perfume';
import axios from 'axios';

const HomeScreen = () => {
    const [perfumes, setPerfumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPerfumes = async () => {
            try {
                const { data } = await axios.get('/api/perfumes');
                setPerfumes(data);
                setLoading(false);
            } catch (error) {
                setError('Erro ao carregar os perfumes');
                setLoading(false);
            }
        };

        fetchPerfumes();
    }, []);

    return (
        <>
            <h1>Últimos produtos</h1>
            {loading ? (
                <div>Carregando...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <Row>
                    {perfumes.map((perfume) => (
                        <Col key={perfume._id} sm={12} md={6} lg={4} xl={3}>
                            <Perfume perfume={perfume} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HomeScreen;
