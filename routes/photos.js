'use strict';
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  res.render('photos', { title: req.params.id });
  //res.send(req.params.title);
});
module.exports = router;