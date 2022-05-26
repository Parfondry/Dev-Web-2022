const {useEffect, useState} =  require("react");
const axios = require("axios");

function Fetchdata(){
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image")
            .then(res => setImages(res.data.data));
    }, []);
    return images;
}

exports.Fetchdata= Fetchdata;