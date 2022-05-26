import React, {useState, useEffect} from "react";
import '../CSS/Contenu.css';
import axios from "axios";
import { useNavigate } from 'react-router';

    async function HandleSubmitGet(){
        let Users
        await axios
            .get("http://localhost:8080/user")
            .then(res => Users = res.data.data);
        if (Users.length != 0){
            console.log(Users);
        }
        return (<div>{Users.length !=0 && Users.map(user => <li id={user.id} key={user.id}>{user.nickname}</li>)}</div>);
    }

    function InscriptioncC(){
      let navigate = useNavigate();
      function handleSubmit(e) {
          e.preventDefault();
          var self = this;

          fetch('http://localhost:8080/user', {
              method: 'POST',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify({nickname:e.target['pseudo'].value,PWD: e.target['mdp'].value,
                  Mail:e.target['Mail'].value,Birth:e.target['Birth'].value})
          })
              .then(response => response.json())
              .then(function(body){
                  if (body.accessToken) {
                      localStorage.setItem("user", JSON.stringify(body));
                  }
                  navigate('/');
              });
      }
    return(
        <div>
            <form id="Inscription" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Inscription</legend>
                    <label>Pseudo: </label>
                    <input type="text" name="pseudo" placeholder='Pseudo'></input><br></br>
                    <label>Mot de passe: </label>
                    <input type="password" name="mdp" placeholder='mot de passe'></input><br></br>
                    <label>Addresse mail: </label>
                    <input type="text" name="Mail" placeholder='Mail'></input><br></br>
                    <label>Date de naissance: </label>
                    <input type="text" name="Birth" placeholder='naissance'></input><br></br>

                    <input type="submit" value="Envoyer en DB"></input>
                </fieldset>
            </form>
        </div>
    );
  }

export default InscriptioncC;