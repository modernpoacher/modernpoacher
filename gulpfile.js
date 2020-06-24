require('@babel/register')({
  ignore: [
    /node_modules/
  ]
})

const gulp = require('gulp')

const {
  buildCssClean,
  buildCss,
  buildCssWatch
} = require('./build/gulp')

gulp
  .task('build:css:clean', buildCssClean)

gulp
  .task('build:css', gulp.series('build:css:clean', buildCss))

gulp
  .task('build:css:watch', gulp.series('build:css', buildCssWatch))

gulp
  .task('build:clean', gulp.series('build:css:clean'))

gulp
  .task('build', gulp.series('build:css'))

gulp
  .task('build:watch', gulp.series('build:css:watch'))
