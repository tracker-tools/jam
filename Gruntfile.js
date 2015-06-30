'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
        paths: ['less/lib/bootstrap/less/']
      },
      development: {
        files: [{
          src: ['less/index.less'],
          dest: 'css/jam.css'
        }]
       }
    },
    cssmin: {
      combine: {
        files: {
          'css/jam.min.css': 'css/jam.css'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['less']);

};
