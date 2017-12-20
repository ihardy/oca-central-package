let gulp = require('gulp')
let concat = require('gulp-concat')
let exec = require('child_process').exec

gulp.task('copy-deps', function() {
  return gulp.src('node_modules/primo-explore*/dist/*.js')
    .pipe(concat('modules.js'))
    .pipe(gulp.dest('src/js'))
})

gulp.task('build', ['copy-deps'], function() {
  return gulp.src(['src/js/bootstrap.js', 'src/js/config.js', 'src/js/modules.js'])
    .pipe(concat('custom.js'))
    .pipe(gulp.dest('src/js'))
})

gulp.task('refresh', function() {
  return exec("browser-sync reload -p 8003")
})

gulp.task('watch-custom', function() {
  return gulp.watch('src/js/custom.js', ['refresh'])
})

gulp.task('watch', function() {
  return gulp.watch(['src/js/*.js', '!src/js/custom.js', 'package.json'], ['build'])
})

gulp.task('default', ['watch', 'watch-custom'])
