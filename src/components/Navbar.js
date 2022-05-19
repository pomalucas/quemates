import React from 'react'
import { CartWidget } from './CartWidget'
import "./navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className='header'>
            <Link to="/">
                <h1 className='header-brand-name'>Quemates</h1>
            </Link>
            <nav className='header-nav'>
                <ul>
                    <Link style={{ margin: '0px 5px' }} to="/tipo/Mates">Mates</Link>
                    <Link style={{ margin: '0px 5px' }} to="/tipo/Bombillas">Bombillas</Link>
                </ul>
            </nav>
            <>
                <CartWidget />
            </>
        </header>
    )
}
