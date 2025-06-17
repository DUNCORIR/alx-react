import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

/**
 * Default state for notifications
 */
const initialState = {
  filter: 'DEFAULT',
  notifications: [],
};

/**
 * notificationReducer - handles notifications state
 * @param {Object} state - current state
 * @param {Object} action - Redux action
 * @returns {Object} new state
 */
export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notif) => ({
          ...notif,
          isRead: false,
        })),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.index
            ? { ...notif, isRead: true }
            : notif
        ),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}