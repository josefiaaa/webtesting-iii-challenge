// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';


describe('<Dashboard />', () => {
  it('renders without crashing', () => {
      render(<Dashboard />);
  })

  describe('gate closes', () => {
    it('when closed gate btn is clicked, (Display: open) changes to (Display: closed), closed gate btn changes to open gate btn {lock gate btn is enabled}', () => {
        const {getByText} = render(<Dashboard />);
        const closeBtn = getByText(/close gate/i);
        fireEvent.click(closeBtn);
        getByText(/closed/i);
        getByText(/open gate/i);
    })
  })

  describe('gate opens', () => {
    it('when "open gate" is clicked, (Display: closed) changes to (Display: open), lock gate btn becomes available', () => {
        const { getByText } = render(<Dashboard />);
        const closeBtn = getByText(/close gate/i);
        fireEvent.click(closeBtn);
        const openBtn = getByText(/open gate/i);
        fireEvent.click(openBtn);
        getByText(/open/i);
    })
  })

  describe('gate gets locked', () => {
    it('when "close gate" btn is enabled and "lock gate" is clicked, (Display: Unlocked) changes to (Display: locked', () => {
        const { getByText } = render(<Dashboard />);
        const closeBtn = getByText(/close gate/i);
        const openBtn = getByText(/lock gate/i);
        fireEvent.click(closeBtn);
        fireEvent.click(openBtn);
        getByText(/locked/i);
        getByText(/unlock gate/i);
    })
  })
  
  describe('gate gets unlocked', () => {
    it('when gate is closed AND locked, clicking "unlock gate" should change (Display: locked) to (Display: unlocked', () => {
        const { getByText } = render(<Dashboard />);
        const closeBtn = getByText(/close gate/i);
        const openBtn = getByText(/lock gate/i);
        fireEvent.click(closeBtn);
        fireEvent.click(openBtn);
        getByText(/locked/i);
        getByText(/unlock gate/i);
    })
  })
})

