module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    var buildConfig = {
        pkg: grunt.file.readJSON("package.json")
    };
    buildConfig = grunt.util.extend(buildConfig, require('./grunt/variables.js'));
    var taskConfig = require('load-grunt-configs')(grunt, buildConfig);

    grunt.initConfig(grunt.util.extend(taskConfig, buildConfig));

    grunt.registerTask('build', [
        'clean'
    ]);
};
