/**
 * Created by Administrator on 2017/3/20.
 */
$(function () {
    $.ajax({
        type:'get',
        dataType:'jsonp',
        data:{page_type:'month'},
        url:'http://api2.shanhecang.com/article_list',
        success:function (msg) {
            var str='';
            for(var i=0;i<msg.data.list.length;i++){
                for(var j=0;j<msg.data.list[i].list.length;j++){
                    str+='<div class="exhibition-list"><a href="#"><img class="exhibition-list_img" src="http://image.shanhecang.com/'+msg.data.list[i].list[j].article_image.filename+'"></a><div class="exhibition-list_text"><p class="exhibition-list_title">'+msg.data.list[i].list[j].article_title+'</p><p class="exhibition-list_engTitle">'+msg.data.list[i].list[j].article_title_short+'</p></div></div>';
                    $('.life_school_box').html(str);
                }
            }
        }
    })
});