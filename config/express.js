var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    
    app.use('/kare', function (req, res, next){
        console.log("log: " + req.body);
        next();
    });
    
    require('../app/routes/main.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};