import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;