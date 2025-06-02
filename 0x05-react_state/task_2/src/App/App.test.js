import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import UserContext from '../UserContext';

describe('App Component with Context', () => {
  let alertMock;

  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it('calls alert and logOut on ctrl + h keydown', () => {
    const logOutMock = jest.fn();

    mount(
      <UserContext.Provider value={{ user: { isLoggedIn: true }, logOut: logOutMock }}>
        <App />
      </UserContext.Provider>
    );

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });

  it('renders Login component when user is not logged in', () => {
    const wrapper = mount(
      <UserContext.Provider value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}>
        <App />
      </UserContext.Provider>
    );

    expect(wrapper.find('Login').length).toBe(1);
    expect(wrapper.find('CourseList').length).toBe(0);
  });

  it('renders CourseList component when user is logged in', () => {
    const courses = [{ id: 1, name: 'ES6', credit: 60 }];
    const wrapper = mount(
      <UserContext.Provider value={{ user: { isLoggedIn: true }, logOut: jest.fn() }}>
        <App listCourses={courses} />
      </UserContext.Provider>
    );

    expect(wrapper.find('CourseList').length).toBe(1);
    expect(wrapper.find('Login').length).toBe(0);
  });

  it('toggles displayDrawer state correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});