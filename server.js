var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var express      = require('express');
var path         = require('path');
var app = express();

//const routes = require('./src/routes');
const React = require('react');
const {RoutingContext, match} = require('react-router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('*', function(req, res, next) {
    res.sendfile(path.resolve(__dirname, 'public','index.html'));
});

app.listen(3001, function () {
    console.log('app is listening');
})

