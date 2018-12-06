var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function(){
    gulp.src(['js/main.js','js/chat.js', 'js/nav-select.js', 'js/datepicker.js' ])
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('js/minifiedJS'));
});

gulp.task('watch', function() {
    var watcher = gulp.watch('js/*.js');
    watcher.on('change', function(event) {
        console.log('File: ' + event.path + ' was changed!');
    })
});

gulp.task('default', function() {
    console.log('Gulp is running correctly!');
});


