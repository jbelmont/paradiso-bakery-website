"use strict";

const rethinkdb = require('rethinkdb');
const winston = require('winston');

const recipes = require('./recipes')["recipes"];

let connection;

const DB = {
  DATABASE_NAME: 'paradiso',
  TABLE_NAME: 'recipes',
  connection: null,
  port: 28015,
  host: 'localhost'
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
    .table(DB.TABLE_NAME)
    .insert(recipes)
    .run(DB.connection);
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
          console.log(values);
          return values;
        })
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
      } else {
        checkIfRecipesExists()
        .then(value => {
          if (value > 0) {
            return getRecipes();
          } else {
            return insertRecipeData()
              .then(() => {
                return getRecipes();
              });
          }
        });
      }
    });
}

exports.dbActions = dbActions;
