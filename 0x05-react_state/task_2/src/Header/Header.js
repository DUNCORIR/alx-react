import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../../alx_logo.jpg'; // keep your current logo path
import AppContext from '../App/AppContext';  // Import the context

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="ALX logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>ALX School dashboard</h1>
      {user.isLoggedIn && (
        <p className={css(styles.logoutSection)}>
          Welcome <strong>{user.email}</strong> 
          <span
            onClick={logOut}
            className={css(styles.logoutLink)}
            tabIndex="0"
            role="button"
            onKeyDown={(e) => { if (e.key === 'Enter') logOut(); }}
          >
            (Logout)
          </span>
        </p>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
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
  logoutSection: {
    marginLeft: 'auto',
    fontSize: '1rem',
  },
  logoutLink: {
    marginLeft: '0.5rem',
    color: '#e0354b',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export default Header;