import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the header with title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Mi Tienda/i); // Cambia esto por el título real de tu aplicación
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a link to the cart', () => {
    render(<App />);
    const cartLink = screen.getByRole('link', { name: /carrito/i }); // Cambia esto por el nombre real del enlace
    expect(cartLink).toBeInTheDocument();
  });

  test('renders the footer', () => {
    render(<App />);
    const footerElement = screen.getByText(/todos los derechos reservados/i); // Cambia esto por el texto real del pie de página
    expect(footerElement).toBeInTheDocument();
  });
});

