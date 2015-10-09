/**
 * Created by Guoxing.han on 15-4-20.
 */
module.exports = function(grunt) {
    grunt.config.set('coffee', {
        //ngApp: {
        //    options: {
        //        sourceMap: true
        //    },
        //    expand: true,
        //    //flatten: true,
        //    sourceMap   : true,
        //    cwd: 'ngApp/',
        //    src: ['**/*.coffee'],
        //    dest: 'ngApp/',
        //    ext: '.js'
        //}
    });
    grunt.loadNpmTasks('grunt-contrib-coffee');

};