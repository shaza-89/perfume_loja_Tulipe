import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary'; // Componente para manejar errores
import './App.css'; // Archivo CSS para estilos generales
import axios from 'axios';

// Puedes configurar axios para apuntar a tu backend aquí, si es necesario
// axios.defaults.baseURL = 'http://localhost:5000'; // Ajusta la URL según tu configuración

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
