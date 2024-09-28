import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); 

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('A senha não corresponde');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users',
        { name, email, password },
        config
      );

      localStorage.setItem('userInfo', JSON.stringify(data));

      setSuccess(true);

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError('Erro ao registrar usuário');
    }
    
  };

  return (
    <FormContainer>
      <h1>Inscrever-se</h1>
     {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Login foi feito com sucesso! Redirecionando...</Alert>}

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-3' controlId='name'>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type='text'
            placeholder='Digite o seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='my-3' controlId='email'>
          <Form.Label>Endereço de email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Digite o seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='my-3' controlId='password'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Digite a senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='my-3' controlId='confirmPassword'>
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirme a senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button className='mt-2' type='submit' variant='primary'>
          Inscrever-se
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Já tem uma conta? <Link to='/login'>Entrar</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
