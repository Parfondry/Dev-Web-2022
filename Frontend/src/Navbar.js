import './assets/CSS/Navbar.css';
import logo from './assets/images/logo.png';
import signUp from './PageInscription';
import logIn from "./PageConnexion";
import Button from 'react-bootstrap/Button';
import base from "./home";

    function signUpP() {
        signUp();
    }
    function logInP() {
        logIn();
    }
    function home(){
        base();
    }

  function Navbar(){
    return(
        <div id='navbar'>
            <img id='Logo' src={logo} onClick={home} className="Navbar-logo" alt="logo" />
            
            <button id='Icons'>A remplacer par les icons de nav</button>

            <div id='Profil'>
                <Button variant='dark' onClick={signUpP}>Inscription</Button>
                <Button variant='dark' onClick={logInP}>Connexion</Button>
                <Button variant='dark'>Profil</Button>
            </div>
        </div>
    );
  }

export default Navbar;