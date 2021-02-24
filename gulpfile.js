const bump = require('gulp-bump');
const octo = require('@octopusdeploy/gulp-octo');
const gulp = require('gulp');

gulp.task('bump', function () {
  return gulp
    .src('./package.json')
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'));
});

gulp.task('publish', function () {
  return gulp
    .src(['build/*'])
    .pipe(octo.pack())
    .pipe(octo.push({ apiKey: process.env.octopusKey, host: 'https://linguaben.octopus.app' }));
});
