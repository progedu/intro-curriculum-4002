'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// パスのパラメータに id という項目が存在する場合のハンドラ
router.param('id', (req, res, next, id) => {
  res.send(id);
  next();
});

// id を含むパスにアクセスがあった際のハンドラ
router.get('/:id', (req, res, next) => {
  res.end();
});

module.exports = router;
