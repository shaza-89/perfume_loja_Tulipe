import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary'; // Componente para manejar errores
import './App.css'; // Archivo CSS para estilos generales
import axios from 'axios';

// Configuración de Axios para apuntar a tu backend
axios.defaults.baseURL = 'http://localhost:5000'; // Ajusta la URL según tu configuración

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Cambia la ruta según tu API
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ErrorBoundary>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
          {/* Aquí puedes mostrar los datos obtenidos */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
      </main>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
