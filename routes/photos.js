'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

//[/photos/:文字列]の時、URLで渡された文字列を title という項目で認識し、ページ内に表示できる
router.get('/:title', (req, res, next) => {
  res.send(req.params.title);// XSS 脆弱性があり。sendをjsonにすると安全
});

module.exports = router;