var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

var ts = require("gulp-typescript");

var stripCssComments = require('gulp-strip-css-comments');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('scss', function(){

  gulp.src([
    'src/app/*.scss',
    'src/app/**/*.scss'
  ])
  .pipe(stripCssComments('//', {preserve: false}))
  .pipe(concat('app.scss'))
  .pipe(cssMin())
  .pipe(gulp.dest('./scss'));

});

gulp.task('scripts', function(){
  gulp.src('./dist/**/*.js')

  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js'));
})


gulp.task('default', ['scss','scripts']);

