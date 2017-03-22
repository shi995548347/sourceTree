$(function(){
	clickInput();
})
function clickInput(){
    var login=$('#login');
    login.click(function () {
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
                    console.log(msg);
                    if(msg.status==1){
                        window.location.href="../index.html";
                    }else if(msg.code==1002){
                        alert('请输入正确的手机号');
                    }else if(msg.code==1003){
                        alert('密码错误，请重新输入');
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
