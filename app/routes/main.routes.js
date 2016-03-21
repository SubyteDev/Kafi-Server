var mainController = require('../../app/controllers/main.controller');

module.exports = function(app){
    app.route('/request').post(mainController.requestCoffee);
    app.route('/check').get(mainController.checkRequest);
    app.route('/completed').post(mainController.completeRequest);
    app.route('/received').post(mainController.requestReceived);
    app.route('/list').get(mainController.listAllRequests);

};
