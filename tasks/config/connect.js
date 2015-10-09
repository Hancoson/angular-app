/**
 * Created by Guoxing.han on 15-3-26.
 * Ԥ����������
 */
module.exports = function(grunt) {

    grunt.config.set('connect', {
        main: {
            options: {
                hostname: '0.0.0.0',
                port    : 9002,
                base    : 'dist/'
            }
        },
        dev : {
            options: {
                hostname: '0.0.0.0',
                port    : 9001
                //base:'dist/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
