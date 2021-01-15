'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
  res.render('photos', {title: req.params.id, message: req.params.id});
});

module.exports = router;