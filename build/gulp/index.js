import 'dotenv/config'

import gulp from 'gulp'
import debug from 'gulp-debug'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import handleWatchError from './handle-watch-error'

import cssFromSass from './build/css-from-sass'

const CWD = process.cwd()

export const buildCssClean = () => (
  gulp.src('./pub/assets/css/*', { read: false })
    .pipe(vinylPaths((paths) => del(paths, { force: true })))
)

export const buildCss = gulp.series(cssFromSass)

export const buildCssWatch = () => (
  gulp.watch('./src/sass/**/*', { name: 'build-css-watch', cwd: CWD }, gulp.series(buildCssClean, buildCss))
    .on('error', handleWatchError)
)
