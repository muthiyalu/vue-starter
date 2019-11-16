var gulp = require('gulp');

gulp.task('copy-modules', function (done) { 
  console.log('Copying Javascript and CSS modules!') ;

  jssources = [
    './node_modules/vue/dist/vue.esm.browser.min.js',
    './node_modules/vue-router/dist/vue-router.esm.browser.min.js',
    './node_modules/vuex/dist/vuex.esm.browser.min.js',
    './node_modules/vuetify/dist/vuetify.min.js',
  ]
  gulp.src( jssources ).pipe(gulp.dest('./public/javascripts/'));

  csssources = [
    './node_modules/vuetify/dist/vuetify.min.css',
    './node_modules/vuetify/dist/vuetify.css.map',
    './node_modules/@mdi/font/css/materialdesignicons.min.css',
    
  ]
  gulp.src( csssources ).pipe(gulp.dest('./public/stylesheets/'));

  fontsources = [
    './node_modules/@mdi/font/fonts/materialdesignicons-webfont.eot',
    './node_modules/@mdi/font/fonts/materialdesignicons-webfont.ttf',
    './node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff',
    './node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff2',

    
  ]

  gulp.src( fontsources ).pipe(gulp.dest('./public/fonts/'));

  done();
});
