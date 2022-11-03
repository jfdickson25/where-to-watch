const fetch = require('node-fetch');

exports.findMoviesByTitle = (req, res, next) => {
    fetch(`https://api.themoviedb.org/3/search/${req.params.type}?api_key=${MOVIE_API_KEY}&query=${req.params.title}`)
    .then(result => result.json())
    .then(movies => {
        res.status(200).render('movies-search-result', {
            movies: movies.results,
            search: req.params.title,
            type: req.params.type
        });
    })
    .catch(err => {
        res.status(500).render('500');
    })
}

exports.findMovieById = (req, res, next) => {
    fetch(`https://api.themoviedb.org/3/${req.params.type}/${req.params.id}?api_key=${MOVIE_API_KEY}`)
    .then(result => result.json())
    .then(movie => {
        fetch(`https://api.themoviedb.org/3/${req.params.type}/${req.params.id}/watch/providers?api_key=${MOVIE_API_KEY}`)
        .then(result => result.json())
        .then(movieRentDetails => {
            res.status(200).render('movie-details', {
                movie: movie,
                search: req.params.search,
                options: movieRentDetails.results.US,
                type: req.params.type
            });
        }) 
        .catch(err => {
            res.status(200).render('500');
        })
    })
    .catch(err => {
        res.status(500).render('500');
    })
}