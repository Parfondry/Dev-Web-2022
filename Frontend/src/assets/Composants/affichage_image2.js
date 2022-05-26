const {Fetchdata} = require('./GetImage2');

function AffichageImage(){
    let images = Fetchdata();
    return(images);
}

exports.AffichageImage = AffichageImage;