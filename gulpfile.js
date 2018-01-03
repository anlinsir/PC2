var gulp = require("gulp"),
	
	livere =require("gulp-livereload"),
	sass = require("gulp-sass")
	

gulp.task("sass", function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest("dist/css/"))
		.pipe(livereload());
});

gulp.task("watch", function(){
	livereload.listen();
	gulp.watch("sass/*.scss", ["sass"]);
});


