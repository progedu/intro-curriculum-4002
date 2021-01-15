'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  res.send(req.params.title.replace(/</g, '&lt;')); // javascriptの埋め込み対策

});

module.exports = router;