var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    
    require('../app/routes/main.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};