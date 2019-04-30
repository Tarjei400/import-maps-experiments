var http = require('http');
var fileSystem = require('fs');

var server = http.createServer(function(req, resp){
    fileSystem.readFile('./import-map.json', function(error, fileContent){
        if(error){
            resp.writeHead(500, {'Content-Type': 'application/x-javascript'});
            resp.end('Error' + JSON.stringify(error));
        }
        else{
            setTimeout( () => {
                resp.writeHead(200, {
                    'Content-Type': 'application/x-javascript',
                    'Access-Control-Allow-Origin': '*'
                });
                resp.write(fileContent);
                resp.end();
            }, 5000)

        }
    });
});

server.listen(8080);

console.log('Listening at: localhost:8080');
