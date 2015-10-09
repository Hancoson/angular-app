/**
 * Created by Guoxing.han on 15-3-26.
 */
module.exports = function (grunt) {
    var lessOptions={
        compress    : true,
        cleancss    : true,
        optimization: 2,
        sourceMap   : true
    };
    grunt.config.set('less', {

        ngapp:{
            options:lessOptions,
            files  : [{
                expand: true,
                src   : ['ngApp/**/*.less'],
                dest  : './',
                ext   : '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};