import { Map, fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { SET_LOADING_STATE } from '../actions/notificationActionCreators';

// Initial state for the notification reducer
const initialState = Map({
  notifications: Map({}),
  filter: 'DEFAULT',
  loading: false,
});

export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalized = notificationsNormalizer(action.data);
      return state
        .set('notifications', fromJS(normalized.entities.notifications))
        .set('filter', 'DEFAULT');
    }
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);
    default:
      return state;
  }
}