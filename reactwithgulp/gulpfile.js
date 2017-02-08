var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream')

gulp.task('default', function() {
    var bundler = watchify(browserify({
        entries: ['./srces6/App.jsx'],
        // transform: [reactify],
        transform: [["babelify", {presets: ["react", "es2015"], plugins: ["transform-es2015-classes","react-html-attrs"]} ]],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./dist'));
    };
    build();
    bundler.on('update', build);
});