import React, {useState, useEffect} from "react";
import axios from "axios";
import imageProfile from '../images/default.png';

function GetProfil(){
    return (<div>
        <img src={imageProfile} height={'250px'} width={'250px'}></img>
        <form>
            <p>Nom : Test</p>
            <p>E-mail : Test</p>
            <p>mdp : ********</p>
        </form>
    </div>);
}

export default GetProfil;