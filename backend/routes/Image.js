const express = require('express');
const router = express.Router();
const Images = require('../services/Image');

/* GET images. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await Images.getImage(req.query.page));
  } catch (err) {
    console.error(`Error while getting images `, err.message);
    next(err);
  }
});

/* GET images by id. */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await Images.getImageById(req.params.id));
  } catch (err) {
    console.error(`Error while getting images `, err.message);
    next(err);
  }
});

/* POST image */
router.post('/', async function(req, res, next) {
  try {
    res.json(await Images.create(req.body));
  } catch (err) {
    console.error(`Error while creating image`, err.message);
    next(err);
  }
});

/* PUT programming language */
/*router.put('/:id', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});*/

/* DELETE image */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await Image.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting image`, err.message);
    next(err);
  }
});

module.exports = router;