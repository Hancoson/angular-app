/**
 * Created by Guoxing.han on 15-3-26.
 */
module.exports = function (grunt) {

    grunt.config.set('clean',{
        'ngapp-before':{
            src: ['dist/ngApp', 'temp']
        },
        after : {
            src: ['temp']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
