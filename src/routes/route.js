const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/test-me1', function (req, res) {
    res.send('My second ever api2')
});

module.exports = router;
// adding this comment for no reason