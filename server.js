var static = require('node-static');

var fileServer = new static.Server('./html');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(1337);

console.log("The server awaits you");