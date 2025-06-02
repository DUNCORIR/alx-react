import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from './Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { AppContext, defaultUser, defaultLogOut } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };

  render() {
    const { listCourses, listNotifications } = this.props;
    const { displayDrawer, user } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className={css(styles.app)}>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <main className={css(styles.main)}>
            {user.isLoggedIn ? (
              <CourseList listCourses={listCourses} />
            ) : (
              <Login logIn={this.logIn} />
            )}
          </main>
          <Footer className={css(styles.footer)} />
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  listCourses: [],
  listNotifications: [],
};

App.propTypes = {
  listCourses: PropTypes.array,
  listNotifications: PropTypes.array,
};

// Aphrodite styles
const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
  footer: {
    borderTop: '2px solid #e1354b',
    textAlign: 'center',
    padding: '1rem 0',
    fontStyle: 'italic',
  },
});

export default App;