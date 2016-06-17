var gulp = require('gulp');
var webpack = require('webpack');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var del = require('del');
var gutil = require('gulp-util');

var webpackConfig = require('./webpack.config.js');

var jsPaths = [
  'static/js/*.js'
];
var sassPaths = [
  'static/sass/*.scss'
];

gulp.task('clean', function() {
  return del([
    './static/build/*'
  ]);
});

gulp.task('uglify:js', function() {
  return gulp.src(jsPaths)
    .pipe(uglify())
    .pipe(gulp.dest('static/build'));
});

gulp.task('build:js', function(callback) {
  process.env.UV_THREADPOOL_SIZE = 100;
  webpack(Object.create(webpackConfig), function(err, stats) {
    if (err) {
      throw new gutil.PluginError('build:js', err);
    }
    gutil.log('[build:js]', stats.toString({colors: true, chunks: false}));
    callback();
  });
});

gulp.task('build:sass', function() {
  return gulp.src(sassPaths)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer({cascade: false}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/build'));
});

gulp.task('watch:js', function() {
  process.env.UV_THREADPOOL_SIZE = 100;
  var config = Object.create(webpackConfig);
  config.watch = true;
  webpack(config, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('watch:js', err);
    }
    gutil.log('[watch:js]', stats.toString({colors: true, chunks: false}));
  });
  gulp.watch('static/js/*.js', ['uglify:js']);
});

gulp.task('watch:sass', function() {
  gulp.watch(['./static/scss/*.scss']);
});

gulp.task('start', function() {
  nodemon({
    script: './bin/www',
    ignore: ['static/*']
  });
});

gulp.task('build', function(cb) {
  process.env.UV_THREADPOOL_SIZE = 100;
  runSequence('clean', 'uglify:js', 'build:js', 'build:sass', cb);
});

gulp.task('dev', function(cb) {
  process.env.UV_THREADPOOL_SIZE = 100;
  runSequence('clean', 'uglify:js', 'build:sass', ['watch:js', 'watch:sass'], 'start', cb);
});
