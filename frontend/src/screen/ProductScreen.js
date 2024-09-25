
import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import Perfumes from '../components/Products'
// import Loader from '../components/Loader'

const ProductScreen = () => {
      const [Perfume, setPerfume] = useState([]);

  const { id: productId } = useParams();

  useEffect(() => {
        const fetchPerfume = async () => {
            const { data } = await axios.get(`/api/Perfumes/${productId}`);
            setPerfume(data);
        };

        fetchPerfume();
  }, [productId]);
  
  return (
    <>
      <Link className='btn btn-light my-3' to="/">volte</Link>
      
      {/* <Loader /> */}
      <Row>
        <Col md={5}>
          <Image src={Perfume.image} alt={Perfume.name} fluid />
        </Col>
        
        <Col md={4}>
          <ListGroup variant='flush'>
          <ListGroup.Item>
           <h3>{Perfume.name }</h3>
          </ListGroup.Item>
          <ListGroup.Item>
           <Rating value={Perfume.rating} text={`${Perfume.numReviews} avaliações`} />
            </ListGroup.Item>
            <ListGroup.Item><strong>
            Valor:</strong> ${Perfume.price}</ListGroup.Item>
            <ListGroup.Item>
            <strong>Descrição:</strong> {Perfume.description}
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
                    <strong>${Perfume.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{Perfume.countInStock > 0 ? "Em estoque" : "Fora de estoque"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='butoon'
                  disabled = {Perfume.countInStock === 0}
                >
                  Adicionar ao carrinho
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen