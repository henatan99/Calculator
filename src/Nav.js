import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
    }

    return (
        <nav>
            <h1>Math Magicians</h1>
            <ul className="nav-links" >
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/CalculatorPage" style={navStyle}>
                    <li>Calculator</li>
                </Link>
                <Link to="/Quotes" style={navStyle}>
                    <li>Quote</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav