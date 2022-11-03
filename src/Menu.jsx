import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Menu = () => {

    return (
        <>
            <NavLink exact activeClassName="active_class" to='/'>About</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'>Contact</NavLink>
            <NavLink exact activeClassName="active_class" to='/profile/yash/pandey' >Profile</NavLink>
            <NavLink exact activeClassName="active_class" to='/search'>Search</NavLink>
        </>
    );
};

export default Menu;