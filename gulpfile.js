var gulp = require('gulp'),
   uglify = require('gulp-uglify');
   jshint = require('gulp-jshint');
   concat = require('gulp-concat');
    sass = require('gulp-sass');
   livereload = require('gulp-livereload'),
   watch = require('gulp-watch');
   localScreenshots = require('gulp-local-screenshots');
   imageop = require('gulp-image-optimization');

gulp.task('devjs', function () {
   gulp.src(['code/templates/tjbase/jsraw/*.js','!code/templates/tjbase/jsraw/*.min.js','!code/templates/tjbase/jsraw/*.min-3.3.7.js'])
	  .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('minified.js'))
      .pipe(gulp.dest('code/templates/tjbase/js'))
       //.pipe(livereload());
});
gulp.task('devcss', function() {
   return gulp.src('code/templates/tjbase/scss/mixed.min.scss')
	  .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('code/templates/tjbase/css'))
      .pipe(livereload());
});

gulp.task('devcss:watch', function () {
  gulp.watch('code/templates/tjbase/scss/**/*.scss', ['devcss']);
});


gulp.task('screens', function () {
  gulp.src('code/*.html')
  .pipe(localScreenshots({
    width: ['1600', '1000', '480', '320']
   }))
  .pipe(gulp.dest('code/templates/tjbase/screens'));
});
gulp.task('images', function(cb) {
    gulp.src(['code/imgraw/**/*.png','code/imgraw/**/*.jpg','code/imgraw/**/*.gif','code/imgraw/**/*.jpeg']).pipe(imageop({
       
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('code/images')).on('end', cb).on('error', cb);
});
