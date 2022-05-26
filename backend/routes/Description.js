const express = require('express');
const router = express.Router();
const Images = require('../services/Description');

/* GET Desc. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await Images.getDesc(req.query.page));
    } catch (err) {
        console.error(`Error while getting Desc `, err.message);
        next(err);
    }
});

/*GET image by tags.*/

router.get('/:tag', async function(req, res, next) {
    try {//prob: ne vient pas ici
        res.json(await Images.getDescByTags(req.params.tag));
    } catch (err){
        console.error(`Error while getting users `, err.message);
        next(err);
    }
});

module.exports = router;