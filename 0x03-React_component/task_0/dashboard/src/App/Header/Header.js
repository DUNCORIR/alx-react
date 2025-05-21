import React from 'react';
import './Header.css';
import logo from '../../alx_logo.jpg'; // use the same logo path you already have

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="ALX logo" style={{ width: '100px', height: 'auto' }} />
      <h1>ALX School dashboard</h1>
    </div>
  );
}

export default Header;