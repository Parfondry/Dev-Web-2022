import React, {useState, useEffect} from "react";
import axios from "axios";
import imageProfile from '../images/default.png';
import '../CSS/Navbar.css';
import authHeader from "../services/auth-header";

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

function GetProfil(){
    const [currentShow, setShow] = useState(false);
    const [currentShow2, setShow2] = useState(false);
    const [currentShow3, setShow3] = useState(false);
    const [currentShow4, setShow4] = useState(false);

    const [Profil, setProfil] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/User/pseudo/" + ProfilUser.Nickname)
            .then(
                res => setProfil(res.data.data));
    }, []);

    function ModifProfil(e){
        e.preventDefault();
        let Name = Profil[0].Nickname,pass = Profil[0].PWD,addMail = Profil[0].Mail ,addbirth = Profil[0].Birth;
        if (e.target['newName'] !== undefined && e.target['newName'] !== ''){
            Name = e.target['newName'].value;
        }
        if (e.target['newMdp'] !== undefined && e.target['newName'] !== ''){
            pass = e.target['newMdp'].value;
        }
        if (e.target['newMail'] !== undefined && e.target['newName'] !== ''){
            addMail = e.target['newMail'].value;
        }
        if (e.target['newDate'] !== undefined && e.target['newName'] !== ''){
            addbirth = e.target['newDate'].value;
        }
        axios
            .put('http://localhost:8080/User/'+Profil[0].id , {nickname: Name,
                Mail: addMail, Birth:  addbirth})
            .then(res => console.log(res));
    }

    if (JSON.parse(localStorage.getItem("user")) !== null){
        if (ProfilUser.length !== 0){
            if (Profil.length !== 0){
                return (
                    <div>
                        <img id="PhotoProfil" src={imageProfile} alt={'ProfilPicture'} height={'250px'} width={'250px'}></img>
                        <form id="MonProfil" onSubmit={ModifProfil}>
                            <label >Nom : {Profil[0].Nickname}</label>
                            <button onClick={(e) => {e.preventDefault(); setShow(currentShow => !currentShow)}}>Modifier</button><br/>
                            { currentShow ? 
                                <div>
                                    <label name={'newName'} >Nouveau nom : </label>
                                    <input name={'newName'} type={'text'} placeholder='Nom'></input>
                                </div>
                             : null }

                            <label >E-mail : {Profil[0].Mail}</label>
                            <button onClick={(e) => {e.preventDefault(); setShow2(currentShow2 => !currentShow2)}}>Modifier</button><br/>
                            { currentShow2 ? 
                                <div>
                                    <label name={'newMail'} >Nouveau Mail : </label>
                                    <input name={'newMail'} type={'text'} placeholder='example@email.com'></input>
                                </div>
                             : null }
                            
                            <label>mdp : ********</label>
                            <button onClick={(e) => {e.preventDefault(); setShow3(currentShow3 => !currentShow3)}}>Modifier</button><br/>
                            { currentShow3 ? 
                                <div>
                                    <label name={'newMdp'} >Nouveau mdp : </label>
                                    <input name={'newMdp'} type={'password'} placeholder='mdp'></input>
                                </div>
                             : null }
                           
                            <label >Date de naissances : {Profil[0].Birth}</label>
                            <button onClick={(e) => {e.preventDefault(); setShow4(currentShow4 => !currentShow4)}}>Modifier</button><br/>
                            { currentShow4 ? 
                                <div>
                                    <label name={'newDate'} >Nouvelle date : </label>
                                    <input name={'newDate'} type={'date'}></input>
                                </div>
                             : null }
                            { (currentShow || currentShow2 || currentShow3 || currentShow4) ? <input type="submit" value="Send"/> : null}
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