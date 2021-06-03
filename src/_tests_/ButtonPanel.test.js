import React from 'react';
import { create } from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

it('renders when no props passed', () => {
  const tree = create(<ButtonPanel />).toJSON;
  expect(tree).toMatchSnapshot();
});

it('renders when handleClick function prop passed', () => {
  const handleClick = jest.fn();
  const tree = create(<ButtonPanel handleClick={handleClick} />).toJSON;
  expect(tree).toMatchSnapshot();
});
