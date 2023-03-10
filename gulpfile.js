const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

const root = './src';
const dist = './dist';

const publicImgFolder = '/public/img';
const publicCssFolder = '/public/css';
const publicSassFolder = '/public/scss';

const sassFolder = `${root}${publicSassFolder}`;
const imgFolder = `${root}${publicImgFolder}`;

const destinationCssFiles = `${dist}${publicCssFolder}`;
const destinationImgFiles = `${dist}${publicImgFolder}`;

const mainSassFile = `${root}/${publicSassFolder}/app.scss`;

const allImgFiles = `${imgFolder}/**/*`;
const allSassFiles = `${sassFolder}/**/*.scss`;

const imageminOpts = {
  optimizationLevel: 3,
};

const qualityOpts = {
  quality: 50,
};

const imageFormats = ['png', 'jpg'];
const validImages = `${imgFolder}/**/*.{${imageFormats.join(',')}}`;

function buildCss() {
  return src(mainSassFile)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(destinationCssFiles));
}

function optimizeImages() {
  return src(allImgFiles)
    .pipe(imagemin(imageminOpts))
    .pipe(dest(destinationImgFiles));
}

function buildImagesWebp() {
  return src(validImages)
    .pipe(webp(qualityOpts))
    .pipe(dest(destinationImgFiles));
}

function buildImagesAvif() {
  return src(validImages)
    .pipe(avif(qualityOpts))
    .pipe(dest(destinationImgFiles));
}

function dev() {
  watch(allSassFiles, buildCss);
}

exports.buildCss = buildCss;
exports.optimizeImages = optimizeImages;
exports.buildImagesWebp = buildImagesWebp;
exports.buildImagesAvif = buildImagesAvif;
exports.dev = dev;

exports.default = series(buildCss, dev);
