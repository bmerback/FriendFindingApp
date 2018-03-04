// npm requirements
var express = require("express");
var bodyParser = require ("body-parser");

// creating an express server
var app = express();

// creates port for server to listen on
var PORT = process.env.PORT || 8080;

// utlizing body-parser to interpret code for server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// required routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//  setting the Port to listen
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});