var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);    

app.set('io',io);    

var porta = process.env.PORT || 3000;
var server = http.listen(porta, function () {

    var host = process.env.IP;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});