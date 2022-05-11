import '../CSS/Navbar.css';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import loupe from '../images/loupe.png';
import { NavLink } from "react-router-dom";
//import Comments from './getComment'

    function recherche(val){
        val.preventDefault();
        if (val.target['searchBar'].value !== '') {
            //console.log(Comments());
            //val.target['searchBar'].value
        }
    }

  function Navbar(){
    return(
        <div id='navbar'>
            <div>
                <NavLink to={"/"}><img id='Logo' src={logo} className="Navbar-logo" alt="logo" /></NavLink>
            </div>

            <div className="search-box">
                <form id='searching' onSubmit={recherche}>
                    <button className="btn-search"><img id='Loupe' alt='Loupe searchbar' src={loupe}></img></button>
                    <input name='searchBar' type="text" className="input-search" placeholder="Recherche..."/>
                </form>
            </div>

            <div>
                <Button id="Profil" variant='dark'><NavLink to={"/inscription"}>Inscription</NavLink></Button>
                <Button id="Profil" variant='dark'><NavLink to={"/connexion"}>Connexion</NavLink></Button>
                <Button id="Profil" variant='dark'><NavLink to={"/"}>Profil</NavLink></Button>
            </div>
        </div>
    );
  }

export default Navbar;