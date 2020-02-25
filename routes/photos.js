'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:id', (req,res, next) => {
  res.send(req.params.id);
})
router.get('/:title', (req,res,next) => {
  const title= req.params.title;
  //処理
})

module.exports = router;