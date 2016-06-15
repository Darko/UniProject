var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.create = function (req, res) {
  var user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email
  });

  // Regex test for email

  user.save(function (error) {
    if(error) return console.log(error); // Needs proper error handling
    res.json({
      user: user,
      status: 201,
      message: 'Successfully created user'
    });
  });

};

module.exports.show = function (req, res) {
  User.findOne({_id: req.body.id})
  .then(function (user) {
    res.json({
      user: user,
      status: 200,
      message: 'User was found in the database'
    });
  })
  .catchn(function(error){
    console.log(error);
    //needs proper handling
  });
};

module.exports.update = function(req, res) {
  User.update({_id: req.body.id}, {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email
  })
  .then(function(user) {
    res.json({
      user: user,
      status: 201,
      message: 'User updated successfully'
    })
    .catch(function (error) {
      console.log(error);
    });
  });
};
