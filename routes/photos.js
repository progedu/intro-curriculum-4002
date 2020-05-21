'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', function(req, res, next) {
  res.render('photos', { title: req.params.title });
});

router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

module.exports = router;