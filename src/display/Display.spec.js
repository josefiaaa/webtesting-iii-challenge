// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    })

   it('renders an "unlocked" div', () => {
       const { getByText } = render(<Display />);
       getByText(/locked/i);
    })
    
    it('renders an "open" div', () => {
        const { getByText } = render(<Display />);

        getByText(/open/i);
    })
})
