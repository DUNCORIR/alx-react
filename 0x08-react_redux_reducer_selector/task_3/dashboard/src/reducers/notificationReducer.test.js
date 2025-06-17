import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const sampleData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({ filter: 'DEFAULT', notifications: [] });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: sampleData };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('should handle MARK_AS_READ', () => {
    const fetched = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: sampleData });
    const state = notificationReducer(fetched, { type: MARK_AS_READ, index: 2 });
    expect(state.notifications.find(n => n.id === 2).isRead).toBe(true);
    expect(state.notifications.find(n => n.id === 1).isRead).toBe(false);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const state = notificationReducer(undefined, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(state.filter).toBe('URGENT');
    expect(state.notifications).toEqual([]);
  });
});