import '../CSS/Contenu.css';
import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import authHeader from "../services/auth-header";


let profilUser = [];
async function recup() {
    if (JSON.parse(localStorage.getItem("user")) !== null){

        await axios
            .get("http://localhost:8080/User/test", {headers: authHeader()})
            .then(
                res => profilUser = res.data);
        return profilUser;
    }
}

recup();

function DeleteC(){
    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:8080/User/" + profilUser.Nickname, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(function(){
                localStorage.setItem("user", null);
                navigate('/');
                window.location.reload();
        })



    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset><legend>Voulez vous vraiment supprimer votre compte ?</legend>
                    <input type="submit" value="Supprimer le compte"/>
                </fieldset>
            </form>
        </div>
    );

}

export default DeleteC;