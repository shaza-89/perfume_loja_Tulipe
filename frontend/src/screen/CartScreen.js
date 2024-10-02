import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import Perfumes from '../Products';

const CartScreen = () => {
    const hasPerfumes = Perfumes.length > 0;

    // Aquí asumimos que cada perfume tiene una propiedad `quantity`
    const subtotal = hasPerfumes
        ? Perfumes.reduce((acc, perfume) => acc + perfume.price * perfume.quantity, 0)
        : 0;

    return (
        <Row>
            <Col md={8}>
                <h1 style={{ marginBottom: '20px' }}>Carrinho de compras</h1>
                {!hasPerfumes ? (
                    <Message>
                        Seu carrinho está vazio <Link to="/">Voltar</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {Perfumes.map((Perfume) => (
                            <ListGroup.Item key={Perfume._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={Perfume.image} alt={Perfume.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/perfume/${Perfume._id}`}>{Perfume.name}</Link>
                                    </Col>
                                    <Col md={2}>${Perfume.price}</Col>
                                    <Col md={2}>{Perfume.quantity} Unid</Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' aria-label={`Remove ${Perfume.name}`}>
                                            <FaTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal: ${subtotal.toFixed(2)} ({Perfumes.reduce((acc, perfume) => acc + perfume.quantity, 0)} Unid)</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block'>
                                Fazer o check-out
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
