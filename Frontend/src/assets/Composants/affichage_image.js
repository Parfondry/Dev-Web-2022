import React, {useState, useEffect} from "react";
import axios from "axios";
import Comments from '../Composants/getComment';
import PostComment from "./post_comment";

function AffichageImage(){
    const [Images, setImages] = useState([]);
    let i = 0;
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image")
            .then(res => setImages(res.data.data));
     }, []);
     console.log(Images);

     return(
        Images.map(Image => <div key={Image.id} id={Image.id} className='Contenu'>
                <h3>{Image.Nickname}</h3>
                <h6>Identifiant de l'image: {Image.id}</h6>
                <img id='image' src={Image.File} className="image-logo" alt="image" />
                <div id='commentaires'>
                    <fieldset>
                        <legend>Description de l'image</legend>
                        <p>{Image.Description}</p>
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

export default AffichageImage;