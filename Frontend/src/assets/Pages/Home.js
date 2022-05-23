import React from 'react';
import footer from '../Composants/footer';
import Navbar from '../Composants/Navbar';
import UploadImage from '../Composants/upload_image';
import AffichageImage from '../Composants/affichage_image';

function Home() {
    return(
        <div>
            <Navbar/>

            <UploadImage />

            <AffichageImage/>

            <footer/>
        </div>
    )
}

export default Home;