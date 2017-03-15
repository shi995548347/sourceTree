$(function(){
	click_load();
})
function click_load(){
	$.ajax({
        type: "get",
        dataType: "JSONP",
        url: 'http://api2.shanhecang.com/article_list',
        data:{page:'1',page_type:'month',pageSize:'3'},
		success:function (msg) {
			console.log(msg.data.list);
			for(var i=0;i<msg.data.list.length;i++){
                $('.author_name').html(msg.data.list[i].article_author);
                $('.pic_name').html(msg.data.list[i].article_title);
                $('.article_image').attr('src','http://image.shanhecang.com/'+ msg.data.list[i].article_image.filename);
                $('.comment_count').html(msg.data.list[i].article_comment_count);
                $('.like_count').html(msg.data.list[i].article_liked_count)
			}
        }
	});
	$(".pic_list dl dt").on("click",function(){
		window.location.href = "find_con.html"
	});
}
