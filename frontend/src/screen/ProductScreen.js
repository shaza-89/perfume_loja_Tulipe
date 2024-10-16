
import {useEffect , useState ,useContext} from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form,Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import { CartContext } from '../components/cartContext';  

// import Perfumes from '../components/Products'
// import Loader from '../components/Loader'

const ProductScreen = () => {
  const [Perfume, setPerfume] = useState({});
  


  const { id: productId } = useParams();
    const [qty, setQty] = useState(1);

    const { addToCart } = useContext(CartContext);


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

            
                {Perfume.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                    <Col>Qty</Col>  
                    <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
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
                      </Row>
                    </ListGroup.Item>
                  )}
             
              
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='butoon'
                  disabled={Perfume.countInStock === 0}
                  
                  onClick={() => addToCart(Perfume, qty)} // Add to cart on click
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