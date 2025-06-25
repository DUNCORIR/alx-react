import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../../alx_logo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';

function Header({ user, logout }) {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="ALX logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>ALX School dashboard</h1>
      {user && user.email && (
        <p className={css(styles.logout)}>
          Welcome <strong>{user.email}</strong> (
          <a
            href="#logout"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            logout
          </a>
          )
        </p>
      )}
    </div>
  );
}

// PropTypes
Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  logout: PropTypes.func,
};

// DefaultProps
Header.defaultProps = {
  user: null,
  logout: () => {},
};

// Styles
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '3px solid #e0354b',
    color: '#e0354b',
    padding: '1rem',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginRight: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    flexGrow: 1,
  },
  logout: {
    fontSize: '1rem',
    fontStyle: 'italic',
    alignSelf: 'flex-end',
  },
});

// mapStateToProps
const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

// mapDispatchToProps
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);