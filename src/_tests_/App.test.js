import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders the correct content', () => {
  render(<App />);
  const navLogo = screen.getByText('Math Magicians');
  const notNavLogo = screen.queryByText('Math Magician');
  const homeLink = screen.getByText('Home');
  const notHomeLink = screen.queryByText('My Home');
  const calculatorLink = screen.getByText('Calculator');
  const notCalculatorLink = screen.queryByText('Calc');
  const quoteLink = screen.getByText('Quote');
  const notQuoteLink = screen.queryByText('Quotation');

  expect(navLogo).toBeInTheDocument();
  expect(notNavLogo).not.toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(notHomeLink).not.toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(notCalculatorLink).not.toBeInTheDocument();
  expect(quoteLink).toBeInTheDocument();
  expect(notQuoteLink).not.toBeInTheDocument();
});

test('renders the Home page when Home link clicked', () => {
  render(<App />);
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText('Home'), leftClick);
  expect(screen.getByText('Welcome to Our Page'));
});

test('renders the Calculator page when Calculator link clicked', () => {
  render(<App />);
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText('Calculator'), leftClick);
  expect(screen.getByText('Let\'s do Some Math!'));
});

test('renders the Quotes page when Quote link clicked', () => {
  render(<App />);
  const leftClick = { button: 0 };
  const quoteContent = 'Mathematics is not about numbers, equations, '
  + 'computations or algorithms: it is about understanding. - William Paul Thurston';
  userEvent.click(screen.getByText('Quote'), leftClick);
  expect(screen.getByText(quoteContent));
});
