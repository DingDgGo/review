
	let sol =document.querySelector('.sol');
	let soli = document.querySelectorAll('.sol>li');
	//滚轮
	window.onwheel=function(){
		let st = document.body.scrollTop;
		if(st>500){
			sol.style.opacity="1";
			sol.style.width="40px";
			sol.style.transition="all ease 1s"
		}else{
			sol.style.opacity="0";
			sol.style.width="0px";
			sol.style.transition="all ease 1s"
		}
	}
	//点击返回
	
	$('.sol>li').eq(0).click(function(){
		let top = $(".part").eq(0).offset().top; 
		$("body,html").animate({scrollTop:(top-80)+"px"},500);
	})
	$('.sol>li').eq(1).click(function(){
		let top = $(".part").eq(1).offset().top; 
		$("body,html").animate({scrollTop:(top-80)+"px"},500);
	})
	$('.sol>li').eq(2).click(function(){
		let top = $(".part").eq(2).offset().top; 
		$("body,html").animate({scrollTop:(top-80)+"px"},500);
	})
	$('.sol>li').eq(3).click(function(){
		let top = $(".part").eq(0).offset().top; 
		$("body,html").animate({scrollTop:0},500);
	})
	
	$('.shangzhou').click(function(){
		$(this).css({"background":"#7BB7F7","color":"#fff","transition":"1s"});
		$('.benzhou').css({"background":"#fff","color":"#7BB7F7","transition":"1s"});
		$('.benzhou-ul').css({"opacity":0,"transition":"1s"});
		$('.shangzhou-ul').css({"opacity":1,"transition":"1s"});
	})
	$('.benzhou').click(function(){
		$(this).css({background:"#7BB7F7","color":"#fff",transition:"1s"});
		$('.shangzhou').css({background:"#fff","color":"#7BB7F7",transition:"1s"});
		$('.benzhou-ul').css({"opacity":1,"transition":"1s"})
		$('.shangzhou-ul').css({"opacity":0,"transition":"1s"});
	})
