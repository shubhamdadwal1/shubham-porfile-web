import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(screen.getByText(/Shubham Dadwal/i)).toBeInTheDocument();
  expect(screen.getByText(/DevOps Engineer/i)).toBeInTheDocument();
});
