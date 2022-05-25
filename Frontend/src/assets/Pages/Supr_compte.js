import React from 'react';
import Navbar from '../Composants/Navbar';
import Footer from '../Composants/footer';
import DeleteC from '../Composants/del_compte';

function Supression(){
    return(
        <div>
            <Navbar />
            <DeleteC/>
            <Footer />
        </div>
    )
}

export default Supression;