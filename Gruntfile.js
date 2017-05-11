module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			/* css文件压缩 */
			style: {
				src: 'css/style.css',
				dest: 'css/style.min.css' //压缩
			},
			print: {
				src: 'css/print.css',
				dest: 'css/print.min.css' //压缩
			},
		},
		uglify: {
			/* js 文件压缩 */
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'js/perfmatters.js',
				dest: 'js/perfmatters.min.js'
			}
	    },
	    imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //0 To 7.
                },
                files: [{
                    expand: true,
                    cwd: 'img/', //原图存放的文件夹
                    src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: 'img/' //优化后的图片覆盖旧图片
                }]
            }
        },
    });

	// 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	// Default task.
	grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin']);
};