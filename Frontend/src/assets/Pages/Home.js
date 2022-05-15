import React from 'react';
import footer from '../Composants/footer';
import Navbar from '../Composants/Navbar';
import image from '../images/image.png';
import Comments from '../Composants/getComment';
import UploadImage from '../Composants/upload_image';

function Home() {
    return(
        <div>
            <Navbar/>

            <UploadImage />

            <div id='Contenu'>
                <h3>Pseudo</h3>
                <img id='image' src={image} className="image-logo" alt="image" />
                <div id='commentaires'>
                    <h5>Commentaires</h5>
                    <fieldset>
                     <legend>Pseudo utilisateur</legend>
                        <Comments/>
                    </fieldset>
                </div>
            </div>
            <footer/>
        </div>
    )
}

export default Home;