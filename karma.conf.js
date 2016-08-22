var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['progress'],
        port: 9876,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['PhantomJS2'],
        singleRun: false,
        autoWatchBatchDelay: 300,
        files: [
            'src/index.ts',
            'beforeEachTest.ts',
            'src/**/*.spec.ts',
            'src/**/*.html'
        ],

        preprocessors: {
            'beforeEachTest.ts': ['webpack'],
            'src/**/*.spec.ts': ['webpack'],
            'src/index.ts': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: false
        }
    });
};