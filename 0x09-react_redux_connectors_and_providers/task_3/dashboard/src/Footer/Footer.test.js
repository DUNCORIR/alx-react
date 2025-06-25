import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer'; // unconnected component
import { StyleSheetTestUtils } from 'aphrodite';

describe('Footer Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains copyright text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toContain('Copyright');
  });

  it('does not render contact link when user is not logged in', () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('renders contact link when user is logged in', () => {
    const user = { email: 'test@example.com', password: '123', isLoggedIn: true };
    const wrapper = shallow(<Footer user={user} />);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});