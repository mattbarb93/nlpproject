const projectData = {};
let latestResponse = {}
const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const cors = require("cors");
var bodyParser = require('body-parser')
dotenv.config();
const aylien = require("aylien_textapi");
//API Creds
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});


const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})
/*
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
*/
// designates what port the app will listen to for incoming requests



app.get('/all', getAll)
app.post('/sentiment', postSentiment)



function postSentiment(request, response) {
    let data = request.body;
    console.log(data)
    textapi.sentiment({
        text: data.text
      }, function(error, response) {
        if (error === null) {
          console.log("response", response)
          projectData["text"] = response
          latestResponse = response
        }
      });
      response.send(latestResponse)
      console.log('this is latest response after the text goes in the function: ' + latestResponse.text)
      
}

function getAll(request, response) {
    response.send(projectData)
}





