/*global process*/
(function () {
    'use strict';
    var host           = 'localhost',
        port           = 9000;

    console.log('Test-proxy running on: ' + host + ':' + port);
    //................
    var http = require('http') ,
        url = require('url') ,
        path = require('path') ,
        fs = require('fs') ;
    var mimeTypes = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'text/javascript',
        'htc': 'text/x-component',
        'txt': 'text/plain',
        'ejs': 'text/html',
        'json': 'application/json',
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'ico': 'image/gif',
        'png': 'image/png',
        'gif': 'image/gif',
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'woff':'application/font-woff',
        'ttf':'application/x-font-truetype',
        'otf':'application/x-font-opentype',
        'eot':'application/vnd.ms-fontobject',
        'svg': 'image/svg+xml',
        'swf': 'application/x-shockwave-flash',
        'pdf': 'application/pdf'};
    http.createServer(function(req, res) {
        var statusCode = 200;
        var header = {'Content-Type': 'text/plain'};
        var uri = url.parse(req.url).pathname;
        uri = uri.substr(0,5) === '/html'? uri.slice(5) : uri;
        if (uri === '/') {
            uri = '/index.html';
        }
        var filename = path.join(process.cwd(), uri);
        var Ext = path.extname(filename).split('.')[1];
        var mimeType = mimeTypes[Ext];
        fs.exists(filename, function(exists) {
            if (exists) {
                if (mimeType==='audio/mpeg'||
                    mimeType==='audio/ogg'||mimeType==='audio/wav') {
                    var stat = fs.statSync(filename);
                    statusCode = 200;
                    header = {
                        'Cache-Control': 'max-age=29030400',
                        'Content-Transfer-Encoding': 'binary',
                        'Content-Length': stat.size,
                        'Content-Type': mimeType,
                        'Date':new Date(),
                        'Server':'node'
                    };
                } else {
                   statusCode = 200;
                   header = {'Content-Type':mimeType};
                }
                res.writeHead(statusCode, header);
                var fileStream = fs.createReadStream(filename);
                if (filename.split('.')[1] !== 'ico') {
                    console.log('Reading ...'+ filename);
                }
                fileStream.on('data', function (data) {
                    res.write(data);
                });
                fileStream.on('end', function() {
                    res.end();
                });
            }
        });
    }).listen(port, host);
}());
