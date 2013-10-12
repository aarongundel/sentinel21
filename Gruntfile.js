module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('moveFile', "moves the 'files' file to the templates.js file", function(){
        if(grunt.file.exists('files')) {
            grunt.file.copy('files', 'public/javascripts/templates.js');
            grunt.file.delete('files');
        }
    });

    grunt.initConfig({
        watch: {
            emTemplates: {
                files: './public/templates/**/*.hbs',
                tasks: ['emberTemplates','moveFile']
            }
        },
        emberTemplates: {
            options: {
                templateBasePath: /public\/templates\//
            },
            files: 'public/templates/**/*.hbs',
            tasks: ['emberTemplates']
        },
        uglify: {
            mainJS: {
                options: {
                    mangle: true
                },
                files: {
                    "public/dist/main.js" : ['./public/javascripts/*.js']
                }
            }
        }
    });
}