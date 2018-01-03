//定义模块  载入 header和footer的文件
define(["jquery"],function($){
	$.ajax("html/include/header.html").done(function(data){
		$("header").html(data)
	})
	
	
	
	
	$("footer").load("html/include/footer.html")
})

