var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

fs.readFile('/home/ubuntu/workspace/bitstarter/index.html', function (err, data) {
      if (err) throw err;
        console.log(data);
});

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
