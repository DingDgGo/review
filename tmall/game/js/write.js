
	function Game(){		     //定义函数Game
		this.charsheet = [['Q','img/Q.png'],['W','img/W.png'],['E','img/E.png'],['R','img/R.png'],['T','img/T.png'],['Y','img/Y.png'],['U','img/U.png'],['I','img/I.png'],['O','img/O.png'],['P','img/P.png'],['A','img/A.png'],['S','img/S.png'],['D','img/D.png'],['F','img/F.png'],['G','img/G.png'],['H','img/H.png'],['J','img/J.png'],['K','img/K.png'],['L','img/L.png'],['Z','img/Z.png'],['X','img/X.png'],['C','img/C.png'],['V','img/V.png'],['B','img/B.png'],['N','img/N.png'],['M','img/M.png']]; 
		this.length = 5;        //产生个数
		this.elements = [];
		this.speed = 10;
		this.score = 0;
		this.level =10;
		this.Hp = 10;
		this.Position=[];
	};
	Game.prototype={
		start:function(){
			//创建元素
			this.createChars(this.length);
			this.drop();
			this.key();
		},
		createChars:function(length){
			for(let i=0;i<length;i++){
				this.createChar();
			}
		},
		checkRepeat:function(num){                //去重复
//			some every     some的返回值是布尔值  有一个执行就是true
//			this.elements.some(function(value){
//				return value.innerText == this.charsheet[num]
//			})
			return this.elements.some(value => value.innerText == this.charsheet[num][0])
		},
		checkPosition:function(lefts){                //去重叠
			return this.Position.some(function(value){
//				console.log(lefts)
				return Math.abs(value-lefts)<50;
			})
		},
		createChar:function(){
			//从数组里随机取一个字母 charSheet[num]
			let num;
			let chars = document.createElement('div');
			let lefts;
			let tops = Math.random()*100;
			//去重  循环  do  while
			//checkRepeat
			do{
				num = Math.floor(Math.random()*this.charsheet.length);
			}while(this.checkRepeat(num))
			
			//checkPositon
			do{
				lefts = (window.innerWidth-200)*Math.random()+100;
			}while(this.checkPosition(num))
			
			chars.classList.add ('char');
			//设置位置随机
			chars.innerText = this.charsheet[num][0];           //赋值   
			chars.style.cssText = `background: url(${this.charsheet[num][1]}) no-repeat center ;
									left:${lefts}px; top:${tops}px;
									`;
			
			document.body.appendChild(chars);			 //向页面body添加子节点
			this.elements.push(chars);                   //	将创建的chars放进elements中
			
			//push
			this.Position.push(lefts);
			
		},		
		drop:function(){
			let that =this;
			this.t = setInterval(function(){			//setInterval有回调函数。    this指偏了需要转化
				for(let i=0;i<that.elements.length;i++){
					let tops = that.elements[i].offsetTop;			
					that.elements[i].style.top = (tops+that.speed)+'px';
					if(tops>=500){
						//扣除生命值
						that.Hp--;
						let HpValue = document.querySelector('div.score:nth-child(2)>span:last-child');
						HpValue.innerText = that.Hp;
						
						document.body.removeChild(that.elements[i]);      //移除that.elements[i]
						that.elements.splice(i,1);	
						//生命值=0，游戏结束
						if(that.Hp == 0){
							that.over();						
						}					  //替换
					}
				}
				if(that.elements.length<that.length){
					that.createChar();
				}
			},100)
		},
		key:function(){
			let that=this;
			document.onkeydown = function(e){
				//转换小写   toLowerCase()
				let Kchar = String.fromCharCode(e.keyCode);              //String.fromCharCode(e.keyCode) 
				//满足按键的值等于char.innerText
				for(let i=0;i<that.elements.length;i++){
					if(Kchar == that.elements[i].innerText){	        //that.elements[i] 是char  
						console.log(that.elements[i].innerText)
						//消失
						document.body.removeChild(that.elements[i]);      //移除that.elements[i]
						that.elements.splice(i,1);
						//累加分数
						that.score++;
						let scoreValue = document.querySelector('div.score:first-child>span:first-child');
						scoreValue.innerText = that.score;	
						
						if(that.score == that.level){
							that.next();
						}
					}
				}
			}	                                          
		},
		next:function(){
			clearInterval(this.t)
			for(let i=0;i<this.elements.length;i++){
				document.body.removeChild(this.elements[i]);
			}
			this.elements = [];
			this.score = 0;
			this.length++;
			this.start();
		},
		over:function(){
			clearInterval(this.t);
			for(let i=0;i<this.elements.length;i++){
				document.body.removeChild(this.elements[i]);
			}
			let none = document.getElementsByClassName('score')
			none[0].style.display='none';
			none[1].style.display='none';
			let gameover = document.getElementsByClassName('gameover')[0];
			gameover.style.display='block';
			
			
			//重新开始
			let agains = document.querySelector('button.again')
			agains.onclick = function(){
				window.location.reload();
			}
			let gover = document.querySelector('button.close')
			gover.onclick = function(){
				window.close()
			}
			/**/
		}
		
		
		
		
	}//这是Game.prototype
	
	
	
