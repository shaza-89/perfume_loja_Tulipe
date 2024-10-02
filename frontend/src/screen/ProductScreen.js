import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Spinner } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [perfume, setPerfume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const response = await fetch(`/api/perfumes/${productId}`); // URL del backend
        if (!response.ok) {
          throw new Error('No se pudo cargar el producto');
        }
        const data = await response.json();
        setPerfume(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfume();
  }, [productId]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Link className='btn btn-light my-3' to="/">Volver</Link>
      
      <Row>
        <Col md={5}>
          <Image src={perfume.image} alt={perfume.name} fluid />
        </Col>
        
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{perfume.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={perfume.rating} text={`${perfume.numReviews} avaliações`} />
            </ListGroup.Item>
            <ListGroup.Item>Valor: ${perfume.price}</ListGroup.Item>
            <ListGroup.Item>
              Descrição: {perfume.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Valor:</Col>
                  <Col>
                    <strong>${perfume.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{perfume.countInStock > 0 ? "Em estoque" : "Fora de estoque"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={perfume.countInStock === 0}
                >
                  Adicionar ao carrinho
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;
