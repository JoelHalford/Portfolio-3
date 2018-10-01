var express = require("express");
var app = express();
 var indexRoutes = require("./routes/index");
//Setup view engine to be EJS
app.set("view engine", "ejs");
//Setup public folder for custom CSS/JS
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);

app.listen(3000,'localhost')
{
	console.log("You are currently connected to the server.");
}