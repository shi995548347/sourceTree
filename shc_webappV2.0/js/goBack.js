$(function(){
	var back = document.getElementsByClassName("back")[0];
	back.addEventListener("click",function(){
		history.back();
	})
})