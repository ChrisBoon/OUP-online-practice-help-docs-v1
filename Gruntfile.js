module.exports = function(grunt) {
  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    "gh-pages": {
      options: {
        base: "dist"
      },
      src: ["**"]
    },

    //CSS
    ////BUILD TASK
    //////output converted scss as css (default)
    sass: {
      build: {
        options: {
          style: "expanded"
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["app/sass/*.scss"],
            dest: "app/css/",
            ext: ".css"
          }
        ]
      }
    },

    ////DIST TASK
    //////css optimizations
    postcss: {
      options: {
        map: false,
        processors: [
          require("autoprefixer")({
            browsers: [
              "last 3 versions",
              "Explorer >= 9",
              "Firefox >= 22",
              "Chrome >= 21",
              "Safari >= 6"
            ]
          }), // add/remove browser prefixes
          require("css-mqpacker")({ autoprefixer: false, zindex: false }), // combine identical media queries (skipping autoprefixer as included above for addition as well as removal, skipping zindex in case JS relies on z-index values)
          require("cssnano")() //minify and other optimizations
        ]
      },
      dist: {
        src: "dist/css/*.css"
      }
    },

    //HTML
    ////BUILD TASK
    //////create index.html file for course (default)
    codekit: {
      build: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ["app/kit/*.kit"],
            dest: "app/",
            ext: ".html"
          }
        ]
      }
    },

    ////DIST TASK
    //////make minified copy in dist folder
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,
            cwd: "app/",
            src: ["**/*.html"],
            dest: "dist/"
          }
        ]
      }
    },

    //JS
    ////BUILD TASK
    //////Check for errors
    jshint: {
      myFiles: ["app/js/controllers.js"]
    },
    ////DIST TASK
    //////TODO: add concat steps to reduce http requests
    //////uglify
    uglify: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "app/",
            src: "js/*.js",
            dest: "dist/"
          }
        ]
      }
    },

    //IMAGES
    ////DIST TASK
    //////output losslessly compressed images from generic folder to each course
    imagemin: {
      content: {
        files: [
          {
            expand: true,
            src: ["app/img/**/*.{png,jpg,gif,svg}"],
            flatten: true,
            dest: "dist/img/"
          }
        ]
      },
      ui: {
        files: [
          {
            expand: true,
            src: ["app/ui-img/**/*.{png,jpg,gif,svg}"],
            flatten: true,
            dest: "dist/ui-img/"
          }
        ]
      }
    },

    //JSON
    ////BUILD TASK
    jsonlint: {
      build: {
        src: ["app/json/*.json"],
        options: {
          formatter: "prose"
        }
      }
    },

    ////DIST TASK
    /////Minify JSON (After copying to dist)
    "json-minify": {
      build: {
        files: "dist/json/*.json"
      }
    },

    ////DIST TASK
    ////helper for copying files to dist folders - icons and json
    copy: {
      json: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ["app/json/*.json"],
            dest: "dist/json/"
          }
        ]
      },
      icons: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ["app/icons/*.{png,jpg,gif,svg}"],
            dest: "dist/icons/"
          }
        ]
      },
      css: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ["app/css/*.css"],
            dest: "dist/css/"
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ["app/js/libraries/*.js"],
            dest: "dist/js/libraries/"
          }
        ]
      }
    },

    //--Server--//
    ////run a local server to test development
    connect: {
      build: {
        options: {
          port: 9001,
          keepalive: true,
          base: "app"
        }
      },
      dist: {
        options: {
          port: 9001,
          keepalive: true,
          base: "dist"
        }
      }
    },

    //--Watch--//
    watch: {
      css: {
        files: ["app/**/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: ["app/**/*.kit"],
        tasks: ["codekit"],
        options: {
          spawn: false,
          livereload: true
        }
      },
      json: {
        files: ["app/json/*.json"],
        tasks: ["newer:jsonlint"],
        options: {
          livereload: true
        }
      },
      js: {
        files: ["app/js/*.js"],
        tasks: [],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    clean: {
      dist: ["dist/"]
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks("grunt-codekit");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-json-minify");
  grunt.loadNpmTasks("grunt-jsonlint");
  grunt.loadNpmTasks("grunt-gh-pages");

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask("default", ["sass", "newer:codekit", "connect:build"]);

  grunt.registerTask("dist", [
    "newer:copy",
    "postcss",
    "newer:htmlmin",
    "uglify",
    "json-minify",
    "newer:imagemin",
    "connect:dist"
  ]);
};
