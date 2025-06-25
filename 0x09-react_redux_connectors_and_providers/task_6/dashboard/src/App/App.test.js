import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('App Component', () => {
  let alertMock;
  let logOutMock;

  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    logOutMock = jest.fn();
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  // Test for rendering Notifications component
  it('renders Login component when not logged in', () => {
  const wrapper = shallow(<App isLoggedIn={false} />);
  expect(wrapper.find('Login').exists()).toBe(true);
  });

  // Test for rendering CourseList component when logged in
  it('renders CourseList component when logged in', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.find('CourseList').exists()).toBe(true);
  });

// Test for rendering Notifications component
  it('calls alert and logOut on ctrl + h keydown', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });
});

// Redux - mapStateToProps
describe('Redux - mapStateToProps', () => {
  // Test for Immutable state
  it('should return isLoggedIn and displayDrawer from Immutable state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
      },
    });

    // Expected props to be passed to App component
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    };
  // test for passing displayDrawer prop to Notifications component
  it('passes displayDrawer as prop to Notifications', () => {
    const wrapper = shallow(<App displayDrawer={true} />);
    expect(wrapper.find('Notifications').prop('displayDrawer')).toBe(true);
  } ); 
    
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});