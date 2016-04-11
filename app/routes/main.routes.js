var mainController = require('../../app/controllers/main.controller');

module.exports = function(app){
    //TODO: add a middleware for kare now have no time.
    app.route('/kafi/request').post(mainController.requestCoffee);
    app.route('/kafi/check').get(mainController.checkRequest);
    app.route('/kafi/completed').post(mainController.completeRequest);
    app.route('/kafi/received').post(mainController.requestReceived);
    app.route('/kafi/list').get(mainController.listAllRequests);

};
