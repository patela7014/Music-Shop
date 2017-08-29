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
var napster = require('./napster-endpoint');
var requestHandler = require('./requestHandler');

app.get('/load_data', function(req, res, next) {
    napster.tracks({}, (err, data) => {
        if (err) console.error(err)
        else res.json(data)
    })
});

app.set('view engine', 'ejs');
app.use(requestHandler);
app.listen(3001, function () {


    console.log('app is listening');
})

