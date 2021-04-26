const fetch = require('node-fetch');

exports.findMoviesByTitle = (req, res, next) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c12d4979283eb8eb2b9dd58aa91c99e2&query=${req.params.title}`)
    .then(result => result.json())
    .then(movies => {
        res.render('movies-search-result', {
            movies: movies.results,
            search: req.params.title
        });
    })
    .catch(err => {
        res.render('500');
    })
}

exports.findMovieById = (req, res, next) => {
    fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=c12d4979283eb8eb2b9dd58aa91c99e2`)
    .then(result => result.json())
    .then(movie => {
        fetch(`https://api.themoviedb.org/3/movie/${req.params.id}/watch/providers?api_key=c12d4979283eb8eb2b9dd58aa91c99e2`)
        .then(result => result.json())
        .then(movieRentDetails => {
            res.render('movie-details', {
                movie: movie,
                search: req.params.search,
                options: movieRentDetails.results.US
            });
        }) 
        .catch(err => {
            res.render('500');
        })
    })
    .catch(err => {
        res.render('500');
    })
}