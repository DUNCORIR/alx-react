import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

describe('UI Action Creators', () => {
  it('login action creator returns correct action', () => {
    const expected = {
      type: LOGIN,
      user: { email: 'test@example.com', password: '123456' }
    };
    expect(login('test@example.com', '123456')).toEqual(expected);
  });

  it('logout action creator returns correct action', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer action creator returns correct action', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('hideNotificationDrawer action creator returns correct action', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});