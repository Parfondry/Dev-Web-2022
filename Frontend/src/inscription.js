import './assets/CSS/Contenu.css';

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Pseudo :',e.target['pseudo'].value);
        console.log('mdp :',e.target['mdp'].value);
    }

  function Inscription(){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset><legend>Partie inscription - Test - Déplacé vers page insciption</legend>
                    <label>Pseudo: </label>
                    <input type="text" name="pseudo" placeholder='Pseudo'></input><br></br>
                    <label>Mot de passe: </label>
                    <input type="text" name="mdp" placeholder='mot de passe'></input><br></br>

                    <input type="submit" value="Envoyer en DB"></input>
                </fieldset>
            </form>
            <div>
                <fieldset>
                    <h2>Affichage des données</h2>
                    <p>Pseudo a afficher ici</p>
                </fieldset>
            </div>
        </div>
    );
  }

export default Inscription;