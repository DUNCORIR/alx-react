import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: '2rem',
    fontSize: '1rem',
  },
});

export default Login;