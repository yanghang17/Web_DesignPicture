//在displaymessage函数里会有参数传进来调用这个函数，动画效果才会实现
/*
function movemessage() {
	if (!document.getElementById) {return false};
	if (!document.getElementById("message")) {return false};
	//给这个out赋值，只是为了之后方便取消她clearTimeout(变量名)
	var elem = document.getElementById("message");
	elem.style.left = "500px";
	console.log(elem)                            ;
}
8/
/*
1.获取id的value,获取leftx，topy的初始位置值，并用变量接住。
2.先给结束的判断值，如果等于结果位置值，就return false
3.开始if小于目标值，初始值++
4.
*/

function movemessage(elementid,left_x,top_y,times) {
	if (!document.getElementById) {return false};
	var elem = document.getElementById(elementid);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {elem.style.left = "0px"};
	if (!elem.style.top) {elem.style.top = "0px"};
	var leftx = parseInt(elem.style.left);
	var topy = parseInt(elem.style.top);
	var dist = 0;
	//console.log(dist);
	if (leftx == left_x && topy == top_y) {return true};
	/*
	if (leftx < left_x) {leftx++};
 	if (leftx > left_x) {leftx--};
	if (topy < top_y) {topy++};
	if (topy > top_y) {topy--};
	*/
	/*
	1.差距越大越快
	2.Math.ceil（往上取最接近结果的值）
	  Math.round（四舍五入取值）
	  Math.floor（往下取最接近结果的值）
	*/
	if (leftx < left_x) {
		dist = Math.ceil((left_x - leftx)/10);
		leftx = dist + leftx;
	}
	if (leftx > left_x) {
		dist = Math.ceil((leftx - left_x)/10);
		leftx = leftx - dist;
	}
	if (topy < top_y) {
		dist = Math.ceil((top_y - topy)/10);
		topy = dist + top_y;
	}
	if (topy > top_y) {
		dist = Math.ceil((topy - top_y)/10);
		topy = topy - dist;
	}
	//console.log(elem.movement);
	//清除定时器，除了第一次undefined，后面都清除，到后面又重新setTimeout
	//当有新的参数传入也是，清除了上一次的定时器，重新开始setTimeout
	//console.log(elem.movement);
	//console.log(elem);
	elem.style.left = leftx + "px";
	elem.style.top = topy + "px";
	//console.log(elem);
	//console.log('"+elementid+"',"+left_x+","+top_y+","+times+")
	//引号的使用可以看末尾
	var repeat = "movemessage('"+elementid+"',"+left_x+","+top_y+","+times+")";
	//console.log(repeat);
	//赋值的movement是可以取消的，只是为了后续的可以简单操作这个动画
	//让他在times后执行一次次函数
	//repeat = movemessage("elementid,left_x,top_y,times")
	//setTimeout(code,time)
	//code只会被执行一次，并且在time后执行
	//这是给elem一个属性movement，值为他的左边。
	elem.movement = setTimeout(repeat,times);
	//alert(leftx);
	/*
	var s=1;
	var t=2;
	var y="yu";
	console.log("+s+","+y+","+t+");//+s+ +y+ +t+
	console.log(s,y,t);//1 "yu" 2
	console.log("s","y","t");//s y t
	console.log("("+s+","+y+","+t+")");//(1,yu,2)
	*/
}
