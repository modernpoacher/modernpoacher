import gulp from '@sequencemedia/gulp'

import {
  buildCssClean,
  buildCss,
  buildCssWatch
} from '#build/gulp'

gulp
  .task('build:css:clean', buildCssClean)

gulp
  .task('build:css', gulp.series('build:css:clean', buildCss))

gulp
  .task('build:css:watch', gulp.series('build:css', buildCssWatch))
