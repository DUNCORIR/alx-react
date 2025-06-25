import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

// This component displays a list of notifications and allows users to mark them as read
const Notifications = ({
  displayDrawer,
  listNotifications,
  handleDisplayDrawer,
  handleHideDrawer,
  markAsRead,
  setNotificationFilter,
}) => (
  <>
    <div
      className={css(styles.menuItem)}
      onClick={handleDisplayDrawer}
      data-testid="menu-item"
    >
      Your notifications
    </div>

    {displayDrawer && (
      <div className={css(styles.notifications)}>
        <button
          style={{ float: 'right', background: 'none', border: 'none' }}
          aria-label="Close"
          onClick={handleHideDrawer}
          data-testid="close-button"
        >
          ✖
        </button>

        {listNotifications.length > 0 ? (
          <>
            <p>Here is the list of notifications</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
              <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
            </div>
            <ul>
              {listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  id={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={markAsRead}
                />
              ))}
            </ul>
          </>
        ) : (
          <ul>
            <NotificationItem value="No new notification for now" />
          </ul>
        )}
      </div>
    )}
  </>
);

// This component uses Aphrodite for styling
const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    padding: '1rem',
    cursor: 'pointer',
  },
  notifications: {
    padding: '1rem',
    border: '2px dashed #e1484c',
    position: 'absolute',
    right: 0,
    top: '2rem',
    backgroundColor: 'white',
    width: '30vw',
    minWidth: '300px',
    zIndex: 1,
  },
});

// PropTypes for type checking
Notifications.propTypes = {
  listNotifications: PropTypes.array,
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

// Default props for the component
Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markAsRead: () => {},
  setNotificationFilter: () => {},
};

export default Notifications;