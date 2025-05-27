import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';

function Notifications({ listNotifications }) {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.length === 0 ? (
          <NotificationItem type="default" value="No new notification for now" />
        ) : (
          listNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))
        )}
      </ul>
    </div>
  );
}

Notifications.defaultProps = {
  listNotifications: [],
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;