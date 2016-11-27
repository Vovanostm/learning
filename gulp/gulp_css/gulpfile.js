'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const remember = require('gulp-remember');
const cached = require('gulp-cached');
const gulpIf = require('gulp-if');
const del = require('del');
const pug = require('gulp-pug');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('hello', function () {
    console.log('Hello');

})

gulp.task('styles', function () {
    return gulp.src('src/styles/**/main.styl', {base: "src/styles"})
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(debug({title: 'src'}))
        .pipe(stylus())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(debug({title: 'stylus'}))
        .pipe(cached('styles'))
        .pipe(autoprefixer())
        .pipe(debug({title: 'autoprefixer'}))
        .pipe(gulp.dest('public'));
    //вместо cached можно remember

});

gulp.task('clean', function () {
    return del('public');

});

gulp.task('assets', function () {
    return gulp.src('src/assets/**/*.*', {since: gulp.lastRun('assets')})
        .pipe(newer('public'))
        .pipe(debug({title: 'assets'}))
        .pipe(gulp.dest('public'))

});

gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'assets')));

gulp.task('watch', function () {
        gulp.watch('src/styles/**/*.*', gulp.series('styles')).on('unlink', function (filepath) {
        remember.forget('styles', path.resolve(filepath))
        delete cached.cashes.styles[path.resolve(filepath)];
    });
    gulp.watch('src/assets/**/*.*', gulp.series('assets'));
});

gulp.task('comp_pug', function () {
    return gulp.src('src/pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('public'))

})

gulp.task('dev', gulp.series('build', 'watch'));

