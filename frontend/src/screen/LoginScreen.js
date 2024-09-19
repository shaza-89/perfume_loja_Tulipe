import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <FormContainer>
      <h1>Entrar</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Endereço de email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Digite o e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Digite a senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className='mt-2' type='submit' variant='primary'>
          Entrar
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Novo cliente? <Link to='/register'> Registrar </Link>
        </Col>
      </Row>
    </FormContainer>
  );
      
};

export default LoginScreen
