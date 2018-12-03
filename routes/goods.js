const express = require('express');
const router = express.Router();
const db = require('../src/dataBase.js');

router.get('/', function (req, res) {
    db.query('select * from goodsList').then(result => {
        res.send(result);
    });
});
module.exports = router;