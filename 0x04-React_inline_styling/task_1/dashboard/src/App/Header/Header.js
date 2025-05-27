import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../../alx_logo.jpg'; // keep your current logo path

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="ALX logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>ALX School dashboard</h1>
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
  },
});

export default Header;