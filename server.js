var webservice = require('./lib/webservice'),
    demoModule = require('./examples/demoModule');

webservice.createServer(demoModule).listen(8080);
console.log(' > json webservice started on port 8080');