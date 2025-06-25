import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';  // Import the Thunk middleware
import rootReducer from './reducers/rootReducer';

// Configure the Redux store with the Thunk
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // For Redux DevTools support
  devTools: process.env.NODE_ENV !== 'production', // Enable in development
});

// Render the App component wrapped in the Redux Provider
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
