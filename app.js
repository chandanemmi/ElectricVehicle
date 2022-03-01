var express = require("express");
var app = express();
var port = 8000;

// app.get("/", (req, res) => {
// res.send("Hello World");
// });
//*************************************************************************************************** */
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

//Need to edit only here
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
});

var User = mongoose.model("User", nameSchema);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(nameSchema)

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item   to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
//*************************************************************************************************** */

app.get("/", (req, res) => {
      res.sendFile("C:/Users/HP/OneDrive/Desktop/node-demo/index.html");
    });
  
app.listen(port, () => {
    console.log("Server listening on port " + port);
    });
