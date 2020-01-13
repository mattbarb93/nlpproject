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

/*app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/
app.get('/api', function (req, res) {
    textapi.sentiment({
        'text': 'John is a very good football player!'
    }, function (error, response) {
        if (error === null) {
            console.log(response)
            res.send(response)
        }
    })
})

app.post('/api', function (req, res) {
    let data = req.body;
    console.log(data)
    newEntry = {
      text: data.text
    }
  
    userData.push(newEntry)
    res.send(userData)
  })
