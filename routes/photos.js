'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
  
  //ここで、変数titleの内容をもとに存在チェック
  /*
  const title = req.params.title;
  if (title === 'hoge') {
    res.send(title);
  } else {
    next();
  }
  */
});

module.exports = router;