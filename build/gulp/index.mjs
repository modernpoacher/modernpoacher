import gulp from '@sequencemedia/gulp'
import vinylPaths from 'vinyl-paths'
import {
  deleteAsync as del
} from 'del'

import cssFromSass from '#build/gulp/css-from-sass'
import handleWatchError from '#build/gulp/handle-watch-error'

export function buildCssClean () {
  return (
    gulp.src('./pub/assets/css/*', { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export const buildCss = gulp.series(cssFromSass)

export function buildCssWatch () {
  return (
    gulp.watch(
      './src/sass/**/*',
      {
        name: 'build-css-watch',
        cwd: process.cwd()
      },
      gulp.series(buildCssClean, buildCss)
    )
      .on('error', handleWatchError)
  )
}
