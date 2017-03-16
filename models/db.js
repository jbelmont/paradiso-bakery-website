'use strict';

const rethinkdb = require('rethinkdb');
const winston = require('winston');

const recipes = require('./recipes')['recipes'];

const DB = {
  DATABASE_NAME: process.env.DATABASE_NAME || 'paradiso',
  TABLE_NAME: process.env.TABLE_NAME || 'recipes',
  connection: null,
  port: process.env.DB_PORT || 28015,
  host: process.env.DB_HOST || 'localhost'
};

function connectToRethinkDBServer() {
  return rethinkdb
        .connect({
          host : DB.host,
          port : DB.port,
          db: DB.DATABASE_NAME
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
    .contains(DB.DATABASE_NAME)
    .run(DB.connection)
    .then(exists => exists);
}

function createParadisoDB(databaseExists) {
  if (!databaseExists) {
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
    .run(DB.connection)
    .then(connection => connection);
}

function insertRecipeData() {
  return rethinkdb
    .table(DB.TABLE_NAME)
    .insert(recipes)
    .run(DB.connection)
    .then(results => results);
}

function checkIfRecipesExists() {
  return rethinkdb
    .table(DB.TABLE_NAME)
    .count()
    .run(DB.connection)
    .then((count) => {
      return count;
    });
}

function getRecipes() {
  return rethinkdb
    .table(DB.TABLE_NAME)
    .run(DB.connection)
    .then(cursor => {
      return cursor
        .toArray()
        .then(values => {
          return values;
        });
    });
}

function dbActions() {
  return connectToRethinkDBServer()
    .then((connection) => {
      DB.connection = connection;
      return doesParadisoExist()
        .then(exists => exists);
    })
    .then((databaseExists) => {
      if (!databaseExists) {
        return createParadisoDB(databaseExists)
          .then(() => createTable())
          .then(() => insertRecipeData());
      }
    })
    .then(() => {
      return checkIfRecipesExists()
        .then(value => {
          if (value > 0) {
            return getRecipes()
              .then(values => {
                return values;
              });
          } else {
            insertRecipeData()
              .then(() => {
                return getRecipes()
                  .then(values => {
                    return values;
                  });
              });
          }
        });
    });
}

exports.dbActions = dbActions;
