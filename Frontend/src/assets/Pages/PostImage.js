import React from 'react';
import * as dataNav from '../Composants/Navbar';
import Footer from '../Composants/footer';
import UploadImage from '../Composants/upload_image';

function PostImage(){
    return(
        <div>
            <dataNav.Navbar/>
            <UploadImage/>
            <Footer/>
        </div>
    )
}


export default PostImage;