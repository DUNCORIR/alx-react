import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
} from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const NotificationsContainer = (props) => {
  useEffect(() => {
    props.fetchNotifications();
  }, [props.fetchNotifications]);

  return <Notifications {...props} />;
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsAread,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);