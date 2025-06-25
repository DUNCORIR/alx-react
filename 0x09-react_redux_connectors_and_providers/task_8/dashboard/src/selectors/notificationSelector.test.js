import { Map, fromJS } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import { getUnreadNotificationsByType } from './notificationSelector';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notification selectors', () => {
  const sampleData = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  // Build up states for testing
  const initial = notificationReducer(undefined, {});
  const fetched = notificationReducer(undefined, {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: sampleData,
  });
  const readSecond = notificationReducer(fetched, {
    type: MARK_AS_READ,
    index: 2,
  });
  const filtered = notificationReducer(readSecond, {
    type: SET_TYPE_FILTER,
    filter: 'URGENT',
  });

  it('filterTypeSelected returns current filter', () => {
    expect(filterTypeSelected(initial)).toBe('DEFAULT');
    expect(filterTypeSelected(filtered)).toBe('URGENT');
  });

  it('getNotifications returns notifications Map', () => {
    const notifs = getNotifications(fetched);
    expect(Map.isMap(notifs)).toBe(true);
    expect(notifs.toJS()).toEqual({
      1: {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false,
      },
      2: {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
        isRead: false,
      },
      3: {
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false,
      },
    });
  });

  it('getUnreadNotifications returns only unread', () => {
    const unread = getUnreadNotifications(readSecond);
    expect(unread.toJS()).toEqual({
      1: {
        id: 1,
        type: 'default',
        value: 'New course available',
        isRead: false,
      },
      3: {
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false,
      },
    });
    // ensure it excludes read item
    expect(unread.has(2)).toBe(false);
  });
});

describe('getUnreadNotificationsByType selector', () => {
  const state = fromJS({
    notifications: {
      notifications: {
        1: { id: 1, type: 'default', value: 'Course', isRead: false },
        2: { id: 2, type: 'urgent', value: 'Resume', isRead: false },
        3: { id: 3, type: 'urgent', value: 'Alert', isRead: true },
        4: { id: 4, type: 'default', value: 'Info', isRead: true },
      },
    },
    filter: {
      filter: 'URGENT',
    },
  });

  it('returns only unread urgent notifications when filter is URGENT', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual([
      { id: 2, type: 'urgent', value: 'Resume', isRead: false },
    ]);
  });

  it('returns all unread notifications when filter is DEFAULT', () => {
    const defaultState = state.setIn(['filter', 'filter'], 'DEFAULT');
    const result = getUnreadNotificationsByType(defaultState);
    expect(result).toEqual([
      { id: 1, type: 'default', value: 'Course', isRead: false },
      { id: 2, type: 'urgent', value: 'Resume', isRead: false },
    ]);
  });
});