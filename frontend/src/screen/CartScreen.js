import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import axios from 'axios';

const CartScreen = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const { data } = await axios.get('/api/cart'); // Asegúrate de tener esta ruta en tu backend
                setCartItems(data);
                setLoading(false);
            } catch (error) {
                setError('Erro ao carregar os itens do carrinho');
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const getSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0); // Calcula el subtotal
    };

    const removeFromCartHandler = (id) => {
        // Lógica para eliminar el producto del carrito
        console.log(`Eliminar producto con ID: ${id}`);
        // Aquí puedes implementar la lógica para eliminar el producto del backend
    };

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

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
                                        <Button 
                                            type='button' 
                                            variant='light' 
                                            onClick={() => removeFromCartHandler(perfume._id)} // Agrega la función para eliminar
                                        >
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
