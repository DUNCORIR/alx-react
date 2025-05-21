import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

function Notifications({ listNotifications }) {
  return (
    <div className="Notifications">
      {(!listNotifications || listNotifications.length === 0) ? (
        <ul>
          <NotificationItem
            key={0}
            type="default"
            value="No new notification for now"
          />
        </ul>
      ) : (
        <>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map(({ id, type, value, html }) => (
              <NotificationItem
                key={id}
                type={type}
                value={value}
                html={html}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;