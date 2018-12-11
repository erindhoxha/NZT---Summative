var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('css', function() {
    gulp.src([
        './css/main.css',
        './css/normalize.css'
    ])
    .pipe(concat('app.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
    gulp.src([
       './js/main.js',
       './js/data.js'
    ])
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))

});


gulp.task('default', ['css', 'scripts']);


