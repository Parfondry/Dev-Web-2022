const express = require('express');
const router = express.Router();
const React = require('../services/Reaction');

/* GET reactions. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await React.getReact(req.query.page));
  } catch (err) {
    console.error(`Error while getting reacts `, err.message);
    next(err);
  }
});

/* POST react */
router.post('/', async function(req, res, next) {
  try {
    res.json(await React.create(req.body));
  } catch (err) {
    console.error(`Error while creating reaction`, err.message);
    next(err);
  }
});

/* PUT react */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await React.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating react`, err.message);
    next(err);
  }
});

/* DELETE react */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await React.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting react`, err.message);
    next(err);
  }
});

module.exports = router;