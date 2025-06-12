import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains a paragraph with login message', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('p').text()).toBe('Login to access the full dashboard');
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('submit button is enabled when email and password are provided', () => {
    const wrapper = shallow(<Login />);
    // Simulate typing email
    wrapper.find('input#email').simulate('change', { target: { value: 'user@email.com' } });
    // Simulate typing password
    wrapper.find('input#password').simulate('change', { target: { value: 'securePassword' } });

    wrapper.update(); // Ensure state updates reflect

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});