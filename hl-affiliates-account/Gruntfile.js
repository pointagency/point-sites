module.exports = function(grunt) {
	"use strict";
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


	var compression = require('compression');

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		connect: {
			server: {
				options: {
					port: 9004,
					base: './compiled/',
					keepalive: true,
					hostname: '*',
					middleware: function(connect, options, middlewares) { 
						middlewares.unshift(compression()); 
						return middlewares; 
					}
				}
			}
		},
		less: {
			main: {
				files: {
					'compiled/acontent/css/post-login.css': [
						'acontent/less/post-login.less'
					]
				},
				options: {
					compress: true,
					sourceMap: true,
					sourceMapFilename: 'post-login.css.map',
					sourceMapURL: 'compiled/acontent/css/',
					sourceMapRootpath: '/'
				}
			}
		// ,
		// 	page: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'assets/less/page-specific/',
		// 			src: ['*.less'],
		// 			dest: 'compiled/assets/css/',
		// 			ext: '.css'
		// 		}
		// 		],
		// 		options: {
		// 			compress: true
		// 		}
		// 	}
		// },
		// concat : {
		// 	options: {
		// 		separator: grunt.util.linefeed + ';' + grunt.util.linefeed
		// 	},
		// 	js: {
		// 		src: [
		// 		'assets/js/site.base.js',
		// 		'assets/js/site-components/*.js'
		// 		],
		// 		dest: 'compiled/assets/js/site.js'
		// 	},
		// 	thirdPartiesJs: {
		// 		src: [
		// 			'../shared/js/modernizr-2.8.3.js',
		// 			'../shared/js/jquery-1.11.1.min.js',
		// 			'../shared/js/jquery-ui.min.js',
		// 			'../shared/js/jquery.placeholder.min.js',
		// 			'../shared/js/jquery.selectBoxIt.js',
		// 			'../shared/js/jquery.touchSwipe.min.js',
		// 			'../shared/js/jquery.icheck.min.js',
		// 			'../shared/js/jquery.validate.min.js',
		// 			'../shared/js/imagesloaded.pkgd.min.js',
		// 			'../shared/js/fastclick.js',
		// 			'../shared/js/selectivizr.js',
		// 			'../shared/js/velocity.min.js'
		// 		],
		// 		dest: 'compiled/assets/js/third-parties.js'
		// 	},
		// 	homeMade: {
		// 		src: [
		// 			'../shared/js/home-made/VerticalScrollToggler.js',
		// 			'../shared/js/home-made/FullScreenSlide.js',
		// 			'../shared/js/home-made/TypeWriter.js',
		// 			'../shared/js/home-made/ImageContainerFadeIn.js',
		// 			'../shared/js/home-made/Toggler.js',
		// 			'../shared/js/home-made/ClickScrollTo.js',
		// 			'../shared/js/home-made/Utils.js'
		// 		],
		// 		dest: 'compiled/assets/js/home-made.js'
		// 	}
		},
		bless: {
			main: {
				options: {
					cacheBuster: false,
					compress: true,
					force: true
				},
				files: {
					'compiled/acontent/css/post-login-split.css': 'compiled/acontent/css/post-login.css'
				}
			}
		},
		uglify: {
			thirdParties: {
				files: {
					'acontent/js/third-parties.min.js': [
						'acontent/js/third-parties/jquery.selectBoxIt.min.js',
						'acontent/js/third-parties/jquery.fine-uploader.min.js',
						'acontent/js/third-parties/cropper.min.js',
						'acontent/js/third-parties/jquery.dataTables.js',
						'acontent/js/third-parties/jstz-1.0.4.min.js',
						'acontent/js/third-parties/strings.js'
					]
				}
			}
		},
		liquid: {
			options: {
				includes: 'templates/includes'
			},
			pages: {
				files: [{
					cwd: 'templates/',
					expand: true,
					flatten: false,
					src: ['**/*.liquid', "!includes/**/*.liquid"],
					dest: 'compiled/',
					ext: '.html'
				}]
			}
		},
		copy: {
			bowerJS: {
				files: [
					{
						src: 'bower_components/jquery.selectBoxIt.js/src/javascripts/jquery.selectBoxIt.min.js',
						dest: 'acontent/js/third-parties/jquery.selectBoxIt.min.js'
					}
				]
			},
			bowerCSS: {
				files: [
					{
						src: 'bower_components/jquery.selectBoxIt.js/src/stylesheets/jquery.selectBoxIt.css',
						dest: 'acontent/less/third-parties/jquery.selectBoxIt.less'
					}
				]
			},
			main: {
				files: [{
					expand: true,
					flatten: false,
					cwd: 'acontent/',
					src: ['**/*.*','!**/*.less'],
					dest: 'compiled/acontent/'
				}]
			}
		},
		// compress: {
		// 	main: {
		// 		options: {
		// 			mode: 'gzip'
		// 		},
		// 		expand: true,
		// 		cwd: '/assets/js/',
		// 		src: ['**/*'],
		// 		dest: '/assets/js/'
		// 	}
		// },
		sprite: {
			all: {
				src: ['acontent/images/sprite-src/*.png'],
				destImg: 'compiled/acontent/images/a-spritesheet.png',
				destCSS: 'acontent/less/affiliate/aff-spritesheet.less',
				algorithm: 'binary-tree',
				padding: 2,
				imgPath: "../images/a-spritesheet.png"
			}
			// ,
			// all2x: {
			// 	src: ['assets/spritesheet-2x/*.png'],
			// 	destImg: 'compiled/assets/images/spritesheet-2x.png',
			// 	destCSS: 'assets/less/spritesheet-2x.less',
			// 	algorithm: 'binary-tree',
			// 	padding: 2,
			// 	imgPath: "../images/spritesheet-2x.png"
			// }
		},
		watch: {
			styles: {
				files: ['acontent/less/**/*.*'],
				tasks: ['less','bless'],
				options: {
					nospawn: false,
					livereload: false
				}
			},
			images: {
				files: ['acontent/images/*.*'],
				tasks: ['newer:copy'],
				options: {
					nospawn: false,
					livereload: false
				}
			},
			sprite: {
				files: ['acontent/images/sprite-src/*.*'],
				task: ['sprite','less','bless','imagemin'],
				options: {
					livereload: false
				}
			},
			js: {
				files: ['acontent/js/**/*.js'],
				tasks: ['uglify','copy'],
				options: {
					livereload: false
				}
			},
			template: {
				files: ['templates/**/*.liquid'],
				tasks: ['liquid','copy']
			}
		},
		concurrent: {
			all: {
				tasks: ['connect:server', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});
	

	grunt.registerTask('default', [ 'sprite','copy:bowerJS','copy:bowerCSS','uglify','less','bless','newer:copy:main','newer:liquid', 'concurrent:all']);
	// grunt.registerTask('default', ['sprite', 'newer:less', 'newer:concat', 'uglify','compress', 'newer:liquid', 'bless','copy',  'concurrent:all']);
};


