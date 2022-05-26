import React, {useState, useEffect} from "react";
import axios from "axios";
import authHeader from "../services/auth-header";

//import * as affData from '../Composants/affichage_image';


function verifyComment(comment){
    if (comment == ""){
        alert("all the input must be comleted !");
        return false;
    }
    else if (comment.length < 1){
        alert("the text must be at least 1 caracters long !");
        return false;
    }
    else if (comment.length > 20){
        alert("the text cannot exceed 20 caracters long !");
        return false;
    }
    else{
        return true;
    }
}


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

let idUser;

function PostComment(prop){
    const [profil, setProfil] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/User/pseudo/" + profilUser.Nickname)
            .then(
                res => setProfil(res.data.data));
    }, []);

    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image")
            .then(res => setImages(res.data.data));
     }, []);

    if (JSON.parse(localStorage.getItem("user")) !== null){
        if (profilUser.length !== 0){
            if (profil.length !== 0){
                idUser = profil[0].id;
            }
        }
    }

    async function PostMyComment(e){
        e.preventDefault();


        if (JSON.parse(localStorage.getItem("user")) !== null){
            if (profilUser.length !== 0 ){
                if (profil.length !== 0){
                    if (idUser){
                        await axios
                        .post("http://localhost:8080/Comment", {idUser:idUser, idImage:e.target['ImgId'].id, Comment:e.target['NewComment'].value});
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
                <textarea name="NewComment"/>
                <input id={prop.data} name="ImgId" type="submit" value="Poster ce commentaire"/>
            </form>
        </div>
    );
}

export default PostComment;
export {verifyComment}