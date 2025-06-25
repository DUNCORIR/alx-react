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

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    window.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });
});

describe('Redux - mapStateToProps', () => {
  it('should return isLoggedIn and displayDrawer from Immutable state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
      },
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});