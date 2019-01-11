import gulp from 'gulp';

import html from './html';
import scripts from './scripts';

export default gulp.parallel(scripts, html);
