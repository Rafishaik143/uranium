const express = require('express');

const router = express.Router();
//1st Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
router.get('/get/movies', function (req, res) {
    const movies = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    res.send(movies)
});

// 2& 3 Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.
//Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api


router.get('/get/movies/:indexNumber', function (req, res) {
    const movies = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    const index = req.params.indexNumber
    if (index > movies.length)
        res.send("please enter a valid number")
    else
        res.send("the " + index + "" + " movie is : " + movies[index])


});


//4th Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
router.get('/get/films', function (req, res) {
    const films = [{
        id: 1,
        name: 'The Shining'
    }, {
        id: 2,
        name: 'Incendies'
    }, {
        id: 3,
        name: 'Rang de Basanti'
    }, {
        id: 4,
        name: ' Finding Nemo'
    }]

    res.send(films)

});
//5Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
//Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
router.get('/get/films/:filmId', function (req, res) {

    const films = [{
        id: 1,
        name: 'The Shining'
    }, {
        id: 2,
        name: 'Incendies'
    }, {
        id: 3,
        name: 'Rang de Basanti'
    }, {
        id: 4,
        name: ' Finding Nemo'
    }]


    const film = req.params.filmId

    if (film > films.length)
        res.send(" No movie exists with this id  one is")
    else
        for (let i = 0; i < films.lenth; i++) {
            if (films[i].id == film)
                res.send(films)

        }
        
});







module.exports = router;
