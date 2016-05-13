module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        ////output converted scss as css (default)
        sass: {
            build: {
                options: {
                    style: 'expanded'
                },                
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['app/sass/*.scss'],
                    dest: 'app/css/',
                    ext: '.css'
                }]
            }
        },
        ////////NOT YET UPDATED FOR HELP DOCS////////
        ////helper for copying files to dist folders (dist)
        copy: {
            css: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['app/course/<%= pkg.currentCourse %>/css/*.css'],
                    dest: 'dist/course/<%= pkg.currentCourse %>/css/'
                }],
            },
            img: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['app/course/<%= pkg.currentCourse %>/img/*.{png,jpg,gif,svg}'],
                    dest: 'dist/course/<%= pkg.currentCourse %>/img/'
                }]
            }
        },

        ////css optimizations (dist)
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({browsers: ['last 3 versions', 'Explorer >= 9', 'Firefox >= 22', 'Chrome >= 21', 'Safari >= 6']}), // add/remove browser prefixes
                    require('css-mqpacker')({autoprefixer: false, zindex: false}), // combine identical media queries (skipping autoprefixer as included above for addition as well as removal, skipping zindex in case JS relies on z-index values)
                    require('cssnano')() //minify and other optimizations
                ]
            },
            dist: {
                src: 'app/css/*.css'
            }
        },

        ////create index.html file for course (default)
        codekit: {
            build: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['app/kit/*.kit'],
                    dest: 'app/',
                    ext: '.html'
                }]
            },
        },
        ////////NOT YET UPDATED FOR HELP DOCS////////
        ////make minified copy in dist folder
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['app/course/<%= pkg.currentCourse %>/*.html'],
                    dest: 'dist/course/<%= pkg.currentCourse %>'
                }]
            }
        },

        //--Images--//
        ////output losslessly compressed images from generic folder to each course
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    src: ['app/img/**/*.{png,jpg,gif,svg}'],
                    flatten: true,
                    dest: 'dist/img/'
                }]
            }

        },

        //--Server--//
        ////run a local server to test development
        connect: {
            build: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: 'app'
                }
            },
            dist: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: 'dist'
                }
            },
        },

        //--Watch--//
        watch: {
            css: {
                files: ['app/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['app/**/*.kit'],
                tasks: ['codekit'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        clean: {
            dist: ['dist/']
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-codekit');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-newer');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
        'sass',
        'codekit',
        'connect:build',
    ]);

};