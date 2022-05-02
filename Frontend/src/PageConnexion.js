import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/index.css';

import Connexion from "./connexion";

import reportWebVitals from './reportWebVitals';
import Navbar from "./Navbar";
import footer from "./footer";

function logIn(){
    ReactDOM.render(
        <React.StrictMode>
            <Navbar />
            <Connexion/>
            <footer/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default logIn;
