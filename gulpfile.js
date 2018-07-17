const gulp = require('gulp');
const postcss = require('gulp-postcss');
const htmlreplace = require('gulp-html-replace');
const htmlmin = require('gulp-htmlmin');
const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const size = require('gulp-size');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('index', [], function() {
    // This will use the CSS processors above to compile, compress and
    // inject the CSS into the HTML head.
    const processors = [
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('cssnano')({ autoprefixer: false }),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ];
    return gulp
      .src('./src/index.html')
      .pipe(
        htmlreplace({
          css: {
            src: gulp.src('./src/css/snake.css')
                  .pipe(postcss(processors)),
            tpl: '<style>%s</style>'
          },
        })
      )
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("build/cdn"));
});

gulp.task('polyfills', [], function() {
  return browserify('./src/js/polyfills.js')
    .bundle()
    .pipe(source('polyfills.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest('build/cdn'));
});

gulp.task('bundle', [ 'index' ], function() {
  const customOpts = {
    entries: [ './src/js/snake.js' ],
    debug: true,
    transform: [
      [ 'babelify', { presets: [ 'es2017' ] } ]
    ]
  };
  const opts = Object.assign({}, watchify.args, customOpts);
  return watchify(browserify(opts)).bundle()
  .on('error', function(err) {
    console.log(err.message);
    browserSync.notify(err.message, 3000);
    this.emit('end');
  })
  .pipe(plumber())
  .pipe(source('snake.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write('./'))
  .pipe(size())
  .pipe(gulp.dest('build/cdn'));
});

gulp.task('watch', [ 'bundle', 'polyfills' ], function() {
  const watcher = gulp.watch('./src/**/*', [ 'refresh' ]);
  watcher.on('change', function(event) {
    console.log(
      'File ' + event.path + ' was ' + event.type + ', running tasks...'
    );
  });
});

gulp.task('browser-sync', [ 'watch' ], function() {
  return browserSync({ server: { baseDir: 'build/cdn' } });
});

gulp.task('default', [ 'browser-sync' ]);

gulp.task('refresh', [ 'bundle' ], browserSync.reload);