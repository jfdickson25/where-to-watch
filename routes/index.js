const express = require('express');
const router = express();

const controller = require('../controller/controller');

router
    .get('/', (req, res, next) => {
        res.render('search');
    })
    .post('/', (req, res, next) => {
        const title = req.body.title;
        res.redirect(`/${title.toLowerCase()}`)
    })
    .get('/:title', controller.findMoviesByTitle)
    .get('/movie/:search/:id', controller.findMovieById)


module.exports = router;