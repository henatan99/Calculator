import React from 'react';
import { create } from 'react-test-renderer';
import Quotes from './Quotes';

it('renders correctly', () => {
    const tree = create(<Quotes />).toJSON;
    expect(tree).toMatchSnapshot();    
})