import React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button';

it('renders when no props passed', () => {
    const tree = create(<Button />).toJSON;
    expect(tree).toMatchSnapshot();
})

it('renders when name prop is passed', () => {
    const tree = create(<Button name="1" />).toJSON;
    expect(tree).toMatchSnapshot();
})

it('renders when color and wide props are passed ', () => {
    const tree = create(<Button color="red" wide="100px" />).toJSON;
    expect(tree).toMatchSnapshot();
})

it('renders when handleClick function prop is passed ', () => {
    const handleClick = jest.fn();
    const tree = create(<Button handleClick={handleClick} />).toJSON;
    expect(tree).toMatchSnapshot();
})