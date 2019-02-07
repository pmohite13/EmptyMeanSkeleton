var server = require('./server');
var config = require('./config');

server.listen(config.port, function (req, res) {
    console.log('Server is listening on port: ', config.port);
});