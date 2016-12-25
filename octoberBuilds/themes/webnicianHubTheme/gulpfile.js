/**
 * Created by Olaf Broms on 7/6/2016.
 */
var gulp         = require('gulp'),
    util        = require('gulp-util'),
    // plumber      = require('gulp-plumber'),
    // sourcemaps   = require('gulp-sourcemaps'),
    sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
    rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size'),
    w3cjs = require('gulp-w3cjs'),
    phplint = require('gulp-phplint'),
    phpunit = require('gulp-phpunit'),
    tar = require('gulp-tar'),
    gzip = require('gulp-gzip'),
    pump = require('pump');
    log = util.log,

    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;




gulp.task('browser-sync', ['sass'],  function() {
    browserSync({

        files: [ // Directories of the files, HTML/TXT/JS... etc
            'content/*.htm',
            'content/static-pages/*.htm',
            'content/placeholder/*.txt',
            'layouts/*.htm',
            'pages/*.htm',
            'partials/*.htm',
            'assets/styles/*.scss',
            'assets/js/*.js'
        ],
        open: 'external',
        host: 'webnician2.local',  //your localhost
        proxy: 'webnician2.local', //your localhost again
        port: '3000'



    });


    gulp.watch('assets/styles/*.scss', ['sass']); // Watches the sass function
   gulp.watch('assets/js/*.js', ['compress']); // Watches the javascript uglification function
    gulp.watch('assets/styles/css/*.css').on('change', reload); //watch css and reload browser
    gulp.watch('assets/js/prodjs/*.js').on('change', reload); //reload on javascript uglification


});

//this is the new task....target properly
gulp.task('sass', function () {
    gulp.src('assets/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(size())
        .pipe(gulp.dest('assets/styles/css/'))
        .on('end', function(){ util.log('Sass is now Compiled!!!!'); });

});


var jsFiles = 'assets/js/*.js',
    jsDest = 'assets/js/prodjs';

gulp.task('compress', function() {
    return gulp.src(jsFiles)
        .pipe(concat('combined.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('functions.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest))
   .on('end', function(){ util.log('Javascript is Uglified !!!!'); });
});

//zips and backs up entire project into the backups directory MUST BE RUN MANUALLY
gulp.task('gzip-tar', function () {
    gulp.src('../../../*')
        .pipe(tar('archive.tar'))
        .pipe(gzip())
        .pipe(size())
        .pipe(gulp.dest('backups'))
});

//html validator HAS NOT BEEN IMPLEMENTED YET
gulp.task('w3cjs', function () {
    gulp.src('')
        .pipe(w3cjs())
        .pipe(w3cjs.reporter());
});

    gulp.task('phplint', function () {
        return gulp.src(['../../plugins/olc-shortcodes/**/*.php'])
            .pipe(phplint())
        .pipe(phplint.reporter('fail'));
    });

    gulp.task('phpunit', function() {
        var options = {
            debug:             true,
            statusLine:        false,
            configurationFile: './test.xml'
        };
        gulp.src('phpunit.xml')
            .pipe(phpunit('./vendor/bin/phpunit', options));
    });

gulp.task('default', ['browser-sync']);
