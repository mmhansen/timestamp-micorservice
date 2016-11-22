var express = require('express');
var moment = require('moment');

var app = express();

app.use(express.static('./public'))

app.get('/:date', function(req, res) {

  var dateParam = req.params.date;
  var human = null;
  var unix = null;

  if (dateParam.match(/^[0-9]+$/)) {
    unix = dateParam;
    human = moment.unix(dateParam).format('MMMM DD, YYYY');
  } else if (dateParam.match(/\b\w+\b [0-9]{2}, [0-9]{4}/)) {
      human = dateParam
      unix = moment(dateParam, 'MMMM DD, YYYY').unix();
  }


  res.json({
    unix: unix,
    natural: human
  });

});

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('App listening on port 3000')
})
