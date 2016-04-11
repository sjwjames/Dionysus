module.exports = function(grunt) {
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    dn_compress:{
      files:[{
        src:'<%= pkg.name%>/src/**/*.js',
        dest:'<%= pkg.name %>/dest/dionysus.min.js',
      }]
    }

  },
  jasmine:{
    src:'<%= pkg.name%>/src/**/*.js',
    spec:'<%= pkg.name%>/spec/**/*.spec.js',
    helper:'<%= pkg.name%>/helper/*.js'
  },
  jshint:{
    options:{
      "loopfunc":true
    },
    gruntfile:'Gruntfile.js',
    src:'<%= pkg.name%>/src/**/*.js',
    test:['<%= pkg.name%>/spec/**/*.js','<%= pkg.name%>/helper/*.js']
  },
  requirejs:{
    compile:{
      options:{
        baseUrl:'<%= pkg.name%>/',
        mainConfigFile:'<%= pkg.name%>/config.js',
        optimize: "uglify",
        uglify:{
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          dn_compress:{
            files:[{
              src:'<%= pkg.name%>/src/**/*.js',
              dest:'<%= pkg.name %>/dest/dionysus.min.js',
            }]
          }
        }
      }
    }
  },
  watch:{
    gruntfile:{
      files:'Gruntfile.js',
      tasks:['jshint:gruntfile']
    },
    src:{
      files:['<%= pkg.name%>/src/**/*.js'],
      tasks:['jshint:src','requirejs']
    },
    test:{
      files:['<%= pkg.name%>/spec/**/*.spec.js','<%= pkg.name%>/helper/*.js'],
      tasks:['jshint:test','jasmine']
    }
  }

});

grunt.loadNpmTasks("grunt-contrib-jasmine");
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-requirejs');

grunt.registerTask('default',"watch dionysus",'watch');

};
