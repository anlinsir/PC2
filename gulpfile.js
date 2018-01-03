var gulp = require("gulp"),
	
	sass = require("gulp-sass"),
	livereload = require("gulp-livereload")
	
	

gulp.task("sass",function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("dist/sass"))
		.pipe(livereload())
	
})

gulp.task("watch",function(){
	
	livereload.listen()
	
	gulp.watch("src/sass/*.scss",["sass"])
	
})

