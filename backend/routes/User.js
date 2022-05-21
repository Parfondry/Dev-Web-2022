const express = require('express');
const router = express.Router();
const User = require('../services/User');
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

require("dotenv").config();


/* GET users. */
router.get('/', async function(req, res, next) {
  try {
    console.log(req.params);
    res.json(await User.getUser(req.query.page));
    //console.log('ok');
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

/*GET user by nickname.*/
router.get('/:nickname', async function(req, res, next) {
  try {//prob: ne vient pas ici
    res.json(await User.getUserByNickname(req.params.nickname));
    console.log('ok1');
    console.log(req.params);
  } catch (err){
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.post('/login', async function(req, res, next) {
  try{
    const {nickname, PWD} = req.body;

    let users = await User.getUser();
    users = users.data
    console.log(PWD);
    let user = users.find((user) => {
      return user.Nickname === nickname;
    });

    console.log(user);
    console.log(PWD);
    console.log(user.PWD);
    if (!user){
      return res.status(400)
        .json({
          error: "User not found !"
        });
    }

    //comparer mdp
    let isMatch = await bcrypt.compare(PWD, user.PWD); //problème: renvoit toujours false
    console.log(isMatch);

    if (!isMatch) {
        return res.status(401).json({
          error:"unvalid password !"
        });
    }

    //envoyer jwt
    const accessToken = await JWT.sign(
      {nickname},
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.json({
      accessToken,
    });
  }
  catch (err){
    console.error(`Error while login `, err.message);
    next(err);
  }
})

/* POST user */
router.post('/', async function(req, res, next) {
  try {
    //console.log(req.body.PWD);
    const password = req.body.PWD;
    const nickname = req.body.nickname;
    console.log(password);
    //console.log((await User.getUserByNickname(req.body.nickname)).data.length)

    //Vérifier si le pseudo n'existe pas déjà
    if ((await User.getUserByNickname(req.body.nickname)).data.length == 0){
      //hasher le mdp, 10: recommandé
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashed password:", hashedPassword);

      //envoyer en db
      await User.create({
        nickname: req.body.nickname, 
        PWD: hashedPassword, 
        Mail: req.body.Mail,
        Birth: req.body.Birth
      });
      
      //token d'acces
      const accessToken = await JWT.sign(
        {nickname},
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "24h",
        }
      );
      res.json({
        accessToken,
      });
    }
    else{
      console.error('Error this user already exist');
      res.json({error: "This user already exist !"});
    }
    
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});

/* PUT user */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await User.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await User.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

module.exports = router;