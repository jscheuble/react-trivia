import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lets play button', () => {
  render(<App />);
  const linkElement = screen.getByText(/let's play/i);
  expect(linkElement).toBeInTheDocument();
});
