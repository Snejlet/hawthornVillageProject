var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var siteRouter = require('./routes/routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use("/", siteRouter);

var server = app.listen(3003, function() {
    var port = server.address().port;

    console.log("app listening at :%s", port)
});