var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var compass     = require('gulp-compass');
var minifyCSS   = require('gulp-minify-css');
var htmlreplace = require('gulp-html-replace');
 
var src = {
    scss: 'app/scss/**/*.scss',
    scssDir: 'app/scss',
    cssDev:  'app/css',
    cssBuild:  'app/dist/css',
    html: 'app/index.html',
    jsBuild:  'app/dist/js/',
    jsFiles: [
    'app/js/angular.js',
    'app/js/app.js'
    ]
};

// Static Server + watching scss/html files
gulp.task('serve', ['compass-dev'], function() {
    browserSync({
        server: './app'
    });

    gulp.watch(src.scss, ['compass-dev']);
    gulp.watch(src.html).on('change', reload);
});

gulp.task('compass-dev', function() {
    gulp.src(src.scss)
        .pipe(compass({
            sass: src.scssDir,
            css: src.cssDev,
            comments: true
        }))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest(src.cssDev))
        .pipe(reload({stream: true}));
});

gulp.task('compass', function() {
    gulp.src(src.scss)
        .pipe(compass({
            sass: src.scssDir,
            css: src.cssBuild
        }))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(minifyCSS())
        .pipe(gulp.dest(src.cssBuild))
        .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
    gulp.src(src.jsFiles)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(src.jsBuild));
});

gulp.task('copy', function() {
    gulp.src(src.html)
    .pipe(htmlreplace({
        'js': 'js/app.js'
    }))
    .pipe(gulp.dest('app/dist/'));
});

gulp.task('build', ['scripts', 'copy', 'compass']);
gulp.task('default', ['serve']);