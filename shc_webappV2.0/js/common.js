//获取商品id
function GetQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
 };
 
function go_buy(){
	$(".buy_btn").on("click",function(){
		
	})
}

function open_app(){
	var config = {
		appKey: '1zit03',
		//如果网站使用的是https,请将 server:'http://openlink.cc' 改成 server:'https://openlink.cc'
		 server: 'http://openlink.cc'
	};
	//需要向app传递的json数据，可随意定义格式
	var params = {};
	//初始化，向服务器异步获取应用配置信息，应尽早运行完成初始化;如有特殊需求，也创建多个OpenInstall对象
	var openInstall = new OpenInstall(config, params);
	//可选参数，启动失败后的处理函数，有特殊需求可指定该参数，如显示自定义的遮罩等等
	var fallbackHandler=null;
	//调用wakeupOrInstall方法后，将根据应用配置进入启动/安装的流程。
	openInstall.wakeupOrInstall(fallbackHandler);
}