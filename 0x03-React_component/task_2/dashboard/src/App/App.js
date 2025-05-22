// File: 0x03-React_component/task_1/dashboard/src/App/App.js

import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

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
      <div className="App">
        <Notifications listNotifications={listNotifications} />
        <Header />
        <main>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </main>
        <Footer />
      </div>
    );
  }
}

// Default props
App.defaultProps = {
  isLoggedIn: false,
  listCourses: [],
  listNotifications: [],
  logOut: () => {},
};

// Prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.array,
  listNotifications: PropTypes.array,
  logOut: PropTypes.func,
};

export default App;
