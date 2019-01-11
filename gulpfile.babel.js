import gulp from 'gulp';
import build from './gulp/tasks/build';
import html from './gulp/tasks/html';
import scripts from './gulp/tasks/scripts';

gulp.task('build', build);
gulp.task('scripts', scripts);
gulp.task('html', html);

gulp.task('default', gulp.series('scripts'));
