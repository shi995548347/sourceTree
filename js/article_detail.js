/**
 * Created by Administrator on 2017/3/15.
 */
$(function(){



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