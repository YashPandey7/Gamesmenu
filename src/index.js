import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';
import Boot from './Comp/Boot';

ReactDOM.render(
    <BrowserRouter>
        <Boot/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);