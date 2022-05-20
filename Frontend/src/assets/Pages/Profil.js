import React from 'react';
import Navbar from '../Composants/Navbar';
import Footer from '../Composants/footer';
import Profill from '../Composants/getProfil';

function Profil(){
    return(
        <div>
            <Navbar />
            <Profill/>
            <Footer />
        </div>
    )
}

export default Profil;
