'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  const title = req.params.title;
  if (!title.match(/%3C/) & !title.match(/</))  {
    res.send(title);
  } else {
    res.send("<h1>無効なパラメータです<h1>")
  }
});

module.exports = router;