/**
 * Created by Guoxing.han on 2015-12-30.
 */
'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');


//dev 环境
gulp.task('connect.dev', function() {
    connect.server({
        port: 7001
    });
});

//发布 环境
gulp.task('connect.build', function() {
    connect.server({
        port: 7002
    });
});

gulp.task('dev', ['connect.dev']);