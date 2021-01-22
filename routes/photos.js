'use strict';
const express = require('express');
const router = express.Router();

router.get('/nnn_logo', (req, res, next) => {
  // res.send(req.params.title);
  res.render('photos', { title: req.params.id });
});

module.exports = router;