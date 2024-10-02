import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/users/login', { // Asegúrate de que esta sea la URL correcta
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Falha ao fazer login');
            }

            const data = await response.json();
            console.log('Usuario logado:', data);
            // Almacena el token o la información del usuario si es necesario
            // localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/'); // Redirigir al usuario después de un inicio de sesión exitoso
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormContainer>
            <h1>Entrar</h1>

            {error && <div className='alert alert-danger'>{error}</div>}
            {loading && <Spinner animation="border" />}

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

                <Button className='mt-2' type='submit' variant='primary' disabled={loading}>
                    {loading ? 'Entrando...' : 'Entrar'}
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

export default LoginScreen;
    
