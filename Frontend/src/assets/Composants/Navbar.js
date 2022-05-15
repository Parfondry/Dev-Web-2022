import '../CSS/Navbar.css';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import loupe from '../images/loupe.png';
import { NavLink } from "react-router-dom";
import axios from 'axios'

    async function Recherche(val){
        val.preventDefault();
        let Desc = [];
        let ImgId = [];
        if (val.target['searchBar'].value !== '') {
             await axios
                .get("http://localhost:8080/Desc")
                .then(res => Desc = res.data.data);
             if (Desc.length !=0) {
                 console.log(Desc);
                 for (let i = 0; i < Desc.length; i++) {
                     let mots = val.target['searchBar'].value.split(' ')
                     if (mots.includes(Desc[i].Desc)) {
                         ImgId[i] = Desc[i].id;
                     }
                 }
                 console.log(ImgId);
             }
             return ImgId; // deuxieme fonction recupere et fait l'affichage
        }
    }

  function Navbar(){
    return(
        <div id='navbar'>
            <div>
                <NavLink to={"/"}><img id='Logo' src={logo} className="Navbar-logo" alt="logo" /></NavLink>
            </div>

            <div className="search-box">
                <form id='searching' onSubmit={Recherche}>
                    <button className="btn-search"><img id='Loupe' alt='Loupe searchbar' src={loupe}></img></button>
                    <input name='searchBar' type="text" className="input-search" placeholder="Recherche..."/>
                </form>
            </div>

            <div>
                <Button id="Profil" variant='dark'><NavLink to={"/inscription"}>Inscription</NavLink></Button>
                <Button id="Profil" variant='dark'><NavLink to={"/connexion"}>Connexion</NavLink></Button>
                <Button id="Profil" variant='dark'><NavLink to={"/Profil"}>Profil</NavLink></Button>
            </div>
        </div>
    );
  }

export default Navbar;