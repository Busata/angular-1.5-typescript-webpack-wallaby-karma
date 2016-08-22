var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config.js');
var babel = require('babel-core');

webpackConfig.module.loaders = webpackConfig.module.loaders.filter(function (l) {
    return l.loader !== 'ts-loader';
}).map(function(l) {
    if(l.name === 'scss') {
        l.loader = 'null-loader'; //node-sass conflict with wallaby, so not loading styles for wallaby tests.
    }
    return l;
});

webpackConfig.entryPatterns = ['src/index.js', 'beforeEachTest.js', 'src/**/*.spec.js'];

module.exports = function (wallaby) {
    return {
        debug: true,
        files: [
            {pattern: 'src/**/*.html', load: false},
            {pattern: 'src/**/*.scss', load: false},
            {pattern: 'beforeEachTest.ts', load: false},
            {pattern: 'src/**/*.ts', load: false},
            {pattern: 'src/**/*.spec.ts', ignore: true}
        ],
        tests: [
            {pattern: 'src/**/*.spec.ts', load: false}
        ],
        postprocessor: wallabyWebpack(webpackConfig),
        env: {
            type: 'browser',
            runner: require('phantomjs2-ext').path,
            params: {runner: '--web-security=false'}
        },
        testFramework: 'jasmine',
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    }
};
