'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

//URL内に含まれた:idという部分にあたる文字列を、ページ内に表示させることができる。
//パスのパラメーターのidという項目をreq.params.idで受け取り、それをsend関数を使って表示させている
router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});

module.exports = router;