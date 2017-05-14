/**
 * Created by Thomas on 14/05/2017.
 */
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var port = 8088;
var server = http.createServer(app);
server.listen(port);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("../" + __dirname + '/'));
console.log("Le serveur de OVR tourne sur le port 8088 ! <3");
