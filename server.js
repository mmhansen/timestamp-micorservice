var express = require('express');
var path = require('path');
var moment = require('moment');

var app = express()
// serve up the static files from public
app.use(express.static('./public'))

app.get('/:time', function(req, res){

  var time = moment(req.params.time);
  if (time.isValid()){
      console.log(time);
      var response = {
        unix: time.unix(),
        natural: time.format('MMMM Do YYYY, h:mm:ss a')

      }
  } else {
    console.log(time);
    var response  = {
      unix: null,
      natural: null
    }
  }

  res.json(response);
})


var server = app.listen(process.env.PORT || 3000, function(){
  console.log('App listening on port 3000')
})
