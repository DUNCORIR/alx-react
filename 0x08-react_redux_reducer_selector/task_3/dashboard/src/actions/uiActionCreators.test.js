// src/actions/uiActionCreators.test.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  loginRequest,
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS on success', () => {
    fetchMock.getOnce('/login-success.json', {
      body: {},
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: '1234' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});
    return store.dispatch(loginRequest('test@example.com', '1234')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE on failure', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'wrong' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});
    return store.dispatch(loginRequest('test@example.com', 'wrong')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});