module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: { //css文件压缩  
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
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'js/perfmatters.js',
				dest: 'js/perfmatters.min.js'
			}
	    }
	});


	// 加载包含 "uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	// Default task.
	grunt.registerTask('default', ['cssmin', 'uglify']);
};