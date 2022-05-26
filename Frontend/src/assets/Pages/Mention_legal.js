import React from 'react';
import * as dataNav from '../Composants/Navbar';
import Footer from '../Composants/footer';
import Mentionn from '../Composants/contenuMention'

function Mention(){
    return(
        <div>
            <dataNav.Navbar />
            <Mentionn/>
            <Footer />
        </div>
    )
}


export default Mention;