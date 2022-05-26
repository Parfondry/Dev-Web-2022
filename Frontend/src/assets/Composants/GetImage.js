const {useEffect, useState} =  require("react");
const axios = require("axios");

function Fetchdata(){
    const [Images, setImages] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/Image")
            .then(res => setImages(res.data.data));
    }, []);
    return Images;
}

exports.Fetchdata= Fetchdata;