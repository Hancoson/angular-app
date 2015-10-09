/**
 * Created by Guoxing.han on 15-3-26.
 */
module.exports = function (grunt) {

    var options = {
        collapseBooleanAttributes    : true,
        collapseWhitespace           : true,
        removeAttributeQuotes        : true,
        removeComments               : true,
        removeEmptyAttributes        : true,
        removeScriptTypeAttributes   : true,
        removeStyleLinkTypeAttributes: true
    };
    grunt.config.set('htmlmin', {
        main  : {
            options: options,
            files  : {
                'dist/index.html' : 'dist/index.html',
                'dist/404.html': 'dist/404.html'
            }
        },
        nghtml: {
            options: options,
            files  : [{
                expand: true,
                src   : ['ngApp/**/*.html'],
                dest  : 'dist/',
                ext   : '.html'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
