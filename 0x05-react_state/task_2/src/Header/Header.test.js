import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';
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

  it('displays user email and logout when logged in', () => {
    const mockLogOut = jest.fn();
    const contextValue = {
      user: { email: 'test@example.com', isLoggedIn: true },
      logOut: mockLogOut,
    };

    // Use shallow with context provider wrapping
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    ).dive(); // dive to get Header inside provider

    expect(wrapper.find('p').text()).toContain('Welcome');
    expect(wrapper.find('strong').text()).toBe('test@example.com');

    // Simulate click on logout link
    wrapper.find('span').simulate('click');
    expect(mockLogOut).toHaveBeenCalled();
  });

  it('does not display user email and logout when not logged in', () => {
    const contextValue = {
      user: { email: '', isLoggedIn: false },
      logOut: jest.fn(),
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    ).dive();

    expect(wrapper.find('p').exists()).toBe(false);
  });
});