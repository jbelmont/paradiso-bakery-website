"use strict";

const rethinkdb = require('rethinkdb');
const winston = require('winston');

const recipes = require('./recipes')["recipes"];

let connection;

let DB = {
  DATABASE_NAME: 'paradiso',
  TABLE_NAME: 'recipes',
  connection: null
};

function connectToRethinkDBServer() {
    return rethinkdb
        .connect({
            host : 'localhost',
            port : 28015
        })
        .then(connect => connect)
        .catch((error) => {
            winston.log('error', 'Database Connection Error', {
                error
            });
            return error;
        });
}

function doesParadisoExist() {
  return rethinkdb
    .dbList()
    .contains(DB.DATABASE_NAME);
}

function createParadisoDB(databaseExists) {
  if (databaseExists !== undefined && databaseExists && databaseExists.name && databaseExists.name.length === 0) {
      return createDB()
        .then(value => value);
  }
}

function createDB() {
  try {
    return rethinkdb.dbCreate(DB.DATABASE_NAME).run(DB.connection);
  } catch(err) {
    winston.log('error', 'Database Creation Error', {
      error
    });
    return error;
  }
}

function createTable() {
  return rethinkdb
    .db(DB.DATABASE_NAME)
    .tableCreate(DB.TABLE_NAME)
    .run(DB.connection);
}

function insertRecipeData() {
  return rethinkdb
    .db(DB.DATABASE_NAME)
    .table(DB.TABLE_NAME)
    .insert(recipes)
    .run(DB.connection);
}

function dbActions() {
  return connectToRethinkDBServer()
    .then((connection) => {
      DB.connection = connection;
      return doesParadisoExist();
    })
    .then((databaseExists) => {
      const databaseDoesExist = Array.prototype.slice.call(databaseExists.args).length > 1;
      if (!databaseDoesExist) {
        return createParadisoDB(databaseExists)
          .then(() => createTable())
          .then(() => insertRecipeData());
      } else {
        insertRecipeData();
      }
    });
}

exports.dbActions = dbActions;
