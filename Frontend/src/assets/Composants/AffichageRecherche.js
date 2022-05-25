import React, {useState, useEffect} from "react";
import axios from "axios";
import Comments from '../Composants/getComment';
import * as dataNav from '../Composants/Navbar';

function AffichageImage2(){
    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image/"+dataNav.ImgId)
            .then(res => setImages(res.data.data));
    }, []);
    return(
        Images.length !=0 && Images.map(Image => <div key={Image[0].id} id={Image[0].id} className='Contenu'>
            <h3>{Image[0].Nickname}</h3>
            <img id='image' src={Image[0].File} className="image-logo" alt="image" />
            <div id='commentaires'>
                <h5>Commentaires</h5>
                <fieldset>
                    <legend>Pseudo utilisateur</legend>
                    <Comments/>
                </fieldset>
            </div>
        </div>)
    );
}

export default AffichageImage2;