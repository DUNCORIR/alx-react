import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const state = uiReducer({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    }, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.isUserLoggedIn).toBe(true);
  });

  it('should handle LOGIN_FAILURE and LOGOUT', () => {
    const failState = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(failState.isUserLoggedIn).toBe(false);

    const logoutState = uiReducer({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    }, { type: LOGOUT });
    expect(logoutState.isUserLoggedIn).toBe(false);
  });
});