import React from 'react';
import {Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-loc">Add New Location by Search</Link></li>
            </ul>
        </nav>
    );
  }
  

export default Navigation;