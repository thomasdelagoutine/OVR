/**
 * Created by Thomas on 14/05/2017.
 */
var express = require('express');
var http = require('http');
//
var path = require('path');
path.resolve("../.");
path.resolve(__dirname);
var app = express();
var port = 8088;
var server = http.createServer(app);
server.listen(port);
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
//app.use(bodyParser.json());
app.use(express.static(__dirname));
console.log(__dirname);
console.log("Le serveur de OVR tourne sur le port 8088 ! <3");
