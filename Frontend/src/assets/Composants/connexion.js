import '../CSS/Contenu.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

  function ConnexionC(){
      let navigate = useNavigate();
      function handleSubmit(e) {
          e.preventDefault()
          let nickname = e.target['pseudo'].value;
          let password = e.target['mdp'].value;
          fetch('http://localhost:8080/user/login', {
              method: 'POST',
              headers: {'Content-type': 'application/json'},
              body: JSON.stringify({nickname: nickname, PWD: password})
          })
              
              .then(response => response.json())
              .then(function(body){
                  console.log("body: ", body);
                  if (body.accessToken) {
                      localStorage.setItem("user", JSON.stringify(body));
                  }
                  navigate('/');
                  window.location.reload();
              });
      }

    return(
        <div>
            <form id="Connexion" onSubmit={handleSubmit}>
                <fieldset><legend>Connexion</legend>
                    <label>Pseudo: </label>
                    <input type="text" name="pseudo" placeholder='Pseudo'/><br/>
                    <label>Mot de passe: </label>
                    <input type="password" name="mdp" placeholder='mot de passe'/><br/>

                    <input type="submit" value="Connexion"/>
                </fieldset>
            </form>
        </div>
    );
  }

export default ConnexionC;
