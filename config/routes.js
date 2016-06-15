var users = require('../app/controllers/user');

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send("kappa");
  });

  app.get('/api/users/:user', users.show);
  app.post('/api/user', users.create);
  app.put('/api/users/:user', users.update);

};
