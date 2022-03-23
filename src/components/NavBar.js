import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <Link to="/index">
                <h1>Home</h1>
            </Link>

            <ul>
                <Link style={{ margin: '0px 10px' }} to="/category/mates">
                    Mates
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/category/bombillas">
                    Bombillas
                </Link>
                <Link style={{ margin: '0px 10px' }} to="/cart">
                    <CartWidget />
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;