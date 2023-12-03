import React from 'react';
import Logo from '../../images/Logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;