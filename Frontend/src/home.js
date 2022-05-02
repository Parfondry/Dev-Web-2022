import React from 'react';
import ReactDOM from 'react-dom';
import './assets/CSS/index.css';
import App from './App';
import Navbar from './Navbar';
import Footer from "./footer";

import reportWebVitals from './reportWebVitals';
import Contenu from './Contenu';

function base() {
    ReactDOM.render(
        <React.StrictMode>
            {/* <App /> */}
            <Navbar/>
            <Contenu/>
            <Footer/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default base;