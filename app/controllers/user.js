let mongoose = require('mongoose');
let User     = mongoose.model('User');
let log      = require('../components/logger');
let util     = require('../components/util');


module.exports.create = function (req, res) {
  // optional logging here: log.data(`Created user with name ${name}`);
  return User.create(req.body)
  .then(util.respondWithResult(res, 201))
  .catch(util.handleError(res));
};

module.exports.index = function (req, res) {
  // optional logging here: log.data(`All users requested`);
  return Order.find().exec()
    .then(util.respondWithResult(res))
    .catch(util.handleError(res));
};


module.exports.show = function (req, res) {
  // optional logging here: log.data(`Request for user with id ${req.params.user}`);
  return User.findById(req.params.user).exec()
    .then(util.handleEntityNotFound(res))
    .then(util.respondWithResult(res))
    .catch(util.handleError(res));
};

module.exports.update = function(req, res) {
  // optional logging here: log.data(`Updated user with id ${req.params.user}`);
  return Order.findById(req.params.user).exec()
    .then(util.handleEntityNotFound(res))
    .then(util.saveUpdates(req.body))
    .then(util.respondWithResult(res))
    .catch(util.handleError(res));
};

module.exports.remove = function (req, res) {
  // optional logging here: log.data(`Removed user with id ${req.params.user}`);
  return Order.findById(req.params.user).exec()
    .then(util.handleEntityNotFound(res))
    .then(util.removeEntity(res))
    .catch(util.handleError(res));
};
