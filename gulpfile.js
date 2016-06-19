var gulp = require('gulp');
var webpack = require('webpack');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var merge = require('merge-stream');
var nodemon = require('gulp-nodemon');

var webpackConfig = require('./webpack.config.js');

var jsPaths = [
  'static/js/*.js'
];
var sassPaths = [
  'static/scss/*.scss',
  './node_modules/bootstrap/dist/css/*.css'
];

var filesToCopy = [{
		src: './node_modules/react/dist/react.min.js',
		dest: './static/build'
	}, {
    src: './node_modules/react-dom/dist/react-dom.min.js',
		dest: './static/build'
  }
];

gulp.task('copy:react:files', function() {
	var streams = [];
	filesToCopy.forEach(function(file) {
		streams.push(gulp.src(file.src).pipe(gulp.dest(file.dest)));
	});
	return merge.apply(this, streams);
});

gulp.task('uglify:js', function() {
  return gulp.src(jsPaths)
    .pipe(uglify())
    .pipe(gulp.dest('static/build'));
});

gulp.task('build:js', function(callback) {
  webpack(Object.create(webpackConfig), function(err, stats) {
    if (err) {
      throw new gutil.PluginError('build:js', err);
    }
    gutil.log('[build:js]', stats.toString({colors: true, chunks: false}));
    callback();
  });
});

gulp.task('build:sass', function() {
  return gulp.src(sassPaths[0])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer({cascade: false}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/build'));
});

gulp.task('build:vendor:sass', function() {
  return gulp.src(sassPaths[1])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer({cascade: false}))
    .pipe(concat('bootstrap.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/build'));
});

gulp.task('watch:js', function() {
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
    ignore: ['static/*'],
    env: { 'PORT': '4040' }
  });
});

gulp.task('build', function(cb) {
  runSequence('copy:react:files', 'uglify:js', 'build:js', 'build:sass', 'build:vendor:sass',  cb);
});

gulp.task('dev', function(cb) {
  runSequence('copy:react:files', 'uglify:js', 'build:sass', 'build:vendor:sass', ['watch:js', 'watch:sass'], 'start', cb);
});
