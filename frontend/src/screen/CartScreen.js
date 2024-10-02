import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import Perfumes from '../Products';

const CartScreen = () => {
    const cartItems = Perfumes; // Aquí deberías obtener los artículos del carrito

    const getSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0); // Calcula el subtotal
    };

    return (
        <Row>
            <Col md={8}>
                <h1 style={{ marginBottom: '20px' }}>Carrinho de compras</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Seu carrinho está vazio <Link to="/">Voltar</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((perfume) => (
                            <ListGroup.Item key={perfume._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={perfume.image} alt={perfume.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/perfume/${perfume._id}`}>{perfume.name}</Link>
                                    </Col>
                                    <Col md={2}>${perfume.price}</Col>
                                    <Col md={2}>
                                        Unid
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light'>
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
                            <h2>Subtotal: ${getSubtotal().toFixed(2)} ({cartItems.length} Unid)</h2>
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
