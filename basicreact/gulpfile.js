var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task("default", function(){
     return gulp.src('components/*.jsx')
        .pipe(react())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task("task1", function(){
    return watch('components/*.jsx', { ignoreInitial: false })
        .pipe(react())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});
