import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <FormContainer>
      <h1>Inscrever-se</h1>

            <Form onSubmit={submitHandler}>

            <Form.Group className='my-3' controlId='name'>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite o seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
                </Form.Group>
                
        <Form.Group className='my-3' controlId='email'>
          <Form.Label>Endereço de email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Digite o seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-3' controlId='confirmPassword'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Digite a senha'
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          ></Form.Control>
                </Form.Group>
                
                <Form.Group className='my-3' controlId='password'>
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirme a senha'
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
          Já tem uma conta?<Link to='/register'> Entrar </Link>
        </Col>
      </Row>
    </FormContainer>
  );
      
};

export default RegisterScreen
