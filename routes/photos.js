'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Some photos');
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    //ここで、変数　title　の内容をもとに存在チェック
});
module.exports = router;