"use strict";

const rethinkdb = require('rethinkdb');
const winston = require('winston');

function connectToRethinkDBServer() {
    return new Promise((resolve, reject) => {
        return rethinkdb.connect({
            host : 'localhost',
            port : 28015,
            db: 'paradiso'
        }).then((connect) => {
            resolve(connect);
        }).catch((error) => {
            winston.log('error', 'Error Connection', {  
                error
            });
            reject(error);
        });
    })
    .then((connection) => {
        winston.log('info', 'Connecton', {  
            connection
        });
        return connection;
    })
    .catch((error) => {
        winston.log('error', 'Database Connection Error', {  
            error
        });
    });
}

exports.connect = connectToRethinkDBServer;