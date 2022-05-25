import React from 'react';
import * as dataNav from '../Composants/Navbar';
import Footer from '../Composants/footer';
import DeleteC from '../Composants/del_compte';

function Supression(){
    return(
        <div>
            <dataNav.Navbar />
            <DeleteC/>
            <Footer />
        </div>
    )
}

export default Supression;