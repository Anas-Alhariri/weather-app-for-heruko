import React from 'react'
import logo from '../../assets/logo192.png'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt="Website's logo" className="nav__logo" />
            <ul className="nav__menu">
                <li><a className="nav__link" href="#home">Home</a></li>
                <li><a className="nav__link" href="#weather">Weather</a></li>
                <li><a className="nav__link" href="#contact">Contact</a></li>
                <li><a className="nav__link" href="#about">About</a></li>
                <li><a className="nav__link" href="#login">Login</a></li>
            </ul>
        </nav >
    )
}

export default Navbar
