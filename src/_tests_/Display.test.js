import React from 'react';
import { create } from 'react-test-renderer';
import Display from '../components/Display';

it('renders when no props passed', () => {
  const tree = create(<Display />).toJSON;
  expect(tree).toMatchSnapshot();
});

it('renders when result prop of type string is passed', () => {
  const tree = create(<Display result="10" />).toJSON;
  expect(tree).toMatchSnapshot();
});

it('renders when process prop of type string is passed', () => {
  const tree = create(<Display process="1+3" />).toJSON;
  expect(tree).toMatchSnapshot();
});
