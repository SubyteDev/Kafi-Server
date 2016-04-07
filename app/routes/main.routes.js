var mainController = require('../../app/controllers/main.controller');

module.exports = function(app){
    //TODO: add a middleware for /kare now have no time.    app.route('/kare/request').post(mainController.requestCoffee);
    app.route('/kare/check').get(mainController.checkRequest);
    app.route('/kare/completed').post(mainController.completeRequest);
    app.route('/kare/received').post(mainController.requestReceived);
    app.route('/kare/list').get(mainController.listAllRequests);

};
