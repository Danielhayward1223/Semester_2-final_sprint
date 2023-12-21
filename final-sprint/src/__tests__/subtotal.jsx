
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Checkout from '../components/checkout'; 
import {
    ShoppingCartProvider,
} from "../components/ShoppingCartContext";

test('renders the word "subtotal"', () => {
  render(
  <ShoppingCartProvider>
    <Checkout />
  </ShoppingCartProvider>);
  const subtotalElement = screen.getByText(/Subtotal/i);
  expect(subtotalElement).toBeInTheDocument();
});