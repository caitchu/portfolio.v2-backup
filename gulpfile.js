// requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var concat = require("gulp-concat");
var autoprefixer = require('gulp-autoprefixer');

// configs
var paths = {
  sass: {
    src: './dev/styles/**/*.scss',
    dest: './public/styles'
  },
  scripts: {
    src: './dev/scripts/*.js',
    dest: './public/scripts'
  },
  html: {
    src: './*.html'
  }
};

// gulp tasks
gulp.task('sass', function(){
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function(){
  return gulp.src(paths.scripts.src)
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(reload({stream: true}));
})

gulp.task('html', function(){
  return gulp.src(paths.html.src)
    .pipe(reload({stream: true}));
})

// gulp testing
gulp.task('message', function(){
  console.log("It works!");
});

// gulp watch
gulp.task('watch:styles', function(){
  gulp.watch(paths.sass.src, gulp.series('sass'));
});

gulp.task('watch:scripts', function(){
  gulp.watch(paths.scripts.src, gulp.series('scripts'));
})

gulp.task('watch:html', function(){
  gulp.watch(paths.html.src, gulp.series('html'));
})

gulp.task('watch', gulp.series('sass', 
  gulp.parallel('watch:styles', 'watch:scripts', 'watch:html')
));

gulp.task('browser-sync', gulp.series(function(){
  browserSync.init({
    server:'.'
  })
}));

// gulp default task
gulp.task('default', gulp.series('sass', 
  gulp.parallel('browser-sync', 'message', 'watch')
));