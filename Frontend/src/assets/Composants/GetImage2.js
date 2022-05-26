const axios = require("axios");

const Fetchdata = () => {
        return axios
            .get("http://localhost:8080/Image")
            .then(res => {return res.data});
}

exports.Fetchdata= Fetchdata;