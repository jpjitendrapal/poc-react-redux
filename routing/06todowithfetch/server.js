
var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("config.json"));
//var host = config.host;
var port = config.port;
var bodyParser   = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());

app.use('/', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


var todos = [
    {text: "Buy milk", done: true},
    {text: "Buy home", done: false},
];

app.get("/todos", function(req, res){
    console.log("server gets the request");
    res.json(todos);
});

// app.put("/todos", function(req, res){

// })

app.delete("/todos", function(req, res){
    var index = req.body.index;
    todos.splice(index, 1);
    // res.json(todos);
    res.end();

})

app.post("/todos", function(req, res){
    console.log(req.body);
    todos.push(req.body)
    res.json(todos);
});


