var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.set('view engine', 'ejs');

var numberOfCalls = 0;

app.get('/', function (req, res) {
    numberOfCalls += 1;
    res.render('app7/index', {
        name: "yoav",
        primes: [1,2,3,5,7,11,17,23,27]
    });
});

app.get('/admin', function (req, res) {
    res.render('app7/admin', {
        numberOfCalls: numberOfCalls
    });
});

app.post('/clear', function (req, res) {
    numberOfCalls = 0;
    console.log("number of calls was cleared");
});


var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
