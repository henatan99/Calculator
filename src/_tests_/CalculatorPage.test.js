import React from 'react';
import { create } from 'react-test-renderer';
import Calculator from '../CalculatorPage';

it('renders correctly', () => {
  const tree = create(<Calculator />).toJSON;
  expect(tree).toMatchSnapshot();
});
