const express = require('express');

const router = express.Router();
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const validator = require('../validator/formater.js')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    helper.printDate()
    helper.printMonth()
    helper.getbatchInfo()
});
router.get('/test-me2', function (req, res) {
    res.send('My second ever api2')
    logger.greeting()
});

router.get('/test-me3', function (req, res) {
    res.send('My third ever api3')
    validator.tm()
    validator.uppareCase()
    validator.lowerCase()
});
router.get('/hello', function (req, res) {
    res.send('hello')
    const _ = require("lodash")
    const months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    console.log(_.chunk(months,3))
    const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(_.tail(odd))
    const duplicates = [1,5,35,35,7]
    console.log(_.union(duplicates))
    const obj =[
        ['horror','The Shining'],
        ['drama','Titanic'],
        ['thriller','ShutterIsland'],
        ['fantasy','Pans Labyrinth']
    ]
      
    console.log(_.fromPairs(obj))
});


module.exports = router;
// adding this comment for no reason