var http = require('http');
var url = require('url');
var fs = require('fs');


const knownRoutes = 
    { 
        '/': "artigos.html",
        '/artigos': "artigos.html",
        "/contato": "contato.html",
        "/erro": "erro.html"
    };

var server = http.createServer((request, response) => {
    let parsedUrl = url.parse(request.url, true);
    let path = knownRoutes[parsedUrl.pathname];
    if(!path)
        path = knownRoutes['/erro'];

    fs.readFile(__dirname + "/" + path, (error, html) => {

        response.writeHead(200, {'Content-Type': 'text/html'});        
        response.end(html);
    })
});


var port = 3000
server.listen(3000, () => console.log(`Servidor ouvindo na porta ${3000}`));