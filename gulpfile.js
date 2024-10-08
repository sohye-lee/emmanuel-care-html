 
 
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

 
const pkg = require('./package.json');
const build_pipeline_version = pkg.version;


// Master scss files here
function scss() {
   return gulp.src(['source/_*.scss', 'source/*.scss', '!source/_*.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 2 versions'],
         cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('build'));
}
 

function displayMessage() {
   console.log('\n\nBuild Pipeline v' + build_pipeline_version);
   console.log(`################################################
`);
}


// Watch for JS and CSS changes
function watch() {
   displayMessage();
   gulp.watch('source/**/*.scss', scss);
 }

 
exports.default = watch;
