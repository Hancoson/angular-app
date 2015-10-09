/**
 * Created by Guoxing.han on 15-3-26.
 */
module.exports = function (grunt) {
    grunt.registerTask('run-dev', [
        //'dom_munger:read',
        //'jshint',
        'connect:dev',
        'cssmin',
        'watch:main'
    ]);

    grunt.registerTask('run-dist', [
        //'dom_munger:read',
        //'jshint',
        'connect:main',
        //'cssmin',
        'watch:dist'
    ]);
};