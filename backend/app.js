const express = require('express');

const mongoose = require('mongoose');

const Image = require('./models/image');

const app = express();

//remplacer <password> par le mot de passe de votre compte mongodb
mongoose.connect('mongodb+srv://louis_lombaert:<password>@cluster0.s7aaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

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