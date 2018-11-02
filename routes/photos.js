'use strict';
const express = require('express');
const router = express.Router();

router.param('id', (req, res, next, id)=>{
  res.send(id);
  next();
});

router.get('/', (req, res, next) => {
  res.end();
});

module.exports = router;
