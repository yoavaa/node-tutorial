var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('app4/index');
});

app.get('/admin', function (req, res) {
    res.render('app4/admin');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
