import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.props;

    return (
      <div className={css(styles.app)}>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <main className={css(styles.main)}>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </main>
        <Footer className={css(styles.footer)} />
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  listCourses: [],
  listNotifications: [],
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.array,
  listNotifications: PropTypes.array,
  logOut: PropTypes.func,
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