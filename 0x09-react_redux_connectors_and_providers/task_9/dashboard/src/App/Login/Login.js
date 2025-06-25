import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
      isLoggedIn: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState(
      { email },
      () => {
        const { password } = this.state;
        this.setState({ enableSubmit: email !== '' && password !== '' });
      }
    );
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState(
      { password },
      () => {
        const { email } = this.state;
        this.setState({ enableSubmit: email !== '' && password !== '' });
      }
    );
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password" style={{ marginLeft: '10px' }}>Password: </label>
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />

          <input
            type="submit"
            value="OK"
            disabled={!this.state.enableSubmit}
            className={css(styles.button)}
          />
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: '2rem',
    fontSize: '1rem',
  },
  button: {
    marginLeft: '10px',
  },
});

export default Login;