'use strict';
const express = require('express');
const router = express.Router();

router.param('hoge', (req,res,next,hoge)=>{
  res.send(hoge);
  next();
});

router.get('/:hoge', (req, res, next) => {
  res.end();
});

module.exports = router;