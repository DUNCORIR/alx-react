// File: task_1/dashboard/src/reducers/uiReducer.js
import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

// Initial state as an Immutable Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

/**
 * uiReducer - handles UI-related state changes using Immutable.js
 * @param {Map} state - current state as Immutable Map
 * @param {Object} action - Redux action
 * @returns {Map} new state Map
 */
export default function uiReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
    case LOGOUT:
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
}