import React from 'react';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import {Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Profile from './Profile';
import Search from './Search';

const App = () => {

    return (
        <>
            <Menu/>
            <Routes>
                <Route exact path='/' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/profile/:fname/:lname' element={<Profile />} />
                <Route path='/search' element={<Search/>} />
                {/* <Route element={<Error />}/> */}
            </Routes>
        </>
    );
};

export default App;