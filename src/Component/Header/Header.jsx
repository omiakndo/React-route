import React from 'react';
import { Link } from 'react-router';
import './Header.css'
import ActivLink from '../Activlink/ActivLink';

const Header = () => {
    return (
        <nav>
            <ActivLink to="/">Home</ActivLink>
            <ActivLink to="user">user</ActivLink>
            <ActivLink to="countrys">Country</ActivLink>
            <ActivLink to="/about">About</ActivLink>
            <ActivLink to="/contact">Contact</ActivLink>
        </nav>
    );
};

export default Header;