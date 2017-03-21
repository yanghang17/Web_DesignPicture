/*
1.测试打开浏览器是否支持DOM，如果不支持直接退出
2.获取img的id，并设置为绝对定位，absolute，固定位置0,0
3.获取所有a标签，伪数组。可以使用下变数和length
4.以下标数为所对应的链接，对onmouseover事件触发时调用movemessage的函数设置传参
5.参数里设置的是目标显示位置用移动函数
*/
function prepareslideshow() {
	if (!document.getElementById) {return false};
	if (!document.getElementsByTagName) {return false};
	//创建div、img以及所带属性
	var div = document.createElement("div");
	div.setAttribute("id","slideshow");
	var img = document.createElement("img");
	img.setAttribute("src","images/fourpicture.jpg");
	img.setAttribute("alt","building blocks of web design");
	img.setAttribute("id","preview");
	div.appendChild(img);
	var linklist = document.getElementById("linklist");
	document.body.append(div);
	//insertAfter(div,linklist);
	var list = linklist.getElementsByTagName("a");
	preview = document.getElementById("preview");
	//调用insertAfter函数
	insertAfter(div,linklist);
	//console.log(preview);
	//为图片固定住位置
	//preview.style.position = "absolute";
	//preview.style.left = "0px";
	//preview.style.top = "0px";
	//console.log(list);
	//onmouseover事件，触发时，调用movemessage函数，并传入参数。
	list[0].onmouseover = function() {
		movemessage("preview",-100,0,10);
	}
	list[1].onmouseover = function() {
		movemessage("preview",-200,0,10);
	}
	list[2].onmouseover = function() {
		movemessage("preview",-300,0,10);
	}
}
addLoadEvent(prepareslideshow);
/*
1.清除定时器，除了第一次的undefined，后面都是清除上一次定时器
传入新的参数，也是清除上一次参数
2.给了img一个div（用作相对定位relative。）设置一个绝对定位absolute
*/
