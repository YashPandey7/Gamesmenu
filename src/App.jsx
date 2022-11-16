import React from 'react';
import {Routes,Route} from 'react-router-dom';
import About from './Comp/About';
import Contact from './Comp/Contact';
import Home from './Comp/Home';
import User from './Comp/User';
import Error from './Comp/Error';
import Menu from './Comp/Menu';
import './index.css';

const App = () => {

    return (
        <>
            <Menu/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/> 
                <Route exact path="/contact" element={<Contact/>}/>  
                <Route exact path="/user" element={<User/>}/> 
                <Route path='*' element={<Error/>}/>
            </Routes>
        </>
    );
};

export default App;