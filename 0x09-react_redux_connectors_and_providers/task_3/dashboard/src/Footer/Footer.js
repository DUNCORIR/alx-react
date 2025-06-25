import React from 'react';
import './Footer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Footer functional component
function Footer({ user }) {
  return (
    <div className="App-footer">
      {user && user.email && (
        <p>Logged in as: <strong>{user.email}</strong></p>
      )}
      <p>Copyright 2020 - ALX</p>
    </div>
  );
}

// Prop types
Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

// Default props
Footer.defaultProps = {
  user: null,
};

// Redux: Map state to props
const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

// Export connected component
export default connect(mapStateToProps)(Footer);