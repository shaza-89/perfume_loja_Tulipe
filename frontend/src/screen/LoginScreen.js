import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const  submitHandler  = async (e) => {
      e.preventDefault();
      // console.log('submit')
       try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post(
                '/api/users/login',
                { email, password },
                config
            );

        //  console.log(data);  
         
          if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
      }

    } catch (error) {
      setError('Erro ao realizar login. Verifique seu e-mail ou senha.');
    }
    
  };
      
  

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
              {error && <p>{error}</p>}

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
