'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    //res.writeHead(200, { 'Content-Type': 'text/plain' });
//    //res.end('Hello World how r u\n');
//}).listen(port);

var express = require('express');
var app = express();
var fs = require("fs");



app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})


var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        //data = JSON.parse(data);
        var jsonString = '';
        req.on('data', function (data1) {
            jsonString += data1;
        });

        req.on('end', function () {
            var input = JSON.parse(jsonString);
            console.log(input);
            res.end(JSON.stringify(input));
        });


    });
})


var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log(" app listening at http://%s:%s", host, port)

})
