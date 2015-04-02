var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<html>'+
        '  <head>'+
        '    <title>Hello World</title>'+
        '  </head>'+
        '  <body>'+
        '      <h1>Hello World</h1>'+
        '  </body>'+
        '</html>');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
