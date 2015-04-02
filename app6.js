var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

var numberOfCalls = 0;

app.get('/', function (req, res) {
    numberOfCalls += 1;
    console.log("numberOfCalls", numberOfCalls);
    res.render('app6/index', {
        name: "yoav",
        numberOfCalls: numberOfCalls,
        primes: [1,2,3,5,7,11,17,23,27]
    });
});

app.get('/admin', function (req, res) {
    numberOfCalls = 0;
    res.render('app6/admin');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
