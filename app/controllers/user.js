var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.create = function (req, res) {
  var user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email
  });

  // Regex test for email

  user.save()
  .then(function (user) {
    res.json({
      user: user,
      status: 201,
      message: 'Successfully created user'
    });
  })
  .catch(function (error) {
    console.log(error);
  });

};

module.exports.show = function (req, res) {
  console.log(req.body);
  User.find({_id: req.params.user})
  .then(function (user) {
    if(!user.length) {
      res.json({
        status: 404,
        message: 'User not found'
      });
    } else {
      res.json({
        user: user,
        status: 200,
        message: 'User was found in the database'
      });
    }
  })
  .catch(function(error){
    console.log(error);
    //needs proper handling
  });
};

module.exports.update = function(req, res) {
  User.update({_id: req.params.user}, req.body)
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
