const {src, dest, watch, parallel, series} = require("gulp");
const sass = require("gulp-sass");
const eslint = require("gulp-eslint");
const imagemin = require('gulp-imagemin');
const sync = require('browser-sync').create();
const reload = sync.reload;


function generateCSS(cb) {
	src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('dist/css'))
		.pipe(sync.stream());
	cb();
}

function generateImage(){
	return gulp
		.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

function runLinter(cb){
	return src(['**/*.js', '!node_modedules/**'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.on('end', function(){
			cb();
		});
}

function watchChanges(cb){
	watch('src/scss/**.scss', generateCSS);
	watch(['**/*.js', '!node_modedules/**'], parallel(runLinter));
	watch('src/images/*', generateImage);
}

function browserSync(cb){
	sync.init({
		server: {
			baseDir: './'
		}
	});
	watch('src/scss/**.scss', generateCSS);
	watch('src/images/*', generateImage);
	watch('*.html').on('change', reload);
}


exports.css = generateImage;
exports.image = generateCSS;
exports.lint = runLinter;
exports.watch = watchChanges;
exports.sync = browserSync;