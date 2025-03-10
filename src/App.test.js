import { render, screen } from '@testing-library/react';
import App from './App';
import Business from './components/Business';

test('renders Business component', () => {
  render(<Business />);
  const textElement = screen.getByText(/surrey/i);
  expect(textElement).toBeInTheDocument();
});