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
            console.log(msg.data.block1.list.article_image.filename);
            $('.qualitySetTop_img').attr('src','http://image.shanhecang.com/'+msg.data.block1.list.article_image.filename)
            for(var i=0;i<msg.data.block3.length;i++){
                $('.swiper-slide').css('background-image','http://image.shanhecang.com/'+msg.data.block3[i].activity_title)
            };
            for(var i=0;i<msg.data.block3.length;i++) {
                $('.go_green_life img').attr('src', 'http://image.shanhecang.com/' + msg.data.block4[i].article_image.filename)
                $('.go_green_life_title').html(msg.data.block4[i].article_title);
            }
        }
    })
});