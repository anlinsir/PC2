//定义模块  载入 header和footer的文件
define(["jquery","cookie"],function($){
	$.ajax("html/include/header.html").done(function(data){
		$("header").html(data)
	}).done(function(){
		var user = $.cookie("loginuser")
		if(user){
			$(".loginuser").html("<a href='/PC/src/html/car.html'>"+ user +"</a>")
			$(".register").hide()
		}
	})
	
	
	
	
	$("footer").load("html/include/footer.html")
})

