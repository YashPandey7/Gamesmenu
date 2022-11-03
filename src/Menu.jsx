import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Menu = () => {

    return (
        <>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/profile/yash/pandey' >Profile</NavLink>
            <NavLink to='/search'>Search</NavLink>
        </>
    );
};

export default Menu;