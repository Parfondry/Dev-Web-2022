import Comments from '../Composants/getComment';
import PostComment from "./post_comment";
import Likes from "./likes";
import {Fetchdata} from './GetImage'

export function AffichageImage(){
    let images = Fetchdata();
     return(
         images.map(image => <div key={image.id} id={image.id} className='Contenu'>
                <h3>{image.Nickname}</h3>
                <img id='image' src={image.File} className="image-logo" alt="image" />
                <div id='commentaires'>
                    <Likes/>
                    <h5>Commentaires</h5>
                    <fieldset>
                        <legend>Description de l'image</legend>
                        <p>{image.Description}</p>
                    </fieldset>
                    <fieldset>
                     <legend>Commentaires</legend>
                        <Comments data={image.id}/>
                    </fieldset>
                    <fieldset>
                        <legend>Poster un commentaire</legend>
                        <PostComment data={image.id}/>
                    </fieldset>
                </div>
            </div> )
    );  
}
