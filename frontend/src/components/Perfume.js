import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Perfumes from '../Products'
import Rating from './Rating'

const Perfume = ({Perfume}) => {
  return (
      <Card className='my-3 p-3 rounded'>
          <Link to={`/perfume/${Perfumes._id}`}>
              <Card.Img src={Perfume.image} variant= "top">
              </Card.Img>
          </Link>
          <Card.Body>
              
          </Card.Body>
          <Link to={`/perfume/${Perfume._id}`}>
              <Card.Title as="div" className='product-title'>
                  <strong> {Perfume.name}</strong>
              </Card.Title>
              <Card.Title as="div">
                  <Rating value={Perfume.rating}
                  text={`${Perfume.numReviews} avaliações`}/>
              </Card.Title>
          </Link>
          <Card.Text as="h3">
             ${Perfume.price} 
          </Card.Text>
    </Card>
  )
}

export default Perfume