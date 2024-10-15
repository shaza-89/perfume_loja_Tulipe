import React, { useEffect, useState,useContext } from 'react';
import {Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assests/styles/logo.png';
import { CartContext } from './cartContext'; 

const Header = () => {
    const { cart } = useContext(CartContext);
    const [userInfo, setUserInfo] = useState(null);
    // const [ setCartPerfumeCount] = useState(0); 
    const totalPerfumes = cart.reduce((acc, Perfume) => acc + Perfume.qty, 0);

    useEffect(() => {
        // Get user info from localStorage
        const storedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
        setUserInfo(storedUserInfo);
        
       

    }, []);

    const logoutHandler = () => {
        // Remove user info from localStorage when logging out
        localStorage.removeItem('userInfo');
        setUserInfo(null); // Update state after logout
    };

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img src={logo} alt='perfume natural'></img>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <FaShoppingCart /> Carrinho
                                    {totalPerfumes > 0 && (
                                        <Badge pill bg='success' style={{ marginLeft: "5px" }}>
                                            {totalPerfumes}
                                        </Badge>
                      )}
                                </Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    {/* <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Perfil</NavDropdown.Item>
                                    </LinkContainer> */}
                                    <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <FaUser /> Entrar
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
