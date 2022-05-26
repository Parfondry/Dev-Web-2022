const jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = async (req, res, next) => {
    const token = req.header("x-auth-token");

    //si token n'est pas trouvé
    if(!token){
        res.status(401).json({
            error: "Token not found",
        });
    }

    // authentifier le token
    try{
        const user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        //console.log(user);
        req.user = user.nickname;
        next();
    }
    catch(err){
        res.status(403).json({
            error: "Invalid token",
        })
    }
}

module.exports = authToken;