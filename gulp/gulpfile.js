/**
 * Created by Guoxing.han on 2015-12-30.
 */
'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    jshint=require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    cheerio = require('gulp-cheerio'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    cache = require('gulp-cache'), //图片缓存，只有图片替换了才压缩
    imagemin = require('gulp-imagemin'),

    removeLogs = require('gulp-removelogs'),//删除调试代码
    del = require('del');

//path
var path = {
    mainHtml: "*.html",
    dist    : 'dist',
    src     : 'src',
    files   : 'ngApp',
    pages   : 'ngApp/partial'
};


// HTML处理
gulp.task('html', function () {
    var options = {
        removeComments               : true,//清除HTML注释
        collapseWhitespace           : true,//压缩HTML
        collapseBooleanAttributes    : true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes        : true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes   : true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS                     : true,//压缩页面JS
        minifyCSS                    : true//压缩页面CSS
    };
    gulp.src(path.pages + '/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest(path.dist + '/' + path.pages))
    gulp.src(path.mainHtml)
        .pipe(htmlmin(options))
        .pipe(cheerio(function ($) {
            $('script').remove();
            //$('link').remove();
            $('body').append('<script src="src/lib/site-lib.js"></script>' +
                '<script src="ngApp/site-base.js"></script>');
            //$('head').append('<link rel="stylesheet" href="app.full.min.css">');
        }))
        .pipe(gulp.dest(path.dist + '/'))
});

//scripts
gulp.task('scripts', function () {
    //lib
    gulp.src([
            path.src + '/lib/angular/angular.min.js',
            path.src + '/lib/angular-ui-router/release/angular-ui-router.min.js',
            path.src + '/lib/angular-resource/angular-resource.min.js',
            path.src + '/lib/oclazyload/dist/oclazyload.min.js',
            path.src + '/lib/jquery/dist/jquery.min.js'
        ])
        .pipe(concat('site-lib.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist + '/' + path.src + '/lib'))
    //base
    gulp.src([
            path.files + '/ngapp.js',
            path.files + '/services/ngService.js'
        ])
        .pipe(concat('site-base.js'))
        .pipe(removeLogs())
        .pipe(uglify())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest(path.dist + '/' + path.files + '/'))

    //pages
    gulp.src([
            path.pages + '/*.js'
        ])
        .pipe(removeLogs())
        .pipe(uglify())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest(path.dist + '/' + path.pages))
});

// Styles-page
gulp.task('stylesPages', function () {
    var processors = {
        autoprefixer: autoprefixer({
            browsers: ['last 2 versions'],
            cascade : true, //是否美化属性值 默认：true
            remove  : true //是否去掉不必要的前缀 默认：true
        })
    };
    gulp.src(path.pages + '/*.css')
        .pipe(processors.autoprefixer)
        .pipe(minifycss())
        .pipe(gulp.dest(path.dist + '/' + path.pages ))

});

// Styles-common
gulp.task('stylesCommon', function () {
    var processors = {
        autoprefixer: autoprefixer({
            browsers: ['last 2 versions'],
            cascade : true, //是否美化属性值 默认：true
            remove  : true //是否去掉不必要的前缀 默认：true
        })
    };
    gulp.src(path.src + '/styles/reset.css')
        .pipe(processors.autoprefixer)
        .pipe(minifycss())
        .pipe(gulp.dest(path.dist + '/' + path.src + '/styles/'))

});

// Images
gulp.task('images', function () {
    return gulp.src(path.src + '/img/**')
        .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
        .pipe(gulp.dest(path.dist + '/' + path.src + '/img/'));
});

// Clean
gulp.task('clean', function () {
    return del(['dist']);
});


//dev 环境
gulp.task('connect.dev', function () {
    connect.server({
        port: 7001,
    });
});

//发布 环境
gulp.task('connect.build',['clean'], function () {
    connect.server({
        root: 'dist',
        port: 7002,
        //livereload: true
    });
});

gulp.task('dev', ['connect.dev']);

gulp.task('build', ['connect.build'], function () {
    gulp.start('html', 'scripts', 'stylesPages', 'stylesCommon','images');
});