import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { displayNotificationDrawer, hideNotificationDrawer, login } from '../actions/uiActionCreators';
import { loginRequest, logout, displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';


// Import connect from reatc redux
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  // Render method for the App component
  render() {
    const { isLoggedIn, listCourses, listNotifications, displayDrawer } = this.props;

    return (
      <div className={css(styles.app)}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
        />
        <Header />
        <main className={css(styles.main)}>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login login={this.props.login} />}
        </main>
        <Footer className={css(styles.footer)} />
      </div>
    );
  }
}
// app component
App.defaultProps = {
  isLoggedIn: false,
  listCourses: [],
  listNotifications: [],
  logOut: () => {},
  login: () => {},
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.array,
  listNotifications: PropTypes.array,
  logOut: PropTypes.func,
  login: PropTypes.func,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
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


// mapStateToProps to link stay unchanged
const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

// mapDispactchToProps
const mapDispatchToProps = {
  login:loginRequest,
  logOut: logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// Export the connected component
export { mapStateToProps };
export default connect(mapStateToProps, mapDispatchToProps)(App);