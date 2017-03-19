'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

/*
* /photos/:title　のようなパスにアクセスがあった場合、
* :title のところに入力された文字が
* Webページに表示されるようにします。

router.param('title', (req, res, next, title) => {
  res.send(title);
});
*/

router.param('title', (req, res, next, title) => {
  res.render('photos', { title: title });
});

router.get('/:title', (req, res, next) => {
  res.end();
});

module.exports = router;