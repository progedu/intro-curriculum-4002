'use strict';
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
  //ここでパスで指定されたパラメータが、実際に存在するものか確認することでXSS脆弱性の対策ができる
});

module.exports = router;