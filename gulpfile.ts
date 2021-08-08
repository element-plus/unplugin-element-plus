import gulp from 'gulp'
import ts from 'gulp-typescript'

export const distFolder = './dist'
const tsProject = ts.createProject('tsconfig.json')

function compile() {
  return gulp
    .src(['./src/*.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest(distFolder))
}

/**
 * copy pkg.json
 */

export const build = gulp.series(compile)

export default build
