let express = require('express'),
    app = express(),
    http = require('http').Server(app);

let mongoose = require('mongoose'),
    config = require('./config/config');

mongoose.connect(config.db);
mongoose.connection.on('error', console.log);

require('./app/models/user');

require('./config/express')(app);
require('./config/routes.js')(app);

http.listen(3500, function () {
  console.log('Running on port ' + 3500);
});

require('./app/controllers/user');
