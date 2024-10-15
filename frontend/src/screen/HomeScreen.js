import { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap"
import Perfume from '../components/Perfume'
import axios from "axios"
// import Perfumes from '../components/Products'
// import Loader from '../components/Loader'

const HomeScreen = () => {
    const [Perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        const fetchPerfumes = async () => {
            const { data } = await axios.get("/api/Perfumes");
            setPerfumes(data);
        };

        fetchPerfumes();
    }, []);
    

  return (
      <>
          {/* <Loader /> */}
          <h1>Todos produtos</h1>
          <Row>
              {Perfumes.map((Perfumes) => (
                  <Col key={Perfumes._id} sm={12} md={6} lg={4} xl={3}>
                      <Perfume Perfume={Perfumes} />
                  </Col>
              ))}
          </Row>
      
    </>
  )
}

export default HomeScreen