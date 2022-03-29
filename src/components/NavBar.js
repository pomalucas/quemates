import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <ul>
                <Link style={{ margin: '0px 10px' }} to="/category/mates">
                    Mates
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/bombillas">
                    Bombillas
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;