import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the correct content', () => {
  render(<App />)
  const navLogo = screen.getByText('Math Magicians');
  expect(navLogo).toBeInTheDocument();
})

test('renders the Home page when Home link clicked', () => {
  render(<App />)
  const leftClick = {button: 0}
  userEvent.click(screen.getByText('Home'), leftClick)
  expect(screen.getByText('Welcome to Our Page'))
})

test('renders the Calculator page when Calculator link clicked', () => {
  render(<App />)
  const leftClick = {button: 0}
  userEvent.click(screen.getByText('Calculator'), leftClick)
  expect(screen.getByText('Let\'s do Some Math!'))
})

test('renders the Quotes page when Quote link clicked', () => {
  render(<App />)
  const leftClick = {button: 0}
  const quoteContent = 'Mathematics is not about numbers, equations, ' +  
  'computations or algorithms: it is about understanding. - William Paul Thurston';
  userEvent.click(screen.getByText('Quote'), leftClick)
  expect(screen.getByText(quoteContent))
})