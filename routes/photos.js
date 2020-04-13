// /photos/:title のようなパスにアクセスがあった場合、 :title のところに入力された 文字が Web ページに表示されるようにしてみましょう。
'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  res.send(req.params.title)
});

module.exports = router;