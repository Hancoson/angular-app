/**
 * Created by Guoxing.han on 2015-10-9.
 */
module.exports = function (grunt) {

    grunt.config.set('imagemin', {
        main  : {
            options: {
                optimizationLevel: 3 //定义 PNG 图片优化水平
            },

            files: [{
                expand: true,
                src   : ['src/img/*.{png,jpg,gif,jpeg}', 'src/img/**/*.{png,jpg,gif,jpeg}'],
                dest  : 'dist'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
