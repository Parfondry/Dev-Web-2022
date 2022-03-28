const express = require('express');

const mysql = require('mysql');

const Image = require('./models/image');

const app = express();


var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});

app.use(express.json());


app.post('/api/images', (req, res, next) => {
  //delete req.body._id;
  const image = new Image({
    ...req.body //créer une nouvelle instance du model thing grace à la requette
    //... sert à copier tous les élements de req.body
  });
  image.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

//permet l'affichage d'un seul élement
app.get('/api/images/:id', (req, res, next) => {
  Image.findOne({ _id: req.params.id })
    .then(image => res.status(200).json(image))
    .catch(error => res.status(404).json({ error }));
});

app.use((req, res, next) => { //éviter les erreurs de CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/images', (req, res, next) => {
    Image.find()
      .then(images => res.status(200).json(images))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;