//----------------------------------------------------
// Gulp > npx gulp
//----------------------------------------------------

const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const packageImporter = require('node-sass-package-importer');

// Setting : Paths
const paths = {
  'src_scss': './src/scss/',
  'dist_css': './docs/css/'
}

// Setting : Sass Options
const sassOptions = {
  outputStyle: 'expanded',
  importer: packageImporter({
    extensions: ['.scss', '.css']
  })
}

// SCSS > CSS
gulp.task('scss', () => {
  return gulp.src(paths.src_scss + '**/*.scss')
    .pipe(sassGlob())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(['> 3% in JP', 'ie 11', 'android 4.4', 'last 1 versions']))
    .pipe(gcmq())
    .pipe(gulp.dest(paths.dist_css))
});

// CSS Minify
gulp.task('cssmin', () => {
  return gulp.src([paths.dist_css + '**/*.css', '!' + paths.dist_css + '**/*.min.css'])
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist_css))
});

// Watch
gulp.task('watch', () => {
  gulp.watch(paths.src_scss + '**/*.scss', gulp.series('scss', 'cssmin'));
});

gulp.task('default', gulp.parallel('watch'));