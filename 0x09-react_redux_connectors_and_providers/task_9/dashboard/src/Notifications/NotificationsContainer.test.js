import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationsContainer from './NotificationsContainer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as actions from '../actions/notificationActionCreators';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('NotificationsContainer', () => {
  let store;
  let mockFetch;

  beforeEach(() => {
    store = mockStore({
      notifications: {
        notifications: {
          1: { id: 1, type: 'default', value: 'Test notification', isRead: false },
        },
        filter: 'DEFAULT',
      },
    });

    mockFetch = jest.spyOn(actions, 'fetchNotifications').mockImplementation(() => ({ type: 'DUMMY_ACTION' }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('calls fetchNotifications on mount', () => {
    shallow(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );
    expect(mockFetch).toHaveBeenCalled();
  });
});