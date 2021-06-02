import React from 'react';
import { create } from 'react-test-renderer';
import Calculator from './Calculator';

it('renders when no props passed', () => {
    const tree = create(<Calculator />).toJSON;
    expect(tree).toMatchSnapshot();
})

it('renders when no props passed', () => {
    const tree = create(<Calculator />).toJSON;
    expect(tree).toMatchSnapshot();
})
