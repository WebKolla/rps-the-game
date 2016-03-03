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
                tasks: ['sass', 'autoprefixer', 'cssmin']
            }
        },
        sass: {
            dist: {
                files: {
                    'src/css/styles.css': 'sass/**/styles.scss',
                    'src/css/ie.css': 'sass/**/ie.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Firefox >= 28', 'Android >= 2.3']})
                ]
            },
            multiple_files: [{
                expand: true,
                flatten: true,
                src: 'src/css/*.css', // -> src/css/file1.css, src/css/file2.css
                dest: 'dist/css/' // -> dest/css/file1.css, dest/css/file2.css
            }]
        }
    });

    grunt.registerTask("dist", ["sass", "postcss", "cssmin"]);
    grunt.registerTask("default", ["dist"]);

};
