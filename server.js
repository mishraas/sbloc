var express = require('express');
var path    = require("path");
var apiRouter = require('./api/apiRouter');

var app = express();


app.use('/api', apiRouter);

app.use(express.static('./public'));

//Welcome file : default route
//app.get('/', function(req, res) {
//    res.sendFile(path.join(__dirname+'/public/index.html'));
//});

var title = "SBLOC APP";
var server = app.listen("3000");

console.log("Server is running at localhost:3000");
