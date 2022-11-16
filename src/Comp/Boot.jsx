import React from 'react';
import { NavLink } from 'react-router-dom';

const Boot = () => {
    return (
        <>
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mr-auto navbar-light bg-light">
                            <li class="nav-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/user">User</NavLink>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>

        </>
    );
};

export default Boot;