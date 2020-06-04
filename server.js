//import dependencies
var express = require("express");
var path = require("path");

//create an "express" server
var app = express();

//define port where server will listen
var PORT = process.env.PORT || 8080;

//add middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//application data
var tables = [{
    customerName: "Table test",
    customerEmail: "table@test.com",
    customerID: "123456",
    phoneNumber: "555-555-5555"
}]
var waitlist = [{
    customerName: "Waitlist test",
    customerEmail: "waitlist@test.com",
    customerID: "654321",
    phoneNumber: "333-333-3333"
}];

//html routes (for displaying pages via req & res)
//-----------------
//home page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/home.html"))
})

//reserve page
app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "./public/reserve.html"))
})

//tables page
app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "./public/tables.html"))
})

//api routes (for sending and recieving data)
//route for getting table data
app.get("/api/tables", function(req, res){
    res.json(tables)
})

//route for sending table data to the server
app.post("/api/tables", function(req, res){
    if (tables.length < 5){
        tables.push(req.body)
        res.send(true) //for the front end
    } else {
        waitlist.push(req.body);
        res.send(false)
    }

    console.log(req.body)
    res.send("its working")
})

app.get("/api/waitlist", function(req, res){
    res.json(waitlist)
})




//start the server
app.listen(PORT, function(){
    console.log("the server is listening on http://localhost:" + PORT)
})

