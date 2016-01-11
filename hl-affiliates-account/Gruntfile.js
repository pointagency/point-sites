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
		// uglify: {
		// 	js: {
		// 		files: {
		// 			'compiled/assets/js/site.min.js': [
		// 			'compiled/assets/js/site.js'
		// 			]
		// 		}
		// 	},
		// 	thirdParties: {
		// 		files: {
		// 			'compiled/assets/js/third-parties.min.js': [
		// 				'compiled/assets/js/third-parties.js'
		// 			]
		// 		}
		// 	},
		// 	homeMade: {
		// 		files: {
		// 			'compiled/assets/js/home-made.min.js': [
		// 				'compiled/assets/js/home-made.js'
		// 			]
		// 		}
		// 	}
		// },
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
			main: {
				files: [{
					expand: true,
					flatten: false,
					cwd: 'acontent/',
					src: ['**/*.*'],
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
		// sprite: {
		// 	all: {
		// 		src: ['assets/spritesheet/*.png'],
		// 		destImg: 'compiled/assets/images/spritesheet.png',
		// 		destCSS: 'assets/less/spritesheet.less',
		// 		algorithm: 'binary-tree',
		// 		padding: 2,
		// 		imgPath: "../images/spritesheet.png"
		// 	},
		// 	all2x: {
		// 		src: ['assets/spritesheet-2x/*.png'],
		// 		destImg: 'compiled/assets/images/spritesheet-2x.png',
		// 		destCSS: 'assets/less/spritesheet-2x.less',
		// 		algorithm: 'binary-tree',
		// 		padding: 2,
		// 		imgPath: "../images/spritesheet-2x.png"
		// 	}
		// },
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
			// sprite: {
			// 	files: ['assets/images/spritesheet/*.*'],
			// 	task: ['sprite','less','bless','imagemin'],
			// 	options: {
			// 		livereload: false
			// 	}
			// },
			js: {
				files: ['acontent/js/**/*.js'],
				tasks: ['copy'],
				options: {
					livereload: false
				}
			},
			template: {
				files: ['**/*.liquid'],
				tasks: ['newer:liquid','copy']
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
	

	grunt.registerTask('default', [ 'less','bless','newer:copy','newer:liquid', 'concurrent:all']);
	// grunt.registerTask('default', ['sprite', 'newer:less', 'newer:concat', 'uglify','compress', 'newer:liquid', 'bless','copy',  'concurrent:all']);
};


