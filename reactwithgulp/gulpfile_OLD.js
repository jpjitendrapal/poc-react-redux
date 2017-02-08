const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const react = require('gulp-react');
 
gulp.task('default', () => {
    return gulp.src('src/**')
        .pipe(babel({
            presets: ['react']
        }))
        // .pipe(react())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist'));
});