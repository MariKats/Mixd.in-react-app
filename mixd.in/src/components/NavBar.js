import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({style, title}) => (
  <nav className={`navbar navbar-${style}`}>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to="/" className='navbar-brand'><img src='./inverted-olive.png' /></Link>
      </div>
      <ul className="nav navbar-nav">
        <li><Link to="/drinks">Drinks</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
)

export default NavBar;
