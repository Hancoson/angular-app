module.exports = function (grunt) {


    grunt.registerTask('build-ngapp', [

        //'jshint',
        'clean:ngapp-before',

        'less:ngapp',

        //img
        'imagemin:main',

        //'dom_munger',
        'dom_munger:ngapp',

        //'cssmin',
        'cssmin:main',

        'copy:main',
        'copy:ngapp',

        //'uglify',
        'uglify:ngapp-lib',
        'uglify:ngapp',
        'uglify:ngappCtrl',

        'htmlmin:main',
        'htmlmin:nghtml',
        'clean:after'
    ]);
};
