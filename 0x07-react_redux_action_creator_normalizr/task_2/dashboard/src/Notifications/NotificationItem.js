// NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, value, html }) => {
  const liStyle = type === 'urgent' ? styles.urgent : styles.default;

  return (
    <li
      className={css(liStyle)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html ? html : undefined}
    >
      {!html && value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

export default NotificationItem;