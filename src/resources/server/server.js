var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('../',{'index': ['index.html', 'index.htm']})).listen(8080);