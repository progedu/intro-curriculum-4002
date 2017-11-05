'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('id', (req, res, next, id) => {
  const fs = require('fs');
  const readline = require('readline');
  const rs = fs.ReadStream('./users');
  const rl = readline.createInterface(rs, {});
  var userExist = false;

  rl.on('line', (line) => {
    console.log(line);
    if (id === line) {
      res.render('photos', { title: id });
      userExist = true;
    }
  });
  rl.on('close', () => {
    console.log('file was closed.');
    if (!userExist) {
      res.send('your ID is wrong');
    }
    next();
  });
   
});

router.get('/:id', (req, res, next) => {
  res.end();
})

module.exports = router;