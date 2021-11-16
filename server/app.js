const express = require('express')
const app = express()
const port = 3000

const path = require('path');
app.use('/static', express.static(path.join(__dirname, '/..cpp/output')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/build/index.html'));
  //__dirname : It will resolve to your project folder.
});

var server = app.listen(1956, function (req, res) {
  var host = server.address().address
  var port = server.address().port
  console.log("app listening at", host, port)
});