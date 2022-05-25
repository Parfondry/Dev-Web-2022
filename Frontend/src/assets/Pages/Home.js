import React from 'react';
import Footer from '../Composants/footer';
import Navbar from '../Composants/Navbar';
import UploadImage from '../Composants/upload_image';
import AffichageImage from '../Composants/affichage_image';

function Home() {
    return(
        <div>
            <Navbar/>

            <UploadImage />

            <AffichageImage/>

            <Footer/>
        </div>
    )
}

export default Home;