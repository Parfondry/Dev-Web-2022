import React, {useState, useEffect} from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import * as affData from '../Composants/affichage_image';

let ProfilUser = [];
async function recup() {
    if (JSON.parse(localStorage.getItem("user")) !== null){

        await axios
            .get("http://localhost:8080/User/test", {headers: authHeader()})
            .then(
                res => ProfilUser = res.data);
      //  console.log(ProfilUser);
        return ProfilUser;
    }
}

recup();

let IdUser;

let Profil = [];



function PostComment(prop){
    const [Profil, setProfil] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/User/pseudo/" + ProfilUser.Nickname)
            .then(
                res => setProfil(res.data.data));
    }, []);

    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image")
            .then(res => setImages(res.data.data));
     }, []);
     if(Images.length !== 0){
      //  console.log(Images[2].id);
     }

    if (JSON.parse(localStorage.getItem("user")) !== null){
        if (ProfilUser.length !== 0){
            if (Profil.length !== 0){
                // console.log(Profil);
                IdUser = Profil[0].id;
            }
        }
    }

    async function PostMyComment(e){
        e.preventDefault();


        if (JSON.parse(localStorage.getItem("user")) !== null){
            if (ProfilUser.length !== 0 ){
                if (Profil.length !== 0){
                    //ne vient pas ici 
                    console.log("ok3");
                    if (IdUser){
                        await axios
                        .post("http://localhost:8080/Comment", {idUser:IdUser, idImage:e.target['ImgId'].id, Comment:e.target['NewComment'].value});


                        console.log('ok');
                    }
                }
            }
        }
        else{
            alert("Connectez vous pour pouvoir poster un commentaire");
        }

    }
    return(
        <div>
            <form id="PostComment" onSubmit={PostMyComment}>
                <textarea name="NewComment"></textarea>
                <input id={prop.data} name="ImgId" type="submit" value="Poster ce commentaire"></input>
            </form>
        </div>
    );
}

export default PostComment;