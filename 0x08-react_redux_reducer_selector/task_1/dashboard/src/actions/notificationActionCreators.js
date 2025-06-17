import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

// Bound action creators
export const boundMarkAsAread = (index) => (dispatch) => dispatch(markAsAread(index));
export const boundSetNotificationFilter = (filter) => (dispatch) => dispatch(setNotificationFilter(filter));