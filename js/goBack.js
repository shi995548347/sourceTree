$(function(){
	var back = document.getElementsByClassName("back")[0];
	back.addEventListener("click",function(){
		window.history.back();
		
		/*if (window.history && window.history.pushState) {
		
		$(window).on('popstate', function () {
		
		window.history.pushState('forward', null, '#');
		
		window.history.forward(1);
		
		//alert('你确定要返回上一页') ;//这里是返回上一页之前的业务逻辑，可提示消息，可以是跳转的事件如window.location.href="http://www.baidu.com";
	
		});
		
		}
		
		window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
		
		window.history.forward(1);*/
	})
	
	/*$(document).ready(function(e) {
		if (window.history && window.history.pushState) {
		
		$(window).on('popstate', function () {
		
		window.history.pushState('forward', null, '#');
		
		window.history.forward(1);
		
		//alert('你确定要返回上一页') ;//这里是返回上一页之前的业务逻辑，可提示消息，可以是跳转的事件如window.location.href="http://www.baidu.com";
		//window.location.href="http://www.baidu.com";
		
		});
		
		}
		
		window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
		
		window.history.forward(1);
		
	});
	*/
	
})