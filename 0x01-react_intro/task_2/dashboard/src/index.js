import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Notifications } from './Notifications';

const rootApp = ReactDOM.createRoot(document.getElementById('root'));
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));

rootNotifications.render(<Notifications />);
rootApp.render(<App />);