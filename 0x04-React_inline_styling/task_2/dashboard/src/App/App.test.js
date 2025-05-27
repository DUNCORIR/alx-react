// File: 0x03-React_component/task_1/dashboard/src/App/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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