var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//      {
//          name: "Granite Hill", 
//          image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//          description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"
         
//      },
//      function(err, campground){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("NEWLY CREATED CAMPGROUND: ");
//           console.log(campground);
//       }
//     });

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
        {name: "Granite Hill", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started.");
});