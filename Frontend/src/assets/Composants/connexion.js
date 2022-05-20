import '../CSS/Contenu.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
let user = {
    connected: false, 
    user_id: 0 //web token
};

    async function GetNickname(password, nickname){
        //const [User, setUser] =  useState([]);
        let message;
        let User;
        /*useEffect(() =>{
            axios
                .get("http://localhost:8080/user:nickname")
                .then(res => setUser(res.data.data));
        }, []);*/
        await axios
            .get("http://localhost:8080/user/" + nickname)
            .then(res => User = res.data.data)
        if (User !== undefined){

            if (User.length === 0){
                message = "Cet utilisateur n'existe pas !";
            }
            else if(User[0].PWD !== password){
                message = "Mot de pase incorect !";
            }
            else {
                user.connected = true;
                user.user_id = User[0].id;
                message = "Connecté !"
                console.log(user);
            }
        } 
        console.log(message);
    }
    function handleSubmit(e) {
        e.preventDefault()
        let nickname = e.target['pseudo'].value;
        let password = e.target['mdp'].value;
        GetNickname(password, nickname);
        console.log(user);
        return user;
        //return (<div>{Users.length !=0 && Users.map(user => <li id={user.id} nikey={user.id}>{user.nickname}</li>)}</div>);
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
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
export {user};