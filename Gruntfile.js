module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'src/css',
		      src: ['*.css'],
		      dest: 'dist/css',
		      ext: '.min.css'
		    }]
		  }
		},
		uglify: {
			/* js 文件压缩 */
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				sourceMap: true,
			},
			build: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: '**/*.js',
					dest: 'dist/js',
					ext: '.min.js'
				}],
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
                    cwd: 'src/img/', //原图存放的文件夹
                    src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: 'dist/img/' //优化后的图片覆盖旧图片
                }]
            }
        },
    });

	// 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	// Default task.
	grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin']);
};