import './assets/CSS/Navbar.css';
import logo from './assets/images/logo.png';
import signUp from './PageInscription';
import logIn from "./PageConnexion";
import Button from 'react-bootstrap/Button';
import base from "./home";
import loupe from './assets/images/loupe.png';
import Comments from './getComment'

    function signUpP() {
        signUp();
    }
    function logInP() {
        logIn();
    }
    function home(){
        base();
    }
    function recherche(val){
        val.preventDefault();
        if (val.target['searchBar'].value !== '') {
            console.log(Comments());
            //val.target['searchBar'].value
        }
    }

  function Navbar(){
    return(
        <div id='navbar'>
            <div>
                <img id='Logo' src={logo} onClick={home} className="Navbar-logo" alt="logo" />
            </div>

            <div className="search-box">
                <form id='searching' onSubmit={recherche}>
                    <button className="btn-search"><img id='Loupe' alt='Loupe searchbar' src={loupe}></img></button>
                    <input name='searchBar' type="text" className="input-search" placeholder="Recherche..."/>
                </form>
            </div>

            <div>
                <Button id="Profil" variant='dark' onClick={signUpP}>Inscription</Button>
                <Button id="Profil" variant='dark' onClick={logInP}>Connexion</Button>
                <Button id="Profil" variant='dark'>Profil</Button>
            </div>
        </div>
    );
  }

export default Navbar;