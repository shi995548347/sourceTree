/**
 * Created by Administrator on 2017/3/20.
 */
//$(function () {
//    $.ajax({
//        type:'get',
//        dataType:'jsonp',
//        data:{page:1},
//        url:'http://api2.shanhecang.com/home_page',
//        success:function (msg) {
//            console.log(msg.data);
//            console.log(msg.data.block1.list.article_image.filename);
//            $('.qualitySetTop_img').attr('src','http://image.shanhecang.com/'+msg.data.block1.list.article_image.filename)
//            for(var i=0;i<msg.data.block3.length;i++){
//                $('.swiper-slide').css('background-image','http://image.shanhecang.com/'+msg.data.block3[i].activity_title)
//            };
//            for(var i=0;i<msg.data.block3.length;i++) {
//                $('.go_green_life img').attr('src', 'http://image.shanhecang.com/' + msg.data.block4[i].article_image.filename)
//                $('.go_green_life_title').html(msg.data.block4[i].article_title);
//            }
//        }
//    })
//});

$(function () {
    function formatDate(now) {
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        return " " + year + "年" + month + "月" + date + "日";
    }
    $.ajax({
        type:'get',
        dataType:'jsonp',
        data:{page:1},
        url:'http://api2.shanhecang.com/home_page',
        success:function (msg) {

            var str='';

            $('.qualitySetTop_img').attr('src','http://image.shanhecang.com/'+msg.data.block1.list.article_image.filename)

            console.log(msg.data.block3);
            for(var i=0;i<msg.data.block3.length;i++){
                var activity_data = new Date(Number(msg.data.block3[i].activity_end_date)*1000);
                str += '<a href="active_sheet.html?id="'+msg.data.block3[i].activity_id+' class="swiper-slide" style="background:#ddd"><div class="go_activity_experience_text"><p class="go_activity_experience_title">'+msg.data.block3[i].activity_title+'</p><p class="go_activity_experience_engTitle">截止日期：<span class="active_list_time">'+formatDate(activity_data)+'</span></p></div></a>';
            }
            $('.swiper-wrapper').append(str);

            var str2='';
            for(var i=0;i<msg.data.block4.length;i++) {
                str2+='<a href="#"><img src="http://image.shanhecang.com/'+ msg.data.block4[i].article_image.filename+'"></a><div class="go_hand_sharing_text exhibition-list_text"><p class="go_hand_sharing_title exhibition-list_title">'+msg.data.block4[i].article_title+'</p><p class="go_hand_sharing_engTitle exhibition-list_engTitle">This is a english title</p></div>'
            }
            $('.go_hand_sharing').append(str2);

        }
    });

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        observer:true,
        observeParents:true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
})