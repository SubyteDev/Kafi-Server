//to decide if it's production or development
module.exports = require('./env/' + process.env.NODE_ENV + '.js');