import './assets/CSS/Contenu.css';

    function handleSubmit(e) {
        e.preventDefault()
        var self = this;
        console.log('Pseudo :',e.target['pseudo'].value);
        console.log('mdp :',e.target['mdp'].value);
        //console.log({nickname:e.target['pseudo'].value,PWD: e.target['mdp'].value,
        //Mail:e.target['Mail'].value,Birth:e.target['Birth'].value})
        //pas encore testé, servira à envoyer les les données vers la db
        /*const requestOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: {"nickname":e.target['pseudo'].value,"PWD": e.target['mdp'].value,
            "Mail":e.target['Mail'].value,"Birth":e.target['Birth'].value}
        };*/
        fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({nickname:e.target['pseudo'].value,PWD: e.target['mdp'].value,
            Mail:e.target['Mail'].value,Birth:e.target['Birth'].value})
        })
            .then(response => response.json())
            .then(function(body){
                console.log(body);
            });
    }

    //requette get, pas encore fonctionelle
    /*function handleSubmitGet(e){
        e.preventDefault()
            // GET request using fetch inside useEffect React hook
            fetch('http://localhost:8080/user', {
                method: 'GET',
                headers: new Headers(),
                mode: 'cors',
                cache: 'default'
            });
        
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }*/
  function Inscription(){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset><legend>Partie inscription - Test - Déplacé vers page insciption</legend>
                    <label>Pseudo: </label>
                    <input type="text" name="pseudo" placeholder='Pseudo'></input><br></br>
                    <label>Mot de passe: </label>
                    <input type="text" name="mdp" placeholder='mot de passe'></input><br></br>
                    <label>Addresse mail: </label>
                    <input type="text" name="Mail" placeholder='Mail'></input><br></br>
                    <label>Date de naissance: </label>
                    <input type="text" name="Birth" placeholder='naissance'></input><br></br>

                    <input type="submit" value="Envoyer en DB"></input>
                </fieldset>
            </form>
            <div>
                <fieldset>
                    <h2>Affichage des données</h2>
                    <p>Pseudo a afficher ici</p>
                </fieldset>
                <form onSubmit={handleSubmitGet}>
                    <fieldset>
                        <input type="submit" value="afficher users"></input>
                    </fieldset>
                </form>
            </div>
        </div>
    );
  }

export default Inscription;