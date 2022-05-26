import Comments from '../Composants/getComment';
import PostComment from "./post_comment";
import Likes from "./likes";
import {Fetchdata} from './GetImage'

export function AffichageImage(){
    let Images = Fetchdata();
     return(
        Images.map(Image => <div key={Image.id} id={Image.id} className='Contenu'>
                <h3>{Image.Nickname}</h3>
                <img id='image' src={Image.File} className="image-logo" alt="image" />
                <div id='commentaires'>
                    <Likes/>
                    <h5>Commentaires</h5>
                    <fieldset>
                        <legend>Description de l'image</legend>
                        <p>{Image.Description}</p>
                    </fieldset>
                    <fieldset>
                     <legend>Commentaires</legend>
                        <Comments data={Image.id}/>
                    </fieldset>
                    <fieldset>
                        <legend>Poster un commentaire</legend>
                        <PostComment data={Image.id}/>
                    </fieldset>
                </div>
            </div> )
    );  
}
