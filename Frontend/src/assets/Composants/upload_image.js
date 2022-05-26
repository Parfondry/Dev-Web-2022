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


let ProfilUser = [];
async function recup() {
    if (JSON.parse(localStorage.getItem("user")) !== null){

        await axios
            .get("http://localhost:8080/User/test", {headers: authHeader()})
            .then(
                res => ProfilUser = res.data);
        return ProfilUser;
    }
}

recup();

let IdUser;

function UploadImage(){
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
    async function PostImage(e){
        e.preventDefault();
        let Image
    
        if (JSON.parse(localStorage.getItem("user")) !== null){
            if (ProfilUser.length !== 0 ){
                if (Profil.length !== 0){
                    if (IdUser){
                        if(document.getElementById("LienImage").value == "" || document.getElementById("DescImage").value == ""){
                            alert("Remplissez les champs pour poster une image");
                        }
                        else{
                            await axios
                                .post("http://localhost:8080/Image", {File:e.target['Image'].value, idUser:IdUser,  Description:e.target['Description'].value});
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
                <input id="LienImage" type="text" name="Image" placeholder="Lien de l'image"></input>
                <input id="DescImage" type="text" name="Description" placeholder="Description"></input>

                <input type="submit" value="Poster cette photo"></input>
            </form>
        </div>
    );
}

export default UploadImage;
export {verifyUploadImage};