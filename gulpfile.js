var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default',function(){
    console.log("horaay  gulp task")
});

gulp.task('html',function(){
    console.log("abc");
});

gulp.task('styles',function(){
    gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest(''))
})
gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    })
});

watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
})