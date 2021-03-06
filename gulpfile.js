'use strict';

var gulp = require('gulp'),
    path = require('path'),
    swPrecache = require('sw-precache');

gulp.task('make-service-worker', function(callback) {
    var rootDir = './';

    swPrecache.write(path.join(rootDir, 'serviceworker.js'), {
            staticFileGlobs: [rootDir + '/**/*.{html,css,png,jpg,gif,ico}',
                rootDir + '/js/*.js',
                rootDir + '/node_modules/jquery/dist/jquery.js',
                rootDir + '/manifest.json'
            ],
            runtimeCaching: [{
                urlPattern: /http:\/\/localhost\/sw-cacheFirst\/php_actions\/\w{1,255}\.php/,
                handler: 'cacheFirst'
            }]
        },
        callback);

});