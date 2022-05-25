import React from 'react';
import * as dataNav from '../Composants/Navbar';
import Footer from '../Composants/footer';
import Profill from '../Composants/getProfil';

function Profil(){
    return(
        <div>
            <dataNav.Navbar />
            <Profill/>
            <Footer />
        </div>
    )
}

export default Profil;
