const {Fetchdata} = require('./GetImage2');

function AffichageImage(){
    let Images = Fetchdata();
    return(Images);
}

exports.AffichageImage = AffichageImage;