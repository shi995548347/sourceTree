$(function(){
	clickInput();
})
function clickInput(){

    var login=$('#login');
    login.click(function () {
    	//if(username != "" && password != "" ){
        //    $.ajax({
        //        type:'post',
        //        url:'http://api2.shanhecang.com/login',
        //        dataType:'JSON',
        //        data:{
        //            username:username,
        //            password:password
        //        },
        //        success:function (msg) {
        //            console.log(msg.username);
        //        },
        //        error:function (msg) {
//
        //        }
        //    });
		//}else{
    	//	alert("用户名或密码不能为空")
		//}
        var username=$('#username').val();
        var password=$('#password').val();
		if(username==''){
			alert('用户名不能为空');
		}else if(password==''){
			alert('密码不能为空');
		}else{
            $.ajax({
                type:'post',
                url:'http://api2.shanhecang.com/login',
                dataType:'JSON',
                data:{
                    username:username,
                    password:password
                },
                success:function (msg) {
                    if(msg.status=='1'){
                    	alert('登录成功');

					}
                },
                error:function (msg) {
                }
            });
		}

    });


	$("form input").click(function(){
		$(this).siblings("input").removeClass("click_input");
		$(this).addClass("click_input");
	})
}
