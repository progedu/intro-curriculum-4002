'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("get /pothos");
  res.send('Some photos');
});

// paramだけだとうまくいかない
router.param('id', (req, res, next, id) => {
  console.log(`param /photos/${id}`);
  res.send(id);
  //res.end();
  next();
});

// router.param('id'
// router.get('/:id'
// このidの文字列が対になっていないとうまくいかない

// paramでnextするからこちらも呼ばれる
// paramでres.end()したら呼ばれないみたい
router.get('/:id', (req, res, next) => {
  console.log(`get /photos/:id`);
  //res.send('Some photos');
  res.end();
});

module.exports = router;