import React from 'react';
import Footer from '../Composants/footer';
import * as dataNav from '../Composants/Navbar';
import UploadImage from '../Composants/upload_image';
import AffichageImage from '../Composants/affichage_image';
import AffichageImage2 from '../Composants/AffichageRecherche';

function Home() {
    return(
        <div>
            <dataNav.Navbar/>
            <UploadImage />
            {dataNav.validate ?  <AffichageImage2/> : <AffichageImage/>}
            <Footer/>
        </div>
    )
}

export default Home;