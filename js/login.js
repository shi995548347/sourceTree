$(function(){
	clickInput();
})
function clickInput(){

    var login=$('#login');
    login.click(function () {
    	var a=navigator.userAgent;
    	console.log(a);
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
                    password:password,
                    client:'wap'
                },
                success:function (msg) {
                    console.log(msg.code);
                    switch(msg.status){
                        case 1://登录成功
                            window.location.href="../index.html";
                            break;
                        case 0://登录失败
                            alert("请输入正确的账号密码！");
                            break;
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
