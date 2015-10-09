/*jslint node: true */
'use strict';

var pkg = require('./package.json');

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, bower_components, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function (fileTypePatterns) {
    fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
    var ignore = ['node_modules', 'bower_components', 'dist', 'temp'];
    var fs = require('fs');
    return fs.readdirSync(process.cwd())
        .map(function (file) {
            if (ignore.indexOf(file) !== -1 || file.indexOf('.') === 0 || !fs.lstatSync(file).isDirectory()) {
                return null;
            } else {
                return fileTypePatterns.map(function (pattern) {
                    return file + '/**/' + pattern;
                });
            }
        })
        .filter(function (patterns) {
            return patterns;
        })
        .concat(fileTypePatterns);
};

module.exports = function (grunt) {


    // Load the include-all library in order to require all of our grunt
    // configurations and task registrations dynamically.
    var includeAll;
    try {
        includeAll = require('include-all');
    } catch (e0) {
        try {
            includeAll = require('node_modules/include-all');
        }
        catch (e1) {
            console.error('Could not find `include-all` module.');
            console.error('Skipping grunt tasks...');
            console.error('To fix this, please run:');
            console.error('npm install include-all --save`');
            console.error();

            grunt.registerTask('default', []);
            return;
        }
    }


    /**
     * Loads Grunt configuration modules from the specified
     * relative path. These modules should export a function
     * that, when run, should either load/configure or register
     * a Grunt task.
     */
    function loadTasks(relPath) {
        return includeAll({
            dirname: require('path').resolve(__dirname, relPath),
            filter : /(.+)\.js$/
        }) || {};
    }

    /**
     * Invokes the function from a Grunt configuration module with
     * a single argument - the `grunt` object.
     */
    function invokeConfigFn(tasks) {
        for (var taskName in tasks) {
            if (tasks.hasOwnProperty(taskName)) {
                tasks[taskName](grunt);
            }
        }
    }


    // Load task functions
    var taskConfigurations = loadTasks('tasks/config'),
        registerDefinitions = loadTasks('tasks/register');

    // (ensure that a default task exists)
    if (!registerDefinitions.default) {
        registerDefinitions.default = function (grunt) {
            grunt.registerTask('default', []);
        };
    }

    // Run task functions to configure Grunt.
    invokeConfigFn(taskConfigurations);
    invokeConfigFn(registerDefinitions);

};