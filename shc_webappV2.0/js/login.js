$(function(){
	clickInput();
})
function clickInput(){
	$("form input").click(function(){
		$(this).siblings("input").removeClass("click_input");
		$(this).addClass("click_input");
	})
}
