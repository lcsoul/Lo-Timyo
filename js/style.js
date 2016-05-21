var imgs=document.getElementsByClassName('img-lb'),
	dianall=document.getElementsByClassName('lb-q')[0],
	dian=dianall.getElementsByTagName('li');
	num=0,
	timer=null;

// timer = setInterval(function() {
// 	num++;
// 	if (num >= imgs.length) {
// 		num = 0
// 	}
// 	con()
// 	}, 900);

// function con(){
// 	for (var i = 0; i < imgs.length; i++) {
// 		imgs[i].style.opacity='0';
// 		dian[i].className='lb-li0';
// 	}
// 	imgs[num].style.opacity='1';
// 	dian[num].className='lb-li1';
// }


function con(){
	num++
	if (num >= imgs.length) {
		num = 0
	}
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.opacity='0';
		dian[i].className='lb-li0';
	}
	// console.log(num)
	imgs[num].style.opacity='1';
	dian[num].className='lb-li1';
}
for (var i = 0; i < dian.length; i++) {
	dian[i].index=i
	dian[i].onclick=function(){
		for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.opacity='0';
		dian[i].className='lb-li0';
	}
		num=this.index;
		imgs[this.index].style.opacity='1';
		this.className='lb-li1';
	}
	dian[i].onmouseover=function(){
		clearInterval(timer)
	}
	dian[i].onmouseout=function(){
		timer=setInterval(con,3000)
	}
}

timer=setInterval(con,3000)







