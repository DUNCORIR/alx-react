/**
 * notificationSelector - selectors for notifications state
 */
export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotifications = (state) =>
  state
    .get('notifications')
    .filter((notif) => notif.get('isRead') === false);