import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchNotifications, markAsAread } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from '../actions/notificationActionCreators';


class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  markAsRead = (id) => {
    this.props.markAsAread(id);
  };

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
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
                 <button onClick={() => this.props.setNotificationFilter('URGENT')}>‼️</button>
                 <button onClick={() => this.props.setNotificationFilter('DEFAULT')}>💠</button> 
                </div>
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
        )}
      </>
    );
  }
}

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
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
  markAsAread: PropTypes.func,
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  fetchNotifications: () => {},
  markAsAread: () => {},
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsAread,
  setNotificationFilter
};

export { Notifications };
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);