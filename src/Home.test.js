import React from 'react';
import { create } from 'react-test-renderer';
import Home from './Home';

it('renders correctly', () => {
    const tree = create(<Home />).toJSON;
    expect(tree).toMatchSnapshot();    
})