var winston = require('C:\\Protractor_Work\\e2e\\node_modules\\winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp : true });
winston.add(winston.transports.File, { filename: 'winston-logs.log' });

module.exports = winston;