module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
        	{pattern: 'dist/js/vendor.js',watched: false},
        	{pattern: 'dist/js/function.js',watched: false},
            {pattern: 'bower_components/angular-mocks/angular-mocks.js',watched: false},
            'dev/autoTest/*.js',
            // {pattern: 'dev/js/**/*.js', watched: false},
            {pattern: 'dist/css/**/*.css', watched: false}
            // {pattern: 'dist/json/*.json', watched: true}

        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        coverageReporter: {
           type: 'html',
           dir: 'coverage'
        },
        preprocessors: {
            'dist/js/function.js': ['coverage'],
            'dev/js/**/*.js': ['coverage']
        },
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        junitReporter: {
            outputFile: '/test_out/unit.xml',
            suite: 'unit'
        }
    })
}