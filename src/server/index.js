const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");


var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const userData = []
let latestResponse = []

app.get('/test', function(request, response) {
    response.send(mockAPIResponse)
    console.log(mockAPIResponse)
})

app.post('/sentiment', function(request, response) {
    let data = request.body;
    
    textapi.sentiment({
        text: data.text
      }, function(error, response) {
        if (error === null) {
          console.log("response", response)
          latestResponse = response
          userData["text"] = response
        }
      });
      response.send(latestResponse)
})



app.get('/', function(request, response) {
    response.send(userData)
})





