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
            'beforeEachTest.ts': ['webpack','sourcemap'],
            'src/**/*.spec.ts': ['webpack','sourcemap'],
            'src/index.ts': ['webpack','sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: false
        }
    });
};
