import './assets/CSS/Contenu.css';

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Pseudo :',e.target['pseudo'].value);
        console.log('mdp :',e.target['mdp'].value);
        //pas encore testé, servira à envoyer les les données vers la db
        /*const requestOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: {"nickname": e.target['pseudo'].value, "PWD": e.target['mdp'].value, 
            "Mail": e.target['Mail'].value, "Birth": e.target['Birth'].value}
        };
        fetch('http://localhost:8080/user', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({postId: data.id}));*/
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