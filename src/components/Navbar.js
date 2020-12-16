import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar bg-light navbar-expand-lg navbar-light">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link className="nav-link" to="/">Todos</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="/create">Create Todo</Link>
                </li>
                 
            </ul>
            
        </div>
    )
}

export default Navbar
