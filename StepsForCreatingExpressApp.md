# Steps for creating a server applicaiton with Express

## Create the GitHub Repository
Use the GUI to create the .githubignore. Select node
Clone to local machine

## Create the package.json file
* `npm init -y`
* `npm install express --save`
* `npm install nodemon --save`
* add scripts to the package.json file
    * Under scripts add  
    `"start": "node server.js",`    
    `"dev": "nodemon server.js"`
* to run those scripts  
    `npm run start`    
    `npm run dev`  

## Create the server.js file
* import dependencies  
    `var express = require("express);`  
    `var path = require("path");`  
* create express server  
    `var app = express()`  
* define PORT where server will listen for requests  
    `var PORT = process.env.PORT || 8080;`  
* start the server  
    `app.listen(PORT, function(){`  
    `console.log("The server is listening at http://localhost:" + PORT)`  
    `})`
* add middleware  
    `app.use(express.urlencoded({ extended: true}));`  
    `app.use(express.json());`  
* add data or database connection  
    * arrays of objects when stubbing  
*  add routes  
    * html routes for serving up html pages  
    `app.get("/", function(req, res){`  
    `res.sendFile(path.join(__dirname, "./public/home.html"))`  
    `})`  
    * api routes for sending and recieving data   
    `app.get("/api/tables", function(req, res){`  
    `res.json(tables)`  
    `})`  
    * test GET and POST requests with POSTMAN

## Build the front end

## Deploy on heroku
