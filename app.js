var express = require("express");
var app = express();
var port = 8080;
 
 app.get("/", (req, res) => {
     res.send("Hello World");
    });

// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://127.0.0.1:3000/ElecticVehicle");

// var nameSchema = new mongoose.Schema({
//     firstName: String,
//     lastNameName: String
//   });
// var User = mongoose.model("User", nameSchema);
// console.log(User)

