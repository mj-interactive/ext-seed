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

        browsers : [
            'Chrome',
            // 'Chrome_without_security',  
            // 'Firefox', 
            // 'Safari', 
            // 'PhantomJS', 
        ],

        customLaunchers: {
            'Chrome_without_security': {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-phantomjs-launcher'
        ],

        reporters: ['progress']

    });
};
