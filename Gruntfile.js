module.exports = function( grunt ) {
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks("grunt-contrib-cssmin");


    grunt.initConfig({
        copy: {
            js:{
                src: ['js/**/*.js'],
                dest: 'dist/js/'
            }
        },
        clean: {
            dist: {
                src: ["src/main/webapp/dist/"]
            }
        },
        cssmin: {
            options: {
                advanced: false,
                aggressiveMerging: false
            },
            minify: {
                expand: true,
                cwd: 'src/main/webapp/css/lv/',
                src: ['*.css', '*.css'],
                dest: 'src/main/webapp/css/lv'
            }
        },
        watch: {
            sass: {
                files: ['src/sass-rebrand/**/*.scss','src/main/webapp/WEB-INF/views/**/*.html', 'src/main/webapp/js/**/*.js'],
                tasks: ['autoprefixer', 'cssmin']
            }
        },

        autoprefixer: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Firefox >= 28', 'Android >= 2.3']
            },
            single_file: {
                src: 'src/main/webapp/css/lv/styles.css'
            }
        }
    });

    grunt.registerTask("dist", ["clean", "cssmin"]);
    grunt.registerTask("default", ["dist"]);

};
