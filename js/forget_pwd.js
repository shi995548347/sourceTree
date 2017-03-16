/**
 * Created by Administrator on 2017/3/16.
 */
$(function () {
    var InterValObj; //timer变量，控制时间
    var count = 60; //间隔函数
    var curCount;//当前剩余秒数
    var ajaxData = "";

    $('#btnSendCode').click(function() {
        curCount = count;

        var phone = $("#phone").val();
        var captcha = $("#captcha").val();

        //判断手机号码是否为空
        if(phone!=''){
            $("#btnSendCode").attr("disabled", "true");
            $("#btnSendCode").val(curCount + "S");
            InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次


            //向后台发送处理数据
            $.ajax({
                type: "get",
                dataType: "JSONP",
                url: 'http://api2.shanhecang.com/sms/phone/'+phone+'/type/3',
                success: function (msg){
                    console.log(msg);
                    //if(msg.code==1004){
                    //    alert('手机号码没注册，请检查后');
                    //}else if(msg.code==1005){
                    //    clearInterval(InterValObj);
                    //    alert('手机短信发送失败，请重新点击获取');
                    //    $("#btnSendCode").attr("disabled", "false");
                    //    $("#btnSendCode").val('获取验证码');
                    //}
                    ajaxData = msg;
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) { },
            });
        }else{
            alert('请输入手机号码')
        }

    });

    //$('#determine').click(function(){
    //    var captcha = $("#captcha").val();
    //    var password = $("#new_pwd").val();
    //    var phone = $("#phone").val();
//
    //    $.ajax({
    //        type: "post",
    //        url: 'http://api2.shanhecang.com/passwordf',
    //        data: {
    //            phone: phone,
    //            captcha:captcha,
    //            type: '3',
    //            client:'wap',
    //            password:password
    //        },
    //        success: function (msg) {
    //            console.log(msg);
    //            //if(msg.status==1){
    //            //    console.log(msg);
    //            //    window.location.href="login.html";
    //            //}else if(msg.code==1001){
    //            //    alert('手机号输入错误');
    //            //}else if(msg.code==1006){
    //            //    alert('验证码过期，请重新获取');
    //            //}
    //        },
    //        error: function (data) {
    //            //console.log(data);
    //        }
    //    });
//
    //});

    $('#determine').click(function(){
        var captcha = $("#captcha").val();
        var password = $("#new_pwd").val();
        var phone = $("#phone").val();
        $.ajax({
            type: "post",
            dataType: "JSON",
            url: 'http://api2.shanhecang.com/passwordf',
            data: {
                phone: phone,
                type: '3',
                client:'wap',
                password:password,
                captcha:captcha
            },
            success: function (msg) {
                console.log(msg);
                if(msg.status==1){
                    window.location.href="../index.html";
                }else if(msg.code==1001){
                    alert('手机号输入错误');
                }else if(msg.code==1003){
                    alert('用户已存在');
                }else if(msg.code==1002){
                    alert('验证码错误，请重新获取');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown,msg) {
                console.log(msg)
            }
        });

    });


    function SetRemainTime() {
        if (curCount == 0) {
            window.clearInterval(InterValObj);//停止计时器
            $("#btnSendCode").removeAttr("disabled");//启用按钮
            $("#btnSendCode").val("重新发送验证码");
            code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
        }
        else {
            curCount--;
            $("#btnSendCode").val(curCount + "S");
        }
    }
});