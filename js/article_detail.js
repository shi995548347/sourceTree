/**
 * Created by Administrator on 2017/3/15.
 */
$(function(){
    $.ajax({
        type: "get",
        dataType: "JSONP",
        url: 'http://api2.shanhecang.com/article_detail',
        data:{article_id:'37'},
        success:function (msg) {
            console.log(msg.data);
            $('.des_words').html(msg.data.article_content);
            $('.author_head').attr('src','http://image.shanhecang.com/' + msg.data.user_image);
            $('.comment_count').html(msg.data.article_comment_count);
            $('.like_count').html(msg.data.article_liked_count);
            for(var i=0;i<msg.data.article_image_all.length;i++){
                $('.article_img').attr('src','http://image.shanhecang.com/'+ msg.data.article_image_all[i].filename)
            }
        }
    });
    pushHistory();
    window.addEventListener("popstate", function(e) {
        //alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
        window.location.href = "find_index.html"
    }, false);
    function pushHistory() {
        var state = {
            title: "title",
            url: "#"
        };
        window.history.pushState(state, "title", "#");
    }

}


);