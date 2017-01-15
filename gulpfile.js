var gulp  = require('gulp'),
minifyCSS = require('gulp-minify-css'),
concatCss = require('gulp-concat-css'),
concatJs = require('gulp-concat'),
notify = require('gulp-notify'),
addsrc = require('gulp-add-src'),
uglify = require('gulp-uglify');


gulp.task('default', function(){
    gulp.src('css/*.css')
    .pipe(concatCss("css/main.css"))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('build'))
    .pipe(notify("Ha finalizado la task css!"))

  gulp.src('js/jquery.js')
    .pipe(addsrc.append('js/bootstrap.min.js'))
    .pipe(addsrc.append('js/owl.carousel.min.js'))
    .pipe(addsrc.append('js/mousescroll.js'))
    .pipe(addsrc.append('js/smoothscroll.js'))
    .pipe(addsrc.append('js/jquery.prettyPhoto.js'))
    .pipe(addsrc.append('js/jquery.inview.min.js'))
    .pipe(addsrc.append('js/wow.min.js'))
    .pipe(addsrc.append('js/jquery.isotope.min.js'))
    .pipe(addsrc.append('js/main.js'))

  	.pipe(concatJs('js/main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
    .pipe(notify("Ha finalizado la task js!"));

});

