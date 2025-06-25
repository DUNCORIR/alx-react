import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header'; // unconnected version
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains an image and h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('ALX School dashboard');
  });

  it('does not show logout section when user is not logged in', () => {
    const wrapper = shallow(<Header user={null} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('shows logout section when user is logged in', () => {
    const user = { email: 'test@alx.com', isLoggedIn: true };
    const wrapper = shallow(<Header user={user} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@alx.com');
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOut = jest.fn();
    const user = { email: 'test@alx.com', isLoggedIn: true };
    const wrapper = shallow(<Header user={user} logOut={logOut} />);
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});