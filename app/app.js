var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('./index.html')
  //res.send('Hello World! test cool');
});

app.get('/index', function (req, res) {
  res.sendfile('./index.html');
});

app.get('/core.js', function (req, res) {
  res.sendfile('./core.js');
});

app.get('/content.css', function (req, res) {
  res.sendfile('./content.css');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});