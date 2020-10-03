import gulp from 'gulp'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import cssFromSass from './css-from-sass'

import handleWatchError from './handle-watch-error'

export const buildCssClean = () => (
  gulp.src('./pub/assets/css/*', { read: false })
    .pipe(vinylPaths((paths) => del(paths, { force: true })))
)

export const buildCss = gulp.series(cssFromSass)

export const buildCssWatch = () => (
  gulp.watch(
    [
      './src/sass/**/*'
    ],
    {
      name: 'build-css-watch',
      cwd: process.cwd()
    },
    gulp.series(buildCssClean, buildCss)
  )
    .on('error', handleWatchError)
)
