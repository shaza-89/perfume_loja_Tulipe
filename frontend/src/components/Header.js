import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import {LinkContainer} from "react-router-bootstrap"
import logo from "../assests/styles/logo.png"

const Header = () => {
  return (
      <header>
          <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
              <Container>
                  <LinkContainer to="/">
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
                                  </Nav.Link>
                          </LinkContainer>
                          <LinkContainer to='/login'>
                              <Nav.Link >
                                  <FaUser /> Entrar
                              </Nav.Link>
                              </LinkContainer>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      
    </header>
  )
}

export default Header
