import React, {useState, useEffect} from "react";
import axios from "axios";
import imageProfile from '../images/default.png';
import '../CSS/Navbar.css';
import authHeader from "../services/auth-header";

let ProfilUser = [];
async function recup() {
    await axios
        .get("http://localhost:8080/User/test", {headers: authHeader()})
        .then(
            res => ProfilUser = res.data);
    console.log(ProfilUser);
    return ProfilUser;
}
recup();

function GetProfil(){
    const [currentShow, setShow] = useState(false);
    const [currentShow2, setShow2] = useState(false);
    const [currentShow3, setShow3] = useState(false);


    const [Profil, setProfil] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/User/pseudo/" + ProfilUser.Nickname)
            .then(
                res => setProfil(res.data.data));
    }, []);

    console.log(Profil);
    console.log(ProfilUser);
    if (JSON.parse(localStorage.getItem("user")) !== null){
        if (ProfilUser.length !== 0){
            if (Profil.length !== 0){
                console.log(Profil);
                return (<div>
                <img src={imageProfile} alt={'ProfilPicture'} height={'250px'} width={'250px'}></img>
                <form>
                    <label>Nom : {Profil[0].Nickname}</label> <button onClick={(e) => {e.preventDefault(); setShow(currentShow => !currentShow)}}>Modifier</button> <br/>
                    { currentShow ? <div><label name={'newName'} >Nouveau nom</label><input name={'newName'} type={'text'}></input></div> : null }
                    <label>E-mail : {Profil[0].Mail}</label> <button onClick={(e) => {e.preventDefault(); setShow2(currentShow2 => !currentShow2)}}>Modifier</button><br/>
                    { currentShow2 ? <div><label name={'newMail'} >Nouveau Mail</label><input name={'newMail'} type={'text'}></input></div> : null }
                    <label>mdp : ********</label> <button onClick={(e) => {e.preventDefault(); setShow3(currentShow3 => !currentShow3)}}>Modifier</button><br/>
                    { currentShow3 ? <div><label name={'newMdp'} >Nouveau mdp</label><input name={'newMdp'} type={'password'}></input></div> : null }
                </form>
            </div>);
            }
            else {
                return (<div>Loading</div>)
            }
        }
        else {
            return (<div>Loading</div>)
        }

    }
    else{
        return (<div>Connecter vous !</div>)
    }
}


export default GetProfil;