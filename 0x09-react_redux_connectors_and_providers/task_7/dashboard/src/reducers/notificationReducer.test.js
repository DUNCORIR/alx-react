import notificationReducer from './notificationReducer';
import { Map, fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer with Normalizr & Immutable', () => {
  const sampleData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should return initial state', () => {
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual({ filter: 'DEFAULT', notifications: {} });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: sampleData };
    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    });
  });

  it('should handle MARK_AS_READ', () => {
    let state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: sampleData });
    const updated = notificationReducer(state, { type: MARK_AS_READ, index: 2 });
    expect(updated.getIn(['notifications', 2, 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const state = notificationReducer(undefined, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(state.get('filter')).toBe('URGENT');
  });

  it('should handle SET_LOADING_STATE', () => {
  const action = { type: 'SET_LOADING_STATE', isLoading: true };
  const state = notificationReducer(undefined, action);
  expect(state.get('loading')).toBe(true);
  });
});