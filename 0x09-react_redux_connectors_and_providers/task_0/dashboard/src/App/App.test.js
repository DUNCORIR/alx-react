// File: 0x03-React_component/task_1/dashboard/src/App/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
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

  it('calls alert and logOut on ctrl + h keydown', () => {
    const wrapper = shallow(<App logOut={logOutMock} />);

    // Simulate keydown event for ctrl + h
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    // Dispatch event on window
    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });
});

describe('App state behavior', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has displayDrawer false by default', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer sets displayDrawer to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer sets displayDrawer to false', () => {
    wrapper.setState({ displayDrawer: true }); // simulate drawer already open
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});

describe('Redux - mapStateToProps', () => {
  it('should return isLoggedIn true when isUserLoggedIn is true in state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
      },
    });

    const expectedProps = {
      isLoggedIn: true,
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});