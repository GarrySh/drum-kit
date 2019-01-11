import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

import { plumberConfig } from '../config';
import webpackConfig from '../../webpack.config.babel';

const scripts = () =>
  gulp
    .src(['*.js', '!_*.js'], { cwd: 'app/scripts' })
    .pipe(plumber(plumberConfig))
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('dist/assets/javascripts'));

export default scripts;
