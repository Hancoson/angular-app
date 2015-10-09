/**
 * Created by Guoxing.han on 15-3-26.
 * js min
 */
module.exports = function (grunt) {
    grunt.config.set('uglify', {

        //ngapp
        'ngapp-lib': {
            src : [
                'bower_components/angular/angular.min.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/oclazyload/dist/ocLazyLoad.min.js'
            ],
            dest: 'dist/ngApp/src/ngapp-lib.min.js'
        },

        ngapp    : {
            options: {
                mangle: false,
                footer: '\n//<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> --ngapp.app'
            },
            src    : ['ngApp/ngApp.js'],
            dest   : 'dist/ngApp/src/ngapp.min.js'
        },
        ngappCtrl: {
            files: [{
                expand: true,
                src   : ['ngApp/partial/**/*.js'],
                dest  : 'dist',
                ext   : '.js'
            }]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');

};