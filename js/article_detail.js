/**
 * Created by Administrator on 2017/3/15.
 */
$(function(){

    var article_content=$('.des_words');
    var user_image=$('.author_head');
    var article_comment_count=$('.comment_count');
    var article_liked_count=$('.like_count');
    var article_img=$('.article_img');

    $.ajax({
        type: "get",
        dataType: "JSONP",
        url: 'http://api2.shanhecang.com/article_detail',
        data:{article_id:'37'},
        success:function (msg) {
            //console.log(msg.data);
            article_content.html(msg.data.article_content);
            user_image.attr('src','http://image.shanhecang.com/' + msg.data.user_image);
            article_comment_count.html(msg.data.article_comment_count);
            article_liked_count.html(msg.data.article_liked_count);
            for(var i=0;i<msg.data.article_image_all.length;i++){
                article_img.attr('src','http://image.shanhecang.com/'+ msg.data.article_image_all[i].filename)
            }
        }
    });

    var parent_message=$('.parent_comment_content');
    var comment_count=$('.count');
    var comment_image=$('.comment_image');
    var parent_comment_name=$('.parent_comment_name');
    $.ajax({
        type: "get",
        dataType: "JSONP",
        url: 'http://api2.shanhecang.com/article_comment',
        data:{article_id:'35'},
        success: function (msg){
            console.log(msg.data);
            comment_count.html(msg.data.count);
            for(var i=0;i<msg.data.list.length;i++){
                comment_image.attr('src','http://image.shanhecang.com/' + msg.data.list[i].user_image);
                parent_message.html(msg.data.list[i].parent.comment_message);
                parent_comment_name.html(msg.data.list[i].parent.user_nikename)
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