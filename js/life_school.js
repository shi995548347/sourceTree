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
            console.log(msg.data);
            $('.exhibition-list_img').attr('src','http://image.shanhecang.com/'+msg.data.block1.list.article_image.filename);
            $('.exhibition-list_title').html(msg.data.block1.list.article_title);
        }
    })
});