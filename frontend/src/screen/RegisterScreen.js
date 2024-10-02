import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        // Verificar que las contraseñas coincidan
        if (password !== confirmPassword) {
            setError('As senhas não correspondem');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/users/register', { // Asegúrate de que esta sea la URL correcta
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                throw new Error('Falha ao registrar o usuário');
            }

            const data = await response.json();
            console.log('Usuario registrado:', data);
            // Redirigir al usuario a la página de inicio u otra página
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormContainer>
            <h1>Inscrever-se</h1>

            {error && <div className='alert alert-danger'>{error}</div>}
            {loading && <Spinner animation="border" />}

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

                <Form.Group className='my-3' controlId='password'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Digite a senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-3' controlId='confirmPassword'>
                    <Form.Label>Confirme sua senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirme a senha'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button className='mt-2' type='submit' variant='primary' disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar'}
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Já tem uma conta?<Link to='/login'> Entrar </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterScreen;
    
