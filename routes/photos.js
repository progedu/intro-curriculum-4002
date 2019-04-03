'use strict';
const express = require('express');
const router = express.Router();

router.param('id', (req, res, next, id) => {
    res.send(id);
    next(); // これより下にもうひとつ router.param('id', (req, res, next, id) => {}); を定義して、それも呼ばれるようにしたいなら必要だが、今回の場合はいらない
});

router.get('/:id', (req, res, next) => {
    console.log('get');
    res.end(); // なくても動く
});

module.exports = router;
