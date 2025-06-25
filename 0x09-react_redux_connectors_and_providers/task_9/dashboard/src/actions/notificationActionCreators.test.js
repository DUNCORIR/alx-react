// Import necessary modules and action types
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

// Import action creators
import {
  markAsAread,
  setNotificationFilter,
  setLoadingState,
  setNotifications,
  fetchNotifications,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionCreators';

// Import necessary testing libraries
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';

// Enable fetch mocking
fetchMock.enableMocks();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Notification Action Creators', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // Test for markAsAread action creator
  it('markAsAread returns correct action', () => {
    const expected = { type: MARK_AS_READ, index: 1 };
    expect(markAsAread(1)).toEqual(expected);
  });

  // Test for setNotificationFilter action creator for DEFAULT
  it('setNotificationFilter returns correct action for DEFAULT', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expected);
  });

  // Test for setNotificationFilter action creator for URGENT
  it('setNotificationFilter returns correct action for URGENT', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual(expected);
  });

  // Test for setLoadingState action creator
  it('setLoadingState returns correct action', () => {
    const expected = {
      type: SET_LOADING_STATE,
      isLoading: true,
    };
    expect(setLoadingState(true)).toEqual(expected);
  });

  // Test for setNotifications action creator
  it('setNotifications returns correct action', () => {
    const mockData = [
      { id: 1, type: 'default', value: 'New course available' },
    ];
    const expected = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: mockData,
    };
    expect(setNotifications(mockData)).toEqual(expected);
  });

  // Test for fetchNotifications success
  it('fetchNotifications dispatches loading and success actions', async () => {
    const mockData = [
      { id: 1, type: 'default', value: 'Test notification' },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const store = mockStore({});
    await store.dispatch(fetchNotifications());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: SET_LOADING_STATE, isLoading: true });
    expect(actions[1]).toEqual({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: mockData,
    });
    expect(actions[2]).toEqual({ type: SET_LOADING_STATE, isLoading: false });
  });

  // Test for fetchNotifications failure
  it('fetchNotifications handles fetch failure and sets loading false', async () => {
    fetchMock.mockRejectOnce(() => Promise.reject('API failure'));

    const store = mockStore({});
    await store.dispatch(fetchNotifications());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: SET_LOADING_STATE, isLoading: true });
    expect(actions[1]).toEqual({ type: SET_LOADING_STATE, isLoading: false });
  });
});