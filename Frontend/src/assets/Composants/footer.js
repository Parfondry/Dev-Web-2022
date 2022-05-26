import "../CSS/footer.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <footer id='foot'>
            <p><NavLink to={"/mention"}>Mentions Legal</NavLink></p>
            <p><NavLink to={"/contact"}>Contact</NavLink></p>
        </footer>
    );
}

export default Footer;