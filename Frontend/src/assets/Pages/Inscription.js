import React from 'react';
import Inscriptionc from '../Composants/inscription';
import * as dataNav from '../Composants/Navbar';
import Footer from '../Composants/footer';

function Inscription(){
    return(
        <div>
            <dataNav.Navbar />
            <Inscriptionc />
            <Footer />
        </div>
)
}

export default Inscription;
