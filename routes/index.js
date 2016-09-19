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

module.exports = router;
