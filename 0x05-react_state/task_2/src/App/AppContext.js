// task_2/dashboard/src/App/AppContext.js
import React from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const defaultLogOut = () => {};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;