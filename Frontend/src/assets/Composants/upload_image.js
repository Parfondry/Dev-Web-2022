import React, {useState, useEffect} from "react";
import axios from "axios";
import authHeader from "../services/auth-header";

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

let Profil = [];



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
                console.log(Profil);
                IdUser = Profil[0].id;
            }
        }
    }
    async function PostImage(e){
        e.preventDefault();
        //GetProfil();
        let Image
    
        console.log(e.target['Image'].value);
        //console.log(e.target['Iduser'].value);
        console.log(e.target['Description'].value);
        console.log(IdUser);
        if (JSON.parse(localStorage.getItem("user")) !== null){
            console.log("ok1");
            if (ProfilUser.length !== 0 ){
                console.log("ok2");
                if (Profil.length !== 0){
                    //ne vient pas ici 
                    console.log("ok3");
                    if (IdUser){
                        console.log('ok');
                        await axios
                            .post("http://localhost:8080/Image", {File:e.target['Image'].value, idUser:IdUser,  Description:e.target['Description'].value});
                        console.log('ok');
                        /*if (Image.length != 0){
                            console.log(Image);
                        }*/
                    }
                }
            }
        }
    
    }
    return(
        <div>
            <form id="UploadImage" onSubmit={PostImage}>
                <input type="text" name="Image" placeholder="Lien de l'image"></input>
                <input type="text" name="Description" placeholder="Description"></input>

                <input type="submit" value="Poster cette photo"></input>
            </form>
        </div>
    );
}

export default UploadImage;