// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<Controls />);
  })
});