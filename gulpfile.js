//----------------------------------------------------
// gulp: Setting
//----------------------------------------------------

const gulp = require("gulp")
const fs = require("fs")
const notify = require("gulp-notify")
const plumber = require("gulp-plumber")
const rename = require("gulp-rename")
const header = require("gulp-header")
const gulpif = require("gulp-if")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const gcmq = require("gulp-group-css-media-queries")
const cleanCSS = require("gulp-clean-css")
const browserSync = require("browser-sync")

// Read File
const files = {
  pkg: "./package.json",
  pjt: "./project.json"
}
const pkg = JSON.parse(fs.readFileSync(files.pkg))
const pjt = JSON.parse(fs.readFileSync(files.pjt))

// Banner
const banner = {
  basic: [
    "/*! <%= pjt.setting.name %> v<%= pkg.version %> <%= pkg.license %> by <%= pkg.author.name %> */",
    "",
    ""
  ].join("\n"),
  visible: pjt.setting.banner
}

// Paths
const paths = {
  src: {
    dir: pjt.setting.src + "/",
    scss: pjt.setting.src + "/scss/"
  },
  dist: {
    dir: pjt.setting.dist + "/",
    html: pjt.setting.dist + "/",
    css: pjt.setting.dist + "/css/"
  }
}

// Sass Options
const sassOptions = {
  outputStyle: "expanded",
  includePaths: "./node_modules/"
}

// Autoprefixer Options
const autoprefixerOptions = {
  grid: true
}

// PostCSS Options
const postcssOptions = [autoprefixer(autoprefixerOptions)]

// BrowserSync Options
const browserSyncOptions = {
  server: {
    baseDir: paths.dist.html
  },
  startPath: "index.html",
  open: false,
  notify: false
}

//----------------------------------------------------
// gulp: Task
//----------------------------------------------------

// SCSS > CSS
gulp.task("scss", () => {
  return gulp
    .src(paths.src.scss + "**/*.scss")
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssOptions))
    .pipe(gcmq())
    .pipe(gulpif(banner.visible, header(banner.basic, { pkg, pjt })))
    .pipe(gulp.dest(paths.dist.css))
})

// CSS Minify
gulp.task("cssmin", () => {
  return gulp
    .src([paths.dist.css + "**/*.css", "!" + paths.dist.css + "**/*.min.css"])
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.dist.css))
})

// Browser Sync
gulp.task("browser-sync", function(done) {
  browserSync.init(browserSyncOptions)
  done()
})

gulp.task("reload", function(done) {
  browserSync.reload()
  done()
})

// Watch
gulp.task("watch", () => {
  gulp.watch(paths.src_scss + "**/*.scss", gulp.series("scss", "cssmin"))
})

gulp.task("default", gulp.parallel("browser-sync", "watch"))

//----------------------------------------------------
// gulp: Build
//----------------------------------------------------

gulp.task("build", gulp.parallel(gulp.series("scss", "cssmin")))
