/**
 * Created by Guoxing.han on 15-3-26.
 */
module.exports = function (grunt) {

	grunt.config.set('cssmin', {
		options: {
			//美化代码
			beautify: {
				//中文ascii化，非常有用！防止中文乱码的神配置
				ascii_only: true
			}
		},
		//main
		main: {
		    src : [
		        'src/styles/*.css'

		    ],
		    dest: 'dist/src/styles/common.min.css'
		}


	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
