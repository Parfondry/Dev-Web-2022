import React, {useState, useEffect} from "react";
import axios from "axios";
import authHeader from "../services/auth-header";


function verifyUploadImage(Image, Description){
    if (Image == "" || Description == ""){
      alert("all the input must be comleted !");
      return false;
    }
    else if (Image.length < 10){
        alert("the link must be at least 10 caracters long !");
        return false;
    }
    else if (Image.length > 50){
      alert("the link cannot exceed 50 caracters long !");
      return false;
    }
    else if(Description > 100){
      alert("description cannot exceed 100 caracteres long !");
      return false 
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

function UploadImage(){
    const [profil, setProfil] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/User/pseudo/" + profilUser.Nickname)
            .then(
                res => setProfil(res.data.data));
    }, []);
    if (JSON.parse(localStorage.getItem("user")) !== null){
        if (profilUser.length !== 0){
            if (profil.length !== 0){
                idUser = profil[0].id;
            }
        }
    }
    async function PostImage(e){
        e.preventDefault();
        let Image
    
        if (JSON.parse(localStorage.getItem("user")) !== null){
            if (profilUser.length !== 0 ){
                if (profil.length !== 0){
                    if (idUser){
                        if(document.getElementById("LienImage").value == "" || document.getElementById("DescImage").value == ""){
                            alert("Remplissez les champs pour poster une image");
                        }
                        else{
                            await axios
                                .post("http://localhost:8080/Image", {File:e.target['Image'].value, idUser:idUser,  Description:e.target['Description'].value});
                        }
                    }
                }
            }
        }
        else{
            alert("Connectez vous pour ajouter une image");
        }
    
    }
    return(
        <div>
            <form id="UploadImage" onSubmit={PostImage}>
                <input id="LienImage" type="text" name="Image" placeholder="Lien de l'image"/>
                <input id="DescImage" type="text" name="Description" placeholder="Description"/>

                <input type="submit" value="Poster cette photo"/>
            </form>
        </div>
    );
}

export default UploadImage;
export {verifyUploadImage};