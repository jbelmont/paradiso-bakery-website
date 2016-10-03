"use strict";

const rethinkdb = require('rethinkdb');
const winston = require('winston');

function connectToRethinkDBServer() {
    return rethinkdb
        .connect({
            host : 'localhost',
            port : 28015,
            db: 'paradiso'
        })
        .then((connect) => {
            winston.log('info', 'Connection', {  
                connection
            });
            return connection;
        })
        .catch((error) => {
            winston.log('error', 'Database Connection Error', {  
                error
            });
            return error;
        });
}

exports.connect = connectToRethinkDBServer;