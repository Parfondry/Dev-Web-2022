import React, {useState, useEffect} from "react";
import '../CSS/Contenu.css';
import axios from "axios";
import { useNavigate } from 'react-router';


    function verify(pseudo, mdp, mail, birth){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
        if (pseudo == "" || mdp == "" || mail == "" || birth == ""){
          alert("all the input must be comleted !");
          return false;
        }
        else if (pseudo.length < 3){
            alert("the pseudo must be at least 3 caracters long !");
            return false;
        }
        else if (mdp.length < 3){
          alert("the pseudo must be at least 3 caracters long !");
          return false;
        }
        else if(! re.test(mail)){
          alert("the email address is not correct");
          return false 
        }
        else{
            return true;
        }
      }
    function InscriptioncC(){
      let navigate = useNavigate();
      
      function handleSubmit(e) {
        e.preventDefault();
        var self = this;
        if (verify(e.target['pseudo'].value, e.target['mdp'].value, e.target['Mail'].value, e.target['Birth'].value)){

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
export {verify};