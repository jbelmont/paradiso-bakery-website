"use strict";

const rethinkdb = require('rethinkdb');
const winston = require('winston');

const recipes = require('./recipes')["recipes"];

const DB = {
  'DATABASE_NAME': 'paradiso',
  'TABLE_NAME': 'recipes'
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
  return rethinkdb.branch(
    databaseExists,
    { dbs_created: 0 },
    createDB()
  )
}

function createDB() {
  try {
    const creationObject = rethinkdb.dbCreate(DB.DATABASE_NAME);
    return creationObject;
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
    .run();
}

function insertRecipeData() {
  return rethinkdb.table(DB.DATABASE_NAME)
    .insert(recipes);
}

function dbActions() {
  return connectToRethinkDBServer()
    .then(() => {
      return doesParadisoExist();
    })
    .then(() => {
      return createParadisoDB();
    })
    .then(() => {
      return createTable();
    })
    .then(() => {
      return insertRecipeData();
    })
}

exports.dbActions = dbActions;
