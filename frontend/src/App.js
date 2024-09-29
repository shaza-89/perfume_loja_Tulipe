import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary'; // Componente para manejar errores
import './App.css'; // Archivo CSS para estilos generales

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

