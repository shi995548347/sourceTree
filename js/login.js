$(function(){
	clickInput();
})
function clickInput(){
	var username=$('#username');
	var password=$('#password');
	var login=$('#login');
    login.click(function () {

    });


	$("form input").click(function(){
		$(this).siblings("input").removeClass("click_input");
		$(this).addClass("click_input");
	})
}
