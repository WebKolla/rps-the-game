module.exports = function( grunt ) {
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks('grunt-postcss');


    grunt.initConfig({
        cssmin: {
            options: {
                advanced: false,
                aggressiveMerging: false
            },
            minify: {
                expand: true,
                cwd: 'src/css',
                src: ['*.css', '*.css'],
                dest: 'src/css'
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*.scss', 'src/js/**/*.js'],
                tasks: ['sass', 'cssmin']
            }
        },
        sass: {
            dist: {
                files: {
                    'src/css/styles.css': 'sass/**/styles.scss',
                    'src/css/ie.css': 'sass/**/ie.scss'
                }
            }
        }

    });

    grunt.registerTask("dist", ["sass", "cssmin"]);
    grunt.registerTask("default", ["dist"]);

};
