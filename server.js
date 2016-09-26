var express = require('express');
var path = require('path');

var app = express()
app.listen(3000);



app.use(express.static('./public'))

app.get('/', function(req, res){
  // somewhere in req I need to get their url
  
})
