module.exports = function(config){
    config.set({

        basePath : './',

        files : [
            'ext-all.js',       // lib
            'bootstrap.js',
            'karma-app-test.js',
            'app/**/*.js',      // source
            'spec/**/*.js'      // test
        ],

        proxies: {
            '/': 'http://localhost:1841/ext-seed-app/'
        },

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome', 'Firefox', 'Safari'],

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-safari-launcher'
        ],

        reporters: ['progress']

    });
};
