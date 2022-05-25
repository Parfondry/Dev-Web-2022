const express = require('express');
const router = express.Router();
const Comment = require('../services/Comment');

/* GET Comment. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await Comment.getComment(req.query.page));
    } catch (err) {
        console.error(`Error while getting Comment `, err.message);
        next(err);
    }
});

router.get('/Image', async function(req, res, next) {
    try {
        res.json(await Comment.getCommentImage(req.query.page));
    } catch (err) {
        console.error(`Error while getting Comment `, err.message);
        next(err);
    }
});

/* POST Comment */
router.post('/', async function(req, res, next) {
    try {
        res.json(await Comment.create(req.body));
    } catch (err) {
        console.error(`Error while creating Comment`, err.message);
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

/* DELETE Comment */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await Comment.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting Comment`, err.message);
        next(err);
    }
});

module.exports = router;