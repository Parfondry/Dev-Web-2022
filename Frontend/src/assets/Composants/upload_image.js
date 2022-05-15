import React from "react";
import axios from "axios";

async function PostImage(e){
    e.preventDefault();

        let Image

        console.log(e.target['Image'].value);
        console.log(e.target['Idreact'].value);
        console.log(e.target['Idcom'].value);
        console.log(e.target['Iduser'].value);
        console.log(e.target['Image'].value);

        await axios
            .post("http://localhost:8080/Image", {File:e.target['Image'].value, idReact:e.target['Idreact'].value,  idCom:e.target['Idcom'].value,  idUser:e.target['Iduser'].value,  Desc:e.target['Desc'].value});
        console.log('ok');
        if (Image.length != 0){
            console.log(Image);
        }

        // let Reaction
        // await axios
        //     .post("http://localhost:8080/Reaction", {idUser:e.target['IdUser'].value, idImage:e.target['IdImage'].value,  React:e.target['React'].value});
        // console.log('ok');
        // if (Reaction.length != 0){
        //     console.log(Reaction);
        // }

    // console.log(e.target['Image'].value);
}

function UploadImage(){
    return(
        <div>
            <form onSubmit={PostImage}>
                <input type="text" name="Image" placeholder="Lien de l'image"></input>
                <input type="text" name="Idreact" placeholder="Id react"></input>
                <input type="text" name="Idcom" placeholder="Id Com"></input>
                <input type="text" name="Iduser" placeholder="Id de l'utilisateur"></input>
                <input type="text" name="Desc" placeholder="Description"></input>

                <input type="submit" value="Poster cette photo"></input>
                
                {/* <input type="text" name="IdUser" placeholder="IdUser"></input>
                <input type="text" name="IdImage" placeholder="IdImage"></input>
                <input type="text" name="React" placeholder="react"></input>

                <input type="submit" value="Envoie cette photo"></input> */}

            </form>
        </div>
    );
}

export default UploadImage;