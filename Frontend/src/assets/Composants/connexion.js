import '../CSS/Contenu.css';

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Pseudo :',e.target['pseudo'].value);
        console.log('mdp :',e.target['mdp'].value);
    }

  function ConnexionC(){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset><legend>Partie Connexion - Test</legend>
                    <label>Pseudo: </label>
                    <input type="text" name="pseudo" placeholder='Pseudo'></input><br/>
                    <label>Mot de passe: </label>
                    <input type="text" name="mdp" placeholder='mot de passe'></input><br/>

                    <input type="submit" value="Connexion"></input>
                </fieldset>
            </form>
        </div>
    );
  }

export default ConnexionC;