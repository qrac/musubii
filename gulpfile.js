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
const imagemin = require('gulp-imagemin');
const packageImporter = require('node-sass-package-importer');

// Setting : Paths
const paths = {
  'src_scss': './src/scss/',
  'src_img': './src/img/',
  'dist_css': './docs/css/',
  'out_css': './docs/demo/.vuepress/public/css/',
  'out_img': './docs/demo/.vuepress/public/img/'
}

// Setting : Sass Options
const sassOptions = {
  outputStyle: 'expanded'
}

// Sass > CSS
gulp.task('scss', () => {
  return gulp.src(paths.src_scss + '**/*.scss')
    .pipe(sassGlob())
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass({
        importer: packageImporter({
          extensions: ['.scss', '.css']
        })
      }))
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

// CSS Copy
gulp.task('csscopy', () => {
  return gulp.src([paths.dist_css + '**/*.css'])
    .pipe(gulp.dest(paths.out_css));
});

// Image Optimize
gulp.task('imagemin', () => {
  return gulp.src(paths.src_img + '*')
    .pipe(imagemin())
    .pipe(gulp.dest(paths.out_img))
})

// Watch
gulp.task('watch', () => {
  gulp.watch(paths.src_scss + '**/*.scss', gulp.series('scss', 'cssmin', 'csscopy'));
  gulp.watch(paths.src_img + '*', gulp.series('imagemin'));
});

gulp.task('default', gulp.parallel('watch'));