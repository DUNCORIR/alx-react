import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

// Action types for loading state
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

// Action types for fetching notifications
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

// Action creator for fetching notifications
export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));

    return fetch('/notifications.json')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      })
      .catch(() => {
        dispatch(setLoadingState(false));
      });
  };
};

// Bound action creators
export const boundMarkAsAread = (index) => (dispatch) => dispatch(markAsAread(index));
export const boundSetNotificationFilter = (filter) => (dispatch) => dispatch(setNotificationFilter(filter));