// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);