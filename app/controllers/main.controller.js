var Recipee = require('mongoose').model('Recipee');

exports.requestCoffee = function (req, res, next) {
    var newCoffee = new Recipee({
        username: req.body.username,
        created_at: new Date(),
        completed: false,
        sent: false,
        content: {
            coffee: req.body.content.coffee,
            cream: req.body.content.cream,
            sugar: req.body.content.sugar
        }
    });
    
    //TODO: update newCoffee.username to new model's id
    newCoffee.save(function (err) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            Recipee.find({
                'username': newCoffee.username
            }, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(result);
                }
            });
        }
    });
};

exports.checkRequest = function (req, res, next) {
    Recipee.findOne({
        'completed': false
    }, function (err, recipees) {

        if (err) {
            res.send(err);
            console.log(err);
        } else {

            res.json(recipees);
        }
    }).
    sort('created_at');
};

exports.completeRequest = function (req, res, next){
    Recipee.findOneAndUpdate({"_id": req.body._id}, { $set: { completed: true }}, {new:true}, function(err, recipee) {
		if (err) {
            res.send(err);
			return next(err);
		}
		else {
			res.json(recipee);
		}
	});
};

exports.requestReceived = function (req, res, next){
    Recipee.findOneAndUpdate({"_id": req.body._id}, { $set: { sent: true }}, {new:true}, function(err, recipee) {
		if (err) {
            res.send(err);
			return next(err);
		}
		else {
            
			res.json(recipee);
		}
	});
};

exports.listAllRequests = function (req, res, next){
    Recipee.find({}, function (err, recipees) {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.json(recipees);
        }
    }).
    sort('created_at');
}
