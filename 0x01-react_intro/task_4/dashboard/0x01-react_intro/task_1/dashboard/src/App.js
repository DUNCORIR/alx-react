import React from 'react';
import './App.css';
import logo from './alx_logo.jpg'; // adjust if your file is .jpg
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="ALX logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;