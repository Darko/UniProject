let winston = require('winston');

let logger = new (winston.Logger)({
       levels: {
        'debug': 0,
        'error': 1,
        'data': 2,
        'warn': 3,
        'info': 4,
       },
    colors: {
        debug: 'blue',
        error: 'red',
        data: 'grey',
        warn: 'yellow',
        info: 'green'
       },
    transports: [
        new (winston.transports.Console)({level:'info',colorize: true}),
        new (winston.transports.File)({ filename: 'server.log' })
    ]
});

module.exports = logger;
