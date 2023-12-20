import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

jest.mock('./fetchData', () => ({
  __esModule: true,
  default: jest.fn(() => [[{ id: 1, title: 'Product 1', price: 10, image: '' }], false]),
}));

describe('Home Component', () => {
  it('renders product boxes correctly', async () => {
    render(<Home />);

    // Check if the loading message is not present
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();

    // Check if the product boxes are rendered
    const productBox = screen.getByTestId('product-box-1'); 
    expect(productBox).toBeInTheDocument();

    // Check if product details are present
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    
    // Check if the image is present 
    const image = screen.getByAltText('Product 1');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(''); 
  });
});
