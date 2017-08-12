
var express = require('express');
var http = require('http');
var app = express();
var port = 8087;
var server = http.createServer(app);
server.listen(port);

app.use(express.static(__dirname + '/app'));
console.log(__dirname);
console.log("Le serveur tourne sur le port 8087 ! <3");

