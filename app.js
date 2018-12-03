var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入业务路由

var app = express();
//允许跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('asset'));
app.use('/goodsList', require('./routes/goods'));
app.use('/upLoad', require('./routes/upLoad'));
app.use('/', function (req, res, next) {
    res.end('你跨域了');
    next();
})

module.exports = app;
