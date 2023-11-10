const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/styles"));
}

function comprimeJavaScript() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
}

function comprimeImagem() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function dizOi(callback) {
  console.log("Olá Gulp");
  callback();
}

exports.default = dizOi;
exports.sass = compilaSass;
exports.image = comprimeImagem;
exports.comprimejs = comprimeJavaScript;
