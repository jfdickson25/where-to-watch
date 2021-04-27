const express = require('express');
const router = express();

const controller = require('../controller/controller');

router
    .get('/', (req, res, next) => {
        res.render('search');
    })
    .post('/', (req, res, next) => {
        const type = req.body.type;
        const title = req.body.title;
        res.redirect(`/${type}/${title.toLowerCase()}`)
    })
    .get('/:type/:title', controller.findMoviesByTitle)
    .get('/:type/:search/:id', controller.findMovieById)


module.exports = router;