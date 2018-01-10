var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set ("view engine", "ejs");

var friends = ["Lord Farquad", "Billy Ray Cyrus", "Elvis 'The King of Rock' Presley", "Pierre", "The DonTron"];

app.get("/", function(req, res){
    res.render("home");
    console.log("Connected");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});