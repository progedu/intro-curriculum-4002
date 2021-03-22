'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

//追加
router.get('/:title', (req, res, next) => {
  res.send(req.params.title);
});



module.exports = router;