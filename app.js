const express = require('express')
var request = require('request');
const app = express()
const port = 3000


app.get('/', (req, res) => {
    request("http://api.openweathermap.org/data/2.5/weather?zip=94102,us&appid=0a327727e7093e6cd95aeaf16089170c", function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      obj = JSON.parse(body)
      res.send(body);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
