import '../CSS/Navbar.css';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import loupe from '../images/loupe.png';
import { NavLink } from "react-router-dom";
import axios from 'axios';

    export let ImgId = [];
    export let validate = false;
    async function Recherche(val){
        val.preventDefault();
        let Desc = []; let DescTag = [];
        let TagsName = [];
        let tags = ['Red','Blue'];
        let y=0; let z=0;
        if (val.target['searchBar'].value !== '') {
             await axios
                .get("http://localhost:8080/Desc")
                .then(res => Desc = res.data.data);
             if (Desc.length !==0) {
                 validate = true;
                 for (let i = 0; i < Desc.length; i++) {
                     let mots = val.target['searchBar'].value.split(' ');
                     if (mots.includes(tags[i])) {
                         TagsName[z] = tags[i];
                         z++;
                     }
                     let descri = Desc[i].Description.split(' ');
                     for (let k=0;k<descri.length;k++) {
                         if (mots.includes(descri[k])) {
                             if (!ImgId.includes(Desc[i].id)){
                                 ImgId[y] = Desc[i].id;
                                 y++;
                             }
                         }
                     }
                 }
             }

             if(TagsName.length !== 0) {
                 await axios
                     .get("http://localhost:8080/Desc/" + TagsName)
                     .then(res => DescTag = res.data.data);
                 if (DescTag.length !== 0) {
                     for (let i = 0; i < DescTag.length; i++) {
                         if (!ImgId.includes(DescTag[i][0].idImage)) {
                             ImgId[y] = DescTag[i][0].idImage;
                             y++;
                         }
                     }
                 }
             }
             return ImgId; // deuxieme fonction recupere et fait l'affichage
        }
    }
    function deconnexion(){
        localStorage.setItem("user", null);
        this.props.history.Push('/');
    }
  export function Navbar(){
      if (JSON.parse(localStorage.getItem("user")) === null){
    return(
        <div id='navbar'>
            <div>
                <NavLink to={"/"}><img id='Logo' src={logo} className="Navbar-logo" alt="logo" /></NavLink>
            </div>

            <div className="search-box">
                <form id='searching' onSubmit={Recherche}>
                    <button className="btn-search"><img id='Loupe' alt='Loupe searchbar' src={loupe}/></button>
                    <input name='searchBar' type="text" className="input-search" placeholder="Recherche..."/>
                </form>
            </div>

            <div>
                <Button id="Profil" variant='dark'><NavLink to={"/inscription"}>Inscription</NavLink></Button>
                <Button id="Profil" variant='dark'><NavLink to={"/connexion"}>Connexion</NavLink></Button>
                <Button id="Profil" variant='dark'><NavLink to={"/Profil"}>Profil</NavLink></Button>
            </div>
        </div>
    );}
      else {
          return(
              <div id='navbar'>
                  <div>
                      <NavLink to={"/"}><img id='Logo' src={logo} className="Navbar-logo" alt="logo" /></NavLink>
                  </div>
                  <div className="search-box">
                      <Button id="Ajout" variant='dark'><NavLink to={"/image"}>Poster une Image</NavLink></Button>
                      <form id='searching' onSubmit={Recherche}>
                          <button className="btn-search"><img id='Loupe' alt='Loupe searchbar' src={loupe}/></button>
                          <input name='searchBar' type="text" className="input-search" placeholder="Recherche..."/>
                      </form>
                  </div>

                  <div>
                      <Button id="Profil" variant='dark'><NavLink to={"/"} onClick={deconnexion}>Déconnexion</NavLink></Button>
                      <Button id="Profil" variant='dark'><NavLink to={"/Profil"}>Profil</NavLink></Button>
                      <Button id="Profil" variant='dark'><NavLink to={"/Supression"}>Supression compte</NavLink></Button>
                  </div>
              </div>
          );}
  }
