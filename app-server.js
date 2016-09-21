var express = require('express');
var path    = require("path");

var app = express();

app.use(express.static('./web/target'));

//Welcome file : default route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/web/index.html'));
});

var title = "SBLOC APP";
var server = app.listen("3000");

console.log("Server is running at localhost:3000");
