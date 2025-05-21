// File: 0x03-React_component/task_0/dashboard/src/App/App.js

import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
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
};

// Prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  listCourses: PropTypes.array,
  listNotifications: PropTypes.array,
};

export default App;