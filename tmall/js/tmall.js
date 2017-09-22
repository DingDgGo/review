	//自动转播页面
	let num=0;

	t= setInterval (fn, 3000);
	function fn(){
	 	num++;
	 	if(num==$('.datu>li').length){
	 		num=0;
	 	}
	 	for(let i = 0;i<$('.datu>li').length;i++){
	 		$('.datu>li').eq(i).css("display","none")
	 		$('.LBPoint>li').eq(i).css("background","")
	 	}
	 	$('.datu>li').eq(num).css("display","block")
	 	$('.LBPoint>li').eq(num).css("background","#fff")
		
	}
	//鼠标移入
	 $('.datu').mouseenter(function(){
	 	clearInterval(t)
	 })
	  $('.datu').mouseleave(function(){
	 	t = setInterval (fn, 3000);
	 })
 	//point
 	for(let i = 0;i<$('.LBPoint>li').length;i++){
	 	$('.LBPoint>li').eq(i).mouseenter(function(){
	 		$('.datu>li').css("display","none");
	 		$('.datu>li').eq(i).css("display","block");
	 		$('.LBPoint>li').css("background","#000")
	 		$('.LBPoint>li').eq(i).css("background","#fff")
	 		clearInterval(t)
	 	})
	 	$('.LBPoint>li').eq(i).mouseleave(function(){
	 		$('.LBPoint>li').eq(i).css("background","#000")
	 		t = setInterval (fn, 3000);
	 	})
 	}



	//head 滚动条
	document.onwheel =function(){
		let st = document.body.scrollTop;
		if(st>=700){
			$('.headTop').css("display","block");
		} else if(700>st>=0){
			$('.headTop').css("display","none");
		}	
	}
	//侧导航
	//sideNav
	$(".sideNav>li").eq(1).click(function(){	
		var top = $(".meilirenshengheng").offset().top;  
        $("body,html").animate({scrollTop:(top-50)+"px"},500);
        $('.headTop').css("display","block");
	})
	
	$(".sideNav>li").eq(2).click(function(){	
		var top = $(".chaodianziheng").offset().top;  
        $("body,html").animate({scrollTop:(top-50)+"px"},500); 
        $('.headTop').css("display","block");
	})
	$(".sideNav>li").eq(3).click(function(){	
		var top = $(".jujiaziheng").offset().top;  
        $("body,html").animate({scrollTop:(top-50)+"px"},500); 
        $('.headTop').css("display","block");
	})
	$(".sideNav>li").eq(4).click(function(){	
		var top = $(".aichaobeijing").offset().top;  
        $("body,html").animate({scrollTop:(top-50)+"px"},500); 
        $('.headTop').css("display","block");
	})
	$(".sideNav>li").eq(5).click(function(){	
		var top = $(".huwaibeijing").offset().top;  
        $("body,html").animate({scrollTop:(top-50)+"px"},500);
        $('.headTop').css("display","block");
	})
	$(".sideNav>li").eq(6).click(function(){	
		var top = $(".qinzibeijing").offset().top;  
        $("body,html").animate({scrollTop:(top-50)+"px"},500);
        $('.headTop').css("display","block");
	})
	$(".sideNav>li").eq(7).click(function(){	  
        $("body,html").animate({scrollTop:0+"px"},500);
        $('.headTop').css("display","none");
	})
	
//右
	$('.black-right>li').eq(8).click(function(){
		 $("body,html").animate({scrollTop:0+"px"},500);
	})
