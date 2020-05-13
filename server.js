var express = require ("express");
var path = require ("path");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("build"))

//routing code
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

//server listener
app.listen(PORT, function (){
    console.log(`currently listening to ${PORT}`)
})