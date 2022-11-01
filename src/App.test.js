import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tracks', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rick Astley/i);
  expect(linkElement).toBeInTheDocument();
});
