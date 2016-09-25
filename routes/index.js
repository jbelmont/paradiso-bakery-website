var express = require('express');
var router = express.Router();
const path = require('path');

const recipes = require(path.resolve(__dirname, '../models/recipes.js'));
const data = {
  recipes: JSON.stringify(recipes)
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

module.exports = router;
