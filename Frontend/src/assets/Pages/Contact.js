import React from 'react';
import * as dataNav from '../Composants/Navbar';
import Footer from '../Composants/footer';
import Contacte from '../Composants/contenueContact'

function Contact(){
    return(
        <div>
            <dataNav.Navbar />
            <Contacte/>
            <Footer />
        </div>
    )
}


export default Contact;