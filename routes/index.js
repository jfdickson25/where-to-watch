const express = require('express');
const router = express();

const controller = require('../controller/controller');

router
    .get('/', (req, res, next) => {
        res.status(200).render('search');
    })
    .post('/', (req, res, next) => {
        const type = req.body.type;
        const title = req.body.title;
        res.status(200).redirect(`/${type}/${title.toLowerCase()}`)
    })
    .get('/:type/:title', controller.findMoviesByTitle)
    .get('/:type/:search/:id', controller.findMovieById)


module.exports = router;