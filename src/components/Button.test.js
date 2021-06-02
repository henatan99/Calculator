import React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
    const tree = create(<Button />).toJSON;
    expect(tree).toMatchSnapshot();
})

it('renders correctly', () => {
    const tree = create(<Button name="1" />).toJSON;
    expect(tree).toMatchSnapshot();
})

it('renders correctly', () => {
    const tree = create(<Button color="red" wide="100px" />).toJSON;
    expect(tree).toMatchSnapshot();
})