/**
 * Created by Administrator on 2017/3/21.
 */
$(function () {


    $('.go_back').click(function () {
        window.history.back();
    });
    //window.history.pushState(null, null, "?id=18");
    var url_suffix=window.location.search;
    var id=url_suffix.replace(/[^0-9]+/ig,"");

    function formatDate(now) {
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        return " " + year + "年" + month + "月" + date + "日";
    }
    var active_time=$('.active_time');
    var active_title=$('.active_title');
    $.ajax({
        type:'get',
        dataType:'jsonp',
        data:{activity_id:id},
        url:'http://api2.shanhecang.com/promotion_detail',
        success:function (msg) {
            //console.log(msg);
            var activity_data = new Date(Number(msg.data.activity_end_date)*1000);
            active_time.html(formatDate(activity_data));
            active_title.html(msg.data.activity_title);
        }
    })
});