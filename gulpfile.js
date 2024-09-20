// JS Files to Combine

// const concatSharedJS = ['src/js/theme.js', 'src/js/theme/**/*.js'];
// const concatEditorJS = ['src/js/editor.js', 'src/js/editor/**/*.js'];
// const concatWPAdminJS = ['src/js/wp-admin.js', 'src/js/wp-admin/**/*.js'];


// const dontConcatTheseJS = ['src/js/editor.js'];


// Gulp dependencies
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');


// Get current version of Build Pipeline
const pkg = require('./package.json');
const build_pipeline_version = pkg.version;


// Add master scss files here
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


// Combine and uglify non-excluded JS files
function js_concat() {
   return gulp.src(concatSharedJS)
      .pipe(concat('theme.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/js'));
}


// Combine and uglify non-excluded JS files (EDITOR ONLY) 
function js_concat_editor() {
   return gulp.src(concatEditorJS)
     .pipe(concat('editor.js'))
     .pipe(uglify())
     .pipe(gulp.dest('assets/js'));
}


// Combine and uglify non-excluded JS files (WP-ADMIN ONLY) 
function js_concat_wp_admin() {
   return gulp.src(concatWPAdminJS)
     .pipe(concat('wp-admin.js'))
     .pipe(uglify())
     .pipe(gulp.dest('assets/js'));
}


// Uglify, but do not concat, below 
// function js_separated() {
//    return gulp.src(dontConcatTheseJS)
//      .pipe(uglify())
//      .pipe(gulp.dest('assets/js'));
// }


// This will make you code faster
function displayMessage() {
   console.log('\n\nBuild Pipeline v' + build_pipeline_version);
   console.log(`
██╗░░██╗░█████╗░██████╗░██████╗░██╗░░░██╗  ██████╗░███████╗██╗░░░██╗
██║░░██║██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝  ██╔══██╗██╔════╝██║░░░██║
███████║███████║██████╔╝██████╔╝░╚████╔╝░  ██║░░██║█████╗░░╚██╗░██╔╝
██╔══██║██╔══██║██╔═══╝░██╔═══╝░░░╚██╔╝░░  ██║░░██║██╔══╝░░░╚████╔╝░
██║░░██║██║░░██║██║░░░░░██║░░░░░░░░██║░░░  ██████╔╝███████╗░░╚██╔╝░░
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░░░░╚═╝░░░  ╚═════╝░╚══════╝░░░╚═╝░░░
`);
}


// Watch for JS and CSS changes
function watch() {
   displayMessage();
   gulp.watch('source/**/*.scss', scss);
   // gulp.watch(concatSharedJS, js_concat);
   // gulp.watch(concatEditorJS, js_concat_editor);
   // gulp.watch(concatWPAdminJS, js_concat_wp_admin);
 }


// Default action if "gulp" ran with no parameters
exports.default = watch;
