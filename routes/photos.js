'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});


router.param('title', (req, res, next, title) => {
  res.send(title);
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

/*
下と同じ意味ですか？
router.get('/:title', (req, res, next) => {
  const title = req.params.title;
  res.send(title);
});
*/


module.exports = router;