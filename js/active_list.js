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
            console.log(msg.data.block3);
            console.log(msg.data.block3.length);
            var str='';
            for(var i=0;i<msg.data.block3.length;i++){
                //$('.swiper-slide').css('background-image','http://image.shanhecang.com/'+msg.data.block3[i].activity_title);
                //$('.active_list_title').html(msg.data.block3[i].activity_title);
                str += '<a href="#" class="swiper-slide" style="background:#ddd"><div class="active_list_text"><p class="active_list_title">'+msg.data.block3[i].activity_title+'</p><p class="active_list_engTitle">截止日期<span class="active_list_time">'+msg.data.block3[i].activity_end_date+'</span></p></div></a>';
            }
            $('.swiper-wrapper').append(str);
        }
    })
})