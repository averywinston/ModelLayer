// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelLayerPro3 title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelLayerPro3/i);
    expect(titleElement).toBeInTheDocument();
});
