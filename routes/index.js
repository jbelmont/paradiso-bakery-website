'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const winston = require('winston');

/**
 * Setup Database Connection
 * Create Database, table and insert values if necessary
 * Else grab values from Recipes table to use for client
 */
const db = require(path.join(__dirname, '../models/db'));

db.dbActions()
  .then(values => {

    const data = {
      recipes: JSON.stringify(values)
    };

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', data);
    });

    /* GET Menu page. */
    router.get('/menu', function(req, res, next) {
      res.render('index', data);
    });

    /* GET Contact page. */
    router.get('/contact', function(req, res, next) {
      res.render('index', data);
    });

    /* GET Orders page. */
    router.get('/orders', function(req, res, next) {
      res.render('index', data);
    });

    /* GET Checkout page. */
    router.get('/checkout', function(req, res, next) {
      res.render('index', data);
    });

    /* GET Purchase page. */
    router.get('/purchase', function(req, res, next) {
      res.render('index', data);
    });
  });

module.exports = router;
