import '../CSS/Navbar.css';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import loupe from '../images/loupe.png';
import { NavLink } from "react-router-dom";
import axios from 'axios';

    async function Recherche(val){
        val.preventDefault();
        let Desc = []; let DescTag = [];
        let ImgId = []; let TagsName = [];
        let tags = ['Apple','Rouge','Bleu','Sombre'];
        let y=0; let z=0;
        if (val.target['searchBar'].value !== '') {
             await axios
                .get("http://localhost:8080/Desc")
                .then(res => Desc = res.data.data);
             if (Desc.length !==0) {
                 console.log(Desc);
                 for (let i = 0; i < Desc.length; i++) {
                     let mots = val.target['searchBar'].value.split(' ')
                     if (mots.includes(tags[i])) {
                         TagsName[z] = tags[i];
                         z++;
                     }
                     if (mots.includes(Desc[i].Desc)) {
                         ImgId[y] = Desc[i].idImage;
                         y++;
                     }
                 }
             }
                 await axios
                     .get("http://localhost:8080/Desc/"+TagsName)
                     .then(res => DescTag = res.data.data);
                 if (DescTag.length !==0) {
                     console.log(DescTag);
                     for (let i = 0; i < DescTag.length; i++) {
                             ImgId[y] = DescTag[i].idImage;
                             y++;
                         }
                     }
                 console.log(ImgId);
                 console.log(TagsName);

             return ImgId; // deuxieme fonction recupere et fait l'affichage
        }
    }
    function deconnexion(){
        localStorage.setItem("user", null);
        this.props.history.Push('/');
    }
  function Navbar(){
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
                      <form id='searching' onSubmit={Recherche}>
                          <button className="btn-search"><img id='Loupe' alt='Loupe searchbar' src={loupe}/></button>
                          <input name='searchBar' type="text" className="input-search" placeholder="Recherche..."/>
                      </form>
                  </div>

                  <div>
                      <Button id="Profil" variant='dark'><NavLink to={"/"} onClick={deconnexion}>Déconnexion</NavLink></Button>
                      <Button id="Profil" variant='dark'><NavLink to={"/Profil"}>Profil</NavLink></Button>
                  </div>
              </div>
          );}
  }

export default Navbar;