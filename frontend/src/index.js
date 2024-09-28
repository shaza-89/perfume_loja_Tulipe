import React from 'react';
import ReactDOM from 'react-dom/client';
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import './assests/styles/bootstrap.custom.css';
import './assests/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import LoginScreen from './screen/LoginScreen';
import CartScreen from './screen/CartScreen';
import RegisterScreen from './screen/RegisterScreen';
import { CartProvider } from './components/cartContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/Perfume/:id' element={<ProductScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/Cart' element={<CartScreen />} />
      <Route path='/register' element={<RegisterScreen />} />






    </Route>
  )
)

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
 
      <RouterProvider router={router} />
       </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
