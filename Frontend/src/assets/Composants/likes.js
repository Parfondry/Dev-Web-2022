import React, {useEffect, useState} from 'react';
import axios from "axios";
import authHeader from "../services/auth-header";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

let ProfilUser = [];
async function recup() {
    if (JSON.parse(localStorage.getItem("user")) !== null){

        await axios
            .get("http://localhost:8080/User/test", {headers: authHeader()})
            .then(
                res => ProfilUser = res.data);
        console.log(ProfilUser);
        return ProfilUser;
    }
}

recup();

let IdUser;

function Likes (){

    const [Profil, setProfil] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/User/pseudo/" + ProfilUser.Nickname)
            .then(
                res => setProfil(res.data.data));
    }, []);
    if (JSON.parse(localStorage.getItem("user")) !== null){
        if (ProfilUser.length !== 0){
            if (Profil.length !== 0){
                IdUser = Profil[0].id;
            }
        }
    }
    return (
        <div style={{
            margin: 'auto',
            display: 'block',
            width: 'fit-content'
        }}>
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />}
                                   checkedIcon={<Favorite />}
                                   name="checkedH" />}
                label="Je peux like wouhou"
            />
        </div>
    );
}

export default Likes;