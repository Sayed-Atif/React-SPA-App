import {Link} from 'react-router-dom';
import React from 'react';
import '../App.css';

function Nav() {
  return (
    <nav className="app-nav">
      <div className="logo">
        <img src="https://reactjs.org/logo-og.png" alt="logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-link"><Link to="/">Home</Link></li>
        <li className="nav-link"><Link to="/about">About</Link></li>
        <li className="nav-link"><Link to="/contact">Contact</Link></li>
        <li className="nav-link"><Link to="/notfound">NotFound</Link></li>
      </ul>
    </nav>
  );
}
export default Nav;