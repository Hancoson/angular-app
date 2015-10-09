/**
 * Created by Guoxing.han on 15-3-26.
 * ºÏ²¢js
 */
module.exports = function (grunt) {

    grunt.config.set('concat', {
        main: {
            //src : [
            //    //'<%= dom_munger.data.appjs %>',
            //    //'<%= ngtemplates.main.dest %>',
            //    'bower_components/avalon/min/avalon.min.js'],
            //dest: 'dist/ngApp/lib.full.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
