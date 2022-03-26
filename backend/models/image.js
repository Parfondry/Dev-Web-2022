const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({ //défintion du schéma des images, tous les champs sont obligatoires
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Image', imageSchema);
//Image = nom du model