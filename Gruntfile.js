module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {}
      }
    },
    watch: {
      html: {
        files: ['index.html'],
      },
      js: {
        files: ['js/**/*.js']
      },
      css: {
        files: ['css/**/*.css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
}
