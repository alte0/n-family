module.exports = function(grunt) {
  //загрузка всех tasks
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    sass: {
      options: {
          sourceMap: true
        },
      dist: {
        files: {
          // компилируем sass - куда:откуда
            'assets/css/style.css': 'template/scss/style.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer") ({
            browsesrs:
            [
            "last 1 versions",
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Opera versions",
            "last 2 Edge versions"
            ]
          }),
          require("css-mqpacker") ({
            sort: true
          })
        ]
      },
      //какой файл
      style: {src: "assets/css/*.css"}
    },

    //минифицируем css
    csso: {
      stylecompress: {
        options: {
          report: "gzip"
        },
        files: {
          "assets/css/style.min.css" : ["assets/css/style.css"]
        }
      }
    },

    //минифицируем изображения
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["assets/img/**/*.{png, jpg, gif}"]
        }]
      }
    },

    // следим за изменениями
    watch: {
      style: {
        // изменились sass файлы запускаем tasks
        files: ["template/scss/**/*.scss"],
        tasks: ["sass"]
        // tasks: ["sass", "postcss", "csso"]
      },
      pug: {
        files: ["template/*.pug"],
        tasks: ["pug"]
      },
      img: {
        files: ["template/img/*.*"],
        tasks: ["copy", "imagemin"]
      },
      rigger: {
        files: ["template/js/**/*.*"],
        tasks: ["rigger"]
      }
    },

    // копирование
    copy: {
      build: {
        files: [{
          expand: true,
          //makes all src relative to cwd (относительно какой папки брать())
          cwd: 'template/',
          src: [
          "fonts/**/*.*",
          "img/**",
          "video/**"
          // ,
          // "js/**"
          // ,
          ],
          //куда копировать
          dest: "assets"
        }]
      }
    },

    //удаляем папку перед копированием
    clean: {
      build: ["assets"]
    },


    // live-server local host
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    "assets/**/*.*"
                ]
            },
            options: {
                watchTask: true,
                server: "assets/.",
								directory: true
            }
        }
    },

    pug: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          expand: true,
          cwd: 'template/',
          src: ['*.pug'],
          dest: 'assets',
          ext: '.html'
        }
    },

    //concat js 
    rigger: {
      compile: {
        files: {
          'assets/js/main.js': ['template/js/main.js']
        }
      }
    },

    //сжимаем js 
      uglify: {
        my_target_js: {
          files: [{
              expand: true,
              cwd: 'assets/js',
              src: '**/*.js',
              dest: 'assets/js'
          }]
        }
      },

     sprite:{
      all: {
        src: 'template/sprites/*.png',
        dest: 'assets/img/sprite.png',
        destCss: 'template/scss/sprites.scss'
      }
    }


  });



    grunt.registerTask("serve", ["browserSync", "watch"]);
    grunt.registerTask("build", [
      "clean",
      "copy",
      "sass",
      "postcss",
      "csso",
      "imagemin",
      "pug",
      "rigger",
      "uglify",
      "sprite"
      ]);

};
