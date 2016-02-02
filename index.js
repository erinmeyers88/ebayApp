var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();


app.use(cors());
app.use(bodyParser.json()); 



app.use(express.static('./'));

app.listen(port, function () {
	console.log("Listening on port " + port);
;});