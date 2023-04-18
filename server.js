const express = require("express");
const bodyParser = require("body-parser");

const app = express();// app will be the object of the project 
app.use(bodyParser.urlencoded({extended: true})); // encoded when the info came from html object

app.get("/", function(req, res){
    res.send("Hello");
}); // Set what happen when someone get our web 

app.get("/about", function(req, res){
    res.send("My name its Marco Ponce")
});

app.get("/calculator", function(req, res){
    res.sendFile(__dirname + "/index.html"); //The __dir part its to look into same dir

});

app.post("/calculator", function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});

app.listen(3000); 
