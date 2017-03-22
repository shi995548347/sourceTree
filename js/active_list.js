/**
 * Created by Administrator on 2017/3/20.
 */
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
        url:'http://api2.shanhecang.com/promotion_list',
        success:function (msg) {
            var str='';
            for(var i=0;i<msg.data.list.length;i++){
                var activity_data = new Date(Number(msg.data.list[i].activity_end_date)*1000);
                str += '<a href="active_sheet.html?id='+msg.data.list[i].activity_id+'" class="swiper-slide" style="background:#ddd"><div class="active_list_text"><p class="active_list_title">'+msg.data.list[i].activity_title+'</p><p class="active_list_engTitle">截止日期<span class="active_list_time">'+formatDate(activity_data)+'</span></p></div></a>';
            }
            $('.swiper-wrapper').append(str);
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