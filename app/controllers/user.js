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
    res.json({
      status: 500,
      message: 'Something went wrong'
    });
    console.log(error);
  });

};

module.exports.index = function (req, res) {
  User.find({})
  .then(function (users) {
    if(!users.length) {
      return res.json({
        status: 404,
        message: 'There\'s no users in the database'
      });
    }
    res.json({
      users: users,
      status: 200,
      message: 'Lookup successfull'
    })
    .catch(function (error) {
      res.json({
        status: 500,
        message: 'Something went wrong'
      });
      console.log(error);
    });
  });
};

module.exports.show = function (req, res) {
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
    res.json({
      status: 500,
      message: 'Something went wrong'
    });
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
      res.json({
        status: 500,
        message: 'Something went wrong'
      });
      console.log(error);
    });
  });
};

module.exports.remove = function (req, res) {
  User.find({_id: req.params.user})
  .then(function (user) {
    if(!user.length) {
      return res.json({
        status: 404,
        message: 'No such user was found'
      });
    }
    else {
      user.remove();
      res.json({
        status: 200,
        message: 'User was removed'
      });
    }
  })
  .catch(function (error) {
    res.json({
      status: 500,
      message: 'Something went wrong'
    });
    console.log(error);
  });
};
