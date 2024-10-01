import {useState}from 'react'
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';





const ShippingScreen = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [country, setCountry] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit")

  } ;

       

  return (
    <div>
     <FormContainer>
      
      <h1>Enviando</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='address'>
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite o seu nome'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='address'>
          <Form.Label>Estado-Cidade</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite o seu Estado'
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='city'>
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='postalCode'>
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

       

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
    </div>
  )
}

export default ShippingScreen
