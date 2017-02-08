var gulp = require('gulp');


gulp.task('task1', function(){
    console.log('Task 1 executing.. ')
})

gulp.task('copyhtml', function(){
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['copyhtml', 'task1'])
