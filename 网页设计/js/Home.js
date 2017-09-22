window.onload = function(){
	let hed = document.querySelector('header');
	let tit = document.querySelector('.title');
	let tli = tit.getElementsByTagName('li');
	let tas = tit.getElementsByTagName('a');
	let nonebox = document.querySelector('div.nonebox');
	
	let banner = document.querySelector('.banner');
	let bans = document.querySelectorAll('.banner>img');
	let banL = document.querySelector('.banner-left');
	let banR = document.querySelector('.banner-right')
	let num=0;
	
	$('.banner-right').click(function(){
		num++;
		if(num==$('.banner>img').length){
			num=0;
		}
	 	$('.banner>img').css({'display':'none'});
	 	$('.banner>img').eq(num).css({'display':'block'});
	})
	$('.banner-left').click(function(){
		if(num==-1){
			num=4;
		}
	 	$('.banner>img').css({'display':'none'});
	 	$('.banner>img').eq(num).css({'display':'block'});
		num--; 	
	})
	
	//自动轮播图
	t= setInterval (fn, 3000);
	function fn(){
	 	num++;
	 	if(num==$('.banner>img').length){
	 		num=0;
	 	}
	 	for(let i = 0;i<$('.banner>img').length;i++){
	 		$('.banner>img').eq(i).css("display","none")
	 	}
		$('.banner>img').eq(num).css("display","block")
	}

	//鼠标移入
	 $('.banner').mouseenter(function(){
	 	clearInterval(t)
	 })
	  $('.banner').mouseleave(function(){
	 	t = setInterval (fn, 3000);
	 })
	
	
	
	tli[1].onmousemove = function(){
		nonebox.style.display='block';
	}
	tli[1].onmouseleave = function(){
		nonebox.style.display='none';
	}
	//head 滚动条
	document.onwheel =function(){
		let st = document.body.scrollTop;
		if(st>=50){
			hed.style.background='#fff';
			for(let i=1;i<tas.length;i++){
				tas[i].style.color = 'black';
			}
		} else if(50>st>=0){
			hed.style.background='';
			for(let i=1;i<tas.length;i++){
				tas[i].style.color = '#fff'
			}
		}	
	}
	//head字体颜色
	for(let i=1;i<tas.length;i++){
		tas[i].onmousedown = function(){
			tas[i].classList.add('addcol')	
		}
		tas[i].onmouseleave = function(){
			tas[i].classList.remove('addcol');	
		}
	}
	
}