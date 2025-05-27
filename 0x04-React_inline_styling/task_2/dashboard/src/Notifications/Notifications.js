import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div className={css(styles.notifications)}>
        {listNotifications && listNotifications.length > 0 ? (
          <>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  id={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={this.markAsRead}
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
    );
  }
}

const styles = StyleSheet.create({
  notifications: {
    padding: '1rem',
    border: '2px dashed #e1484c',
    position: 'absolute',
    right: 0,
    top: '2rem',
    backgroundColor: 'white',
    width: '30vw',
    minWidth: '300px',
  },
});

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;