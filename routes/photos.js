'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

// パスのパラメータのidという項目を、req.param.idで受け取り
// send関数を使って表示
router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
});

module.exports = router;