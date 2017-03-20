/**
 * Created by Administrator on 2017/3/20.
 */
$(function () {
    $.ajax({
        type:'get',
        dataType:'jsonp',
        data:{page:1},
        url:'http://api2.shanhecang.com/home_page',
        success:function (msg) {
            console.log(msg);
        }
    })
});