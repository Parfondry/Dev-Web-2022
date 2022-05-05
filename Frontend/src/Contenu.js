import './assets/CSS/Contenu.css';
import image from './assets/images/image.png';
  
  function Contenu(){
    return(
        <div id='Contenu'>
            <h3>Pseudo</h3>
            <img id='image' src={image} className="image-logo" alt="image" />
            <div id='commentaires'>
                <h5>Commentaires</h5>
                <fieldset>
                <legend>Pseudo utilisateur</legend>
                <p>Zone de commentaires (A modifier depuis la DB)</p>
                </fieldset>
            </div>
        </div>
    );
  }

export default Contenu;