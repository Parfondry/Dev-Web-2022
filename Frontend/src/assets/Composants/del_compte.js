import '../CSS/Contenu.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import authHeader from "../services/auth-header";


let ProfilUser = [];
async function recup() {
    if (JSON.parse(localStorage.getItem("user")) !== null){

        await axios
            .get("http://localhost:8080/User/test", {headers: authHeader()})
            .then(
                res => ProfilUser = res.data);
        console.log(ProfilUser.Nickname);
        return ProfilUser;
    }
}

recup();

function DeleteC(){
    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        /*const[user, setUser] = useState([]);

        useEffect(() => {
            axios()
        })*/
        fetch("http://localhost:8080/User/" + ProfilUser.Nickname, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(function(res){
                console.log(res);
                localStorage.setItem("user", null);
                navigate('/');
                window.location.reload();
        })



    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset><legend>Voulez vous vraiment supprimer votre compte ?</legend>
                    <input type="submit" value="Supprimer le compte"></input>
                </fieldset>
            </form>
        </div>
    );

}

export default DeleteC;