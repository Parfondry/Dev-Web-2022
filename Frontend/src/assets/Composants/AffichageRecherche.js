import React, {useState, useEffect} from "react";
import axios from "axios";
import Comments from '../Composants/getComment';
import * as dataNav from '../Composants/Navbar';
import PostComment from "./post_comment";
import Likes from "./likes";

function AffichageImage2(){
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image/"+dataNav.imgId)
            .then(res => setImages(res.data.data));
    }, []);
    return(
        images.length !==0 && images.map(image => <div key={image[0].id} id={image[0].id} className='Contenu'>
            <h3>{image[0].Nickname}</h3>
            <img id='image' src={image[0].File} className="image-logo" alt="image" />
            <div id='commentaires'>
                <Likes/>
                <h5>Commentaires</h5>
                <fieldset>
                    <legend>Description de l'image</legend>
                    <p>{image[0].Description}</p>
                </fieldset>
                <fieldset>
                    <legend>Commentaires</legend>
                    <Comments/>
                </fieldset>
                <fieldset>
                    <legend>Poster un commentaire</legend>
                    <PostComment/>
                </fieldset>
            </div>
        </div>)
    );
}

export default AffichageImage2;