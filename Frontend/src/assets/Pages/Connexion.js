import React from 'react';
import Connexionc from '../Composants/connexion';
import * as dataNav from '../Composants/Navbar';
import Footer from '../Composants/footer';

function Connexion(){
    return(
        <div>
            <dataNav.Navbar />
            <Connexionc />
            <Footer />
        </div>
        )
}


export default Connexion;
