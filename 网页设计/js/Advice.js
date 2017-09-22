window.onload = function(){

	let adviceBox = document.querySelector('textarea');
	let liuyan = document.querySelector('.liuyanban');		
	let max = 120;
	let tijiao = document.querySelector('button.tijiao')
	let name = document.querySelector('input.input-name')
	let tel = document.querySelector('input.input-tel')
	tijiao.onmousedown = function(){
		let str =adviceBox.value;
		let tex = str;
		adviceBox.value = '';
		let str1 = name.value;
		let names = str1;
		name.value = '';
		tel.value = '';
		let tip = document.createElement('li');
		tip.innerHTML = `
						<li>
							<div class="tu">
								<img src="img/pig.jpg" alt="" />
							</div>
							<div class="name">${names}</div>
							<div class="pdiv"><p>${tex}</p></div>
						</li>
						`;
		liuyan.prependChild(tip);	
	}
	adviceBox.onkeyup = function(){
		let str =adviceBox.value;
		let zishu = document.querySelector('.shengyu>span')
		zishu.innerText=`${max - str.length}`
	}
}