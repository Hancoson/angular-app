/**
 * Created by Guoxing.han on 15-3-26.
 */
module.exports = function (grunt) {

    grunt.config.set('copy', {
        main  : {
            files: [
                {
                    src   : ['favicon.ico','404.html','src/img/loading.gif'],
                    dest  : 'dist/',
                    fulter: 'isFile'
                },
                {
                    src    : ['bower_components/jquery/dist/jquery.min.map'], dest: 'dist/ngApp/src', filter: 'isFile',
                    flatten: true,
                    expand : true
                },
                {
                    src   : ['bower_components/**/*.js', 'bower_components/**/*.map'],
                    dest  : 'dist/',
                    filter: 'isFile',
                    expand: true
                }
            ]
        },
        ngapp:{
            files: [
                {
                    src    : ['ngApp/**','!ngApp/**/*.less'], dest: 'dist/', filter: 'isFile',
                    expand : true
                },
                {
                    src    : ['bower_components/angular-resource/*.map'], dest: 'dist/ngApp/src', filter: 'isFile',
                    flatten: true,
                    expand : true
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
