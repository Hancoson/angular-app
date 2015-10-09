/**
 * Created by Guoxing.han on 15-3-26.
 */

module.exports = function (grunt) {
    var createFolderGlobs = require('../createFolderGlobs.js');
    grunt.config.set('watch', {
        main: {
            options: {
                livereload       : 35729,
                livereloadOnError: false,
                spawn            : false
            },
            files  : [createFolderGlobs([]), '!_SpecRunner.html', '!.grunt'],

            tasks  : []
            //all the tasks are run dynamically during the watch event handler
        },
        dist: {
            options: {
                livereload       : 35730,
                livereloadOnError: false,
                spawn            : false


            },

            files  : [createFolderGlobs([]), '!_SpecRunner.html', '!.grunt'],

            tasks  : []
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
