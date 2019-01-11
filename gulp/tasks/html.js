import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';

import { plumberConfig } from '../config';

const pages = () =>
  gulp
    .src(['**/*.pug'], { cwd: 'app/pages' })
    .pipe(plumber(plumberConfig))
    .pipe(pug({}))
    .pipe(gulp.dest('dist'));

export default pages;
