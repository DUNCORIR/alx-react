// File: task_1/dashboard/src/reducers/uiReducer.test.js
import uiReducer from './uiReducer';
import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer with Immutable.js', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const prevState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({}),
    });
    const state = uiReducer(prevState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.get('isUserLoggedIn')).toBe(true);
  });

  it('should handle LOGIN_FAILURE and LOGOUT', () => {
    const failState = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(failState.get('isUserLoggedIn')).toBe(false);

    const loggedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({}),
    });
    const logoutState = uiReducer(loggedState, { type: LOGOUT });
    expect(logoutState.get('isUserLoggedIn')).toBe(false);
  });
});