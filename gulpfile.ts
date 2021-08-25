import gulp from 'gulp'
import ts from 'gulp-typescript'
import rename from 'gulp-rename'

export const distFolder = './dist'
const tsProject = ts.createProject('tsconfig.json')

function compile() {
  return gulp
    .src(['./src/*.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest(distFolder))
}

function compileModule() {
  return gulp
    .src(['./src/*.ts'])
    .pipe(ts.createProject('tsconfig.json', {
      module: 'ESNEXT',
    })())
    .pipe(gulp.dest('./es'))
}

function moveModule() {
  return gulp.src(['./es/index.js']).pipe(rename(function(path) {
    path.extname = '.mjs'
  })).pipe(gulp.dest(distFolder))
}

/**
 * copy pkg.json
 */

export const build = gulp.series(compile, compileModule, moveModule)

export default build
