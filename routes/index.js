var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home");
});

app.get("/urban-transport", function(req, res){
	res.render("urban-transport");
});

module.exports = app;