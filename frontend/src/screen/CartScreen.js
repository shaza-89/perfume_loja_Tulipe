import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Form, Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { CartContext } from '../components/cartContext'; 

const CartScreen = () => {
      const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);  // Access cart and removeFromCart

 
    

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Carrinho de compras</h1>

        {cart.length === 0 ? (
          <Message>
            Seu carrinho está vazio <Link to="/">Voltar</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cart.map((Perfume) => (
              <ListGroup.Item key={Perfume.id}>
                <Row>
                  <Col md={2}>
                    <Image src={Perfume.image} alt={Perfume.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/perfume/${Perfume.id}`}>{Perfume.name}</Link>
                  </Col>
                  <Col md={2}>${Perfume.price}</Col>
                  <Col md={2}>
                    <Form.Control
                            as='select'
                            value={Perfume.qty}
                            onChange={(e) => {}}
                          >
                            {[...Array(Perfume.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={() => removeFromCart(Perfume.id)}>
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
              <h2>
                Subtotal ({cart.reduce((acc, Perfume) => acc + Perfume.qty, 0)} Unid)
              </h2>
              Total: $
              {cart.reduce((acc, Perfume) => acc + Perfume.qty * Perfume.price, 0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' disabled={cart.length === 0}  onClick={() => navigate('/shipping')}  >
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
