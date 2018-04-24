var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    clean =require("gulp-clean"),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    argv = require('minimist')(process.argv.slice(2)),
    gutil = require('gulp-util'),
    fs = require('fs'),
    eslint = require('gulp-eslint'),
    uglify=require('gulp-uglify'),
    gulpSequence = require('gulp-sequence'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngmin = require('gulp-ngmin'),
    stripDebug = require('gulp-strip-debug');

var devMode = (process.argv[2] ? true : false);
var paths = {
	  dev: 'dev/',
	  dist: 'dist/',
	  build: {
	    src: 'dev/js',
	    dist: 'dist/js'
	  },
	  libs: {
	    src: 'bower_components/',
      lib: 'dev/lib/'
	  },
	  less: {
	    src: 'dev/less',
	    dist: 'dist/css'
	  },
	  fonts: {
	    src: 'bower_components/bootstrap/fonts',
	    dist: 'dist/fonts'
	  },
	  clean: {
	    target: 'dist/'
	  }
};

var files = {
  dev: {
    include: [
      paths.build.src + '/main.js',
      paths.build.src + '/*/*.js',
    ],
    exclude: [
     
    ]
  },
  libs: {
    include: [
      paths.libs.src + 'jquery/dist/jquery.min.js',
      paths.libs.src + 'bootstrap/dist/js/bootstrap.min.js',
     	paths.libs.src + 'angular/angular.min.js',
      paths.libs.src + 'angular-ui-router/release/angular-ui-router.min.js',
      paths.libs.lib + 'pie-chart.js'
    ],
    exclude: [
      
    ]
  },
  outputFiles: {
    acc: 'function.js',
    libs: 'vendor.js'
  }
};

var libFiles = files['libs']['include'].concat(files['libs']['exclude']);
var devFiles = files['dev']['include'].concat(files['dev']['exclude']);

gulp.task('lint', function() {
  var doLint = (devMode ? true : false); 
  if ((argv['lint'] !== undefined) && (argv['lint'] === false)) {
    doLint = false; 
  }
  var lintFile;
  if (doLint) {
    var singleFile = argv['file'] || false;
    if (singleFile) {
      // check that file exists
      //lintFile = paths.build.src + '/' + singleFile + '.js';
      if (fs.existsSync(paths.build.src + '/' + singleFile + '.js')) {
        lintFile = paths.build.src + '/' + singleFile + '.js';
        console.log(lintFile)
      }

      if (lintFile) {
        gutil.log(
          'Linting single file:',
          gutil.colors.cyan(lintFile)
        );
      } else {
        return gutil.log(
          gutil.colors.red('Error!'),
          'A file matching',
          gutil.colors.cyan(singleFile + '.js'),
          'or',
          gutil.colors.cyan(singleFile + '.js'),
          'could not be found'
        );
      }
    } else {
      // gutil.log('Linting all files');
      lintFile = devFiles;
    }
    return gulp.src(lintFile)
      .pipe(eslint())
      .pipe(eslint.format());
  } else {
    gutil.log(
      gutil.colors.black.bgWhite('Skipping lint task (not recommended)')
    );
  }
});
gulp.task('jsLibCopy', function() {
  var dest = paths.build.dist;
  return gulp.src(libFiles)
    // .pipe(uglify())
    .pipe(concat(files['outputFiles']['libs']))
    .pipe(gulp.dest(dest));
});

gulp.task('jsDevCopy', ['lint'], function() {
  var dest = paths.build.dist;
  gulp.src(devFiles)
    // .pipe(ngAnnotate())
    // .pipe(ngmin({dynamic: false}))  
    // .pipe(stripDebug())  
    // .pipe(uglify())
    .pipe(concat(files['outputFiles']['acc']))
    .pipe(gulp.dest(dest));
});

gulp.task('css-build', function () {
   return gulp.src([paths.less.src + '/main.less'])
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.less.dist));
});


gulp.task("clean", function(){
    return gulp.src(paths.clean.target, {read: false})
        .pipe(clean({force: true}));
});


gulp.task('copy', function () {
    //images
    gulp.src(paths.dev + 'images/**/*')
        .pipe(gulp.dest(paths.dist + 'images'));
    // 插件依赖css
    
    //html
    gulp.src(paths.dev + 'html/**/*')
        .pipe(gulp.dest(paths.dist + 'html/'));

    // fonts
    gulp.src(paths.fonts.src + '/*')
        .pipe(gulp.dest(paths.fonts.dist));

    // fonts
    gulp.src(paths.libs.src + '/font-awesome-less/fonts/*')
        .pipe(gulp.dest(paths.fonts.dist));

    // json
    gulp.src(paths.dev + '/json/*')
        .pipe(gulp.dest(paths.dist + 'json'));
    
});

/* gulp */
gulp.task("build", function(cb) {
    gulpSequence('clean', 'css-build', 'jsLibCopy', 'jsDevCopy', 'copy')(cb);
});
/*watch */
gulp.task('watch', ['build'], function() {
  gulp.watch([
    paths.less.src + '/**/*.less',
  ], ['css-build']);

  gulp.watch([
    paths.libs.bower + '/**/*.js',
  ], ['jsLibCopy']);

  gulp.watch([
    paths.build.src + '/**/*.js'
  ], ['jsDevCopy']);

  gulp.watch([
    paths.dev + 'images/**/*'
  ], ['copy']);

  gulp.watch([
    paths.dev + 'html/**/*'
  ], ['copy']);

  gulp.watch([
    paths.dev + 'json/*'
  ], ['copy']);
  
});