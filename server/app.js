//This server acts as a middle man, caches data, stores it into an object so that response time is improved...

const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const path = require("path");
const app = express();
const apiKey = "&apikey=8730e0e";
const cachedData = {};

app.use(morgan("dev"));

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter...
app.get("/", function(req, res){
    //Here I am stating that if the url = undefinded retrieve data from omdbapi.com...
    if(cachedData[req.url]===undefined){
        axios.get('http://www.omdbapi.com' + req.url + apiKey)
            .then(function (response){
                cachedData[req.url] = response.data;
                console.log(req.url);
                res.json(response.data);        
        }) 
         .catch(function (error) {
            res.status(500);
            console.log(error);
        })
    }
    //This is stating that if the data requested is cached retrieve it from the created object(cachedData) where it was stored...
    else{
        res.json(cachedData[req.url]);
    }    
})


module.exports = app;



