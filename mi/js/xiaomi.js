window.onload = function(){

	//主导航    上面的
	for(let i=0;i<$('.navsili').length;i++){
		$('.navsili').get(i).onmouseenter=function(){
			$('.navnoneboxs').eq(i).css('display','block')
		}
		$('.navsili').get(i).onmouseleave=function(){
			$('.navnoneboxs').eq(i).css('display','none')
		}
	}


	//banner   left
	let alises = document.getElementsByClassName('banner-left');
	let alise = alises[0].getElementsByTagName('li');
	let nonealises = document.getElementsByClassName('none-alise');
	for(let i=0;i<alise.length;i++){
		alise[i].onmouseenter=function(){
			nonealises[i].style.display='block';
		}
		alise[i].onmouseleave=function(){
			nonealises[i].style.display='none';
		}
	}

//--------------------轮播图--------------------------------------------------------
	let datus = document.getElementsByClassName('banner-datu');
	let LBbox = document.getElementsByClassName('LBbox')[0];
	let LBPoint = LBbox.getElementsByTagName('li');
	let num = 0;
	let t;

	// //向前向后
	$('.dutuyoufuhao').click(function(){
	 	num++;
	 	if(num==datus.length){
	 		num=0;
	 	}
	 	for(let i = 0;i<$('.banner-datu').length;i++){
	 		$('.banner-datu').eq(i).css({'display':'none'});
	 		$('.LBbox > li').eq(i).css('background','')
	 	}
	 	$('.LBbox > li').eq(num).css('background','red');
	 	$('.banner-datu').eq(num).css({'display':'block'});
	})
	$('.dutuzuofuhao').click(function(){
	 	num--;
	 	if(num==-1){
	 		num=5;
	 	}
	 	for(let i = 0;i<$('.banner-datu').length;i++){
	 		$('.banner-datu').eq(i).css({'display':'none'});
	 		$('.LBbox > li').eq(i).css('background','')
	 	}
	 	$('.LBbox > li').eq(num).css('background','red');
	 	$('.banner-datu').eq(num).css({'display':'block'});
	})


	 for(let i=0;i<LBPoint.length;i++){
	 	$('.LBbox > li').get(i).onclick = function(){
	 		$('.banner-datu').css('display','none')
	 		$('.LBbox > li').eq(i).css('background','red')
	 		$('.banner-datu').get(i).style.display = 'block';
	 	}
	 	$('.LBbox > li').get(i).onmouseenter = function(){
	 		$(this).css('background','rgba(255,255,255,.5)');
	 	}
	 	$('.LBbox > li').get(i).onmouseleave = function(){
	 		$(this).css('background','rgba(0,0,0,0.5)');
	 	}
	 }
	 	

/* */


	//自动转播页面
	 t= setInterval (fn, 3000);
	 function fn(){
	 	if(num==$('.banner-datu').length){
	 		num=0;
	 	}
	 	for(let i = 0;i<$('.banner-datu').length;i++){
	 		$('.banner-datu').css('display','none')
	 		$('.LBbox > li').eq(i).css('background','')
	 	}
	 	$('.LBbox > li').eq(num).css('background','red')
	 	$('.banner-datu').eq(num).css('display','block')
	 	num++;
	 }

	//移入轮播停止
	$('.banner-datu').mousemove(function(){
		clearInterval(t)
	});
	//移出轮播继续
	$('.banner-datu').mouseleave(function(){
		t= setInterval (fn, 3000);
	});


	//小米明星单品
	$('.danpinxuanxiangkuang>button').eq(1).click(function(){
		// $('.DPall').css('transfrom','translate(-1240px)')
		$('.DPall').css('transform','translate(-1240px)')
	});
	$('.danpinxuanxiangkuang>button').eq(0).click(function(){
		$('.DPall').css('transform','translate(0)')
	});


	//内容  图书
    var num0=0
	$('.youbtn0').click(function(){
		if(num0==2){return}
		num0++;
		$('.alltushu').css('left',`${-296*num0}px`)
	})
	$('.zuobtn0').click(function(){
		if(num0==0){return}
		num0--;
		$('.alltushu').css('left',`${-296*num0}px`)
	})
  	
	
    var num1=0
	$('.youbtn').click(function(){
		if(num1==2){return}
		num1++;
		$('.MIall').css('left',`${-296*num1}px`)
	})
	$('.zuobtn').click(function(){
		if(num1==0){return}
		num1--;
		$('.MIall').css('left',`${-296*num1}px`)
	})
    var num2=0
	$('.youbtn2').click(function(){
		alert(1)
		if(num2==2){return}
		num2++;
		$('.gameall').css('left',`${-296*num2}px`)
	})
	$('.zuobtn2').click(function(){
		alert(1)
		
		if(num2==0){return}
		num2--;
		$('.gameall').css('left',`${-296*num2}px`)
	})
    var num3=0
	$('.youbtn3').click(function(){
		if(num3==2){return}
		num3++;
		$('.yyall').css('left',`${-296*num3}px`)
	})
	$('.zuobtn3').click(function(){
		if(num3==0){return}
		num3--;
		$('.yyall').css('left',`${-296*num3}px`)
	})

}