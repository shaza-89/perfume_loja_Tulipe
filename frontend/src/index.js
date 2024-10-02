import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import LoginScreen from './screen/LoginScreen';
import CartScreen from './screen/CartScreen'; // Asegúrate de que este componente esté configurado para el backend
import RegisterScreen from './screen/RegisterScreen';

// Configuración de rutas
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomeScreen />} />
      <Route path='Perfume/:id' element={<ProductScreen />} />
      <Route path='login' element={<LoginScreen />} />
      <Route path='cart' element={<CartScreen />} />
      <Route path='register' element={<RegisterScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Medición del rendimiento
reportWebVitals();

