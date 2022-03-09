
import htmlmin from 'gulp-htmlmin'

import postcss  from 'gulp-postcss'
import  cssnano from 'cssnano'   //para [] {}
import autoprefixer from 'autoprefixer'  //using objeto


import autoprefixeritem from 'gulp-autoprefixer' //para funcion" 
import  cssnano1 from 'gulp-cssnano'  //using funcion


import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'
import  concat from 'gulp-concat'


import clean from 'gulp-purgecss'

import pug from 'gulp-pug'

// const sass = require('gulp-sass')(require('sass'));

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

import coffee from 'gulp-coffee'


// cache bust
import cacheBust from 'gulp-cache-bust'


// optimización imagenes
import imagemin from 'gulp-imagemin'


// browser-sync

import {init as server, stream, reload} from 'browser-sync'


// plumber
import plumber from 'gulp-plumber'

// las variables constantes
const cssPlugins = [
    cssnano(),
    autoprefixer({
        browsers: ['last 199 versions'],
        cascade: false
    })
]


const production = false;

gulp.task('html-min',()=>{
    return gulp
    .src('./src/*.html')
        .pipe(plumber())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./public'))
})


// como funcion
gulp.task('styles1', () => {
    return gulp

      .src('./src/css/*.css')
      .pipe(plumber())
      .pipe(cssnano1())
      .pipe(concat('styles-min.css'))
      .pipe(autoprefixeritem({
        browsers: 'last 199 versions',
        cascade: false
    })) 
      .pipe(gulp.dest('./public/css'))
      .pipe(stream())
  })

//   como arreglo
gulp.task('styles', () => {
    return gulp
      .src('./src/css/*.css')
      .pipe(plumber())
      .pipe(concat('styles-min.css'))
      .pipe(postcss(cssPlugins))  
      .pipe(gulp.dest('./public/css'))
      .pipe(stream())
  })



gulp.task('babel',()=>{
    return gulp
    .src('./src/js/*.js')
    .pipe(plumber())
        .pipe(concat('scripts-min.js'))
        .pipe(babel({
            presets : ['@babel/env'] 
            
        }))
        .pipe(terser())
        .pipe(gulp.dest('./public/js'))
})


gulp.task('views', () => {
    return gulp
    .src('./src/views/pages/*.pug')
    .pipe(plumber())
    .pipe(
        pug({
            pretty: production ? false : true 
    })
    )
    .pipe(cacheBust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('sass', () => {
    return gulp
      .src('./src/scss/styles.scss')
      .pipe(plumber())
      .pipe(
          sass({
              outputStyle: 'compressed'
            })
            )
      .pipe(stream())
      .pipe(postcss(cssPlugins))
      .pipe(gulp.dest('./public/css'))
  })

gulp.task('clean', () => {
    return gulp
      .src('./public/css/styles.css')
      .pipe(plumber())
      .pipe(
        clean({
          content: ['./public/**/*.html']
        })
      )
      .pipe(gulp.dest('./public/css'));
  })

gulp.task('imgmin', () => {
    return gulp
      .src('./src/images/*')
      .pipe(plumber())
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 30, progressive: true }),
          imagemin.optipng({ optimizationLevel: 1 }),
          imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
        ])
      )
      .pipe(gulp.dest('./public/images'));
  })

gulp.task('default',()=>{

    server({
        server: './public'
    });
    //  En caso se use html y css puro
    // gulp.watch('./src/*.html',gulp.series('html-min')).on('change',reload);
    // gulp.watch('./src/css/*.css',gulp.series('styles'))

    gulp.watch('./src/views/**/*.pug',gulp.series('views')).on('change',reload);
    gulp.watch('./src/scss/**/*.scss',gulp.series('sass'));
    gulp.watch('./src/js/*.js',gulp.series('babel')).on('change',reload);
})


