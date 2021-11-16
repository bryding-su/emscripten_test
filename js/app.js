const express = require('express')
const app = express()
const port = 3000

const path = require('path');

// app.set('appPath', 'output');
app.use(express.static(__dirname));

express.static.mime.define({ 'application/wasm': ['wasm'] });

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(1956, function (req, res) {
  var host = server.address().address
  var port = server.address().port
  console.log("app listening at", host, port)
});