/*
 * 打开一个url，并设置页面窗口的标题
 * @param  string url  要打开的url
 * @param  string title 标题
 * @return array
 */
function open_url(url, title){
    if(arguments.length === 1 && typeof arguments[0] == 'string'){
        title = '';
    }else if(arguments.length === 2 && typeof arguments[0] == 'string' && typeof arguments[1] == 'string'){
        title = title;
    }
    api.openWin({
        name: 'win_url',
        url: '../html/win_url.html',
        reload:true,
        pageParam: {url: url, title: title}
    });
}


function openItem(id, title, type, object, url){
    if(arguments.length === 3){
        url = '';
    }
    
	switch(type)
	{
	case 0:	// 链接新闻
	  open_url(url, '链接');
	  break;
	case 1:	// 软件推荐
	  $api.setStorage('comment_catalog', -1);	// 记录评论列表类型	软件评论接口不支持
	  break;
	case 2:	// 讨论区帖子
	  $api.setStorage('comment_catalog', 2);	// 记录评论列表类型	帖子
	  break;
	case 3:	// 博客
		$api.setStorage('comment_catalog', 5);	// 记录评论列表类型	 博客
		api.openWin({
		    name: 'win_blog_detail',
		    url: './win_blog_detail.html',
		    pageParam: {id: object, title:title}
		});
	  break;
	case 4:	// 普通新闻
		$api.setStorage('comment_catalog', 1);	// 记录评论列表类型	新闻/翻译
		api.openWin({
		    name: 'win_news_detail',
		    url: './win_news_detail.html',
		    pageParam: {id: id, title:title}
		});
	  break;
	case 5:	// 翻译文章
	  $api.setStorage('comment_catalog', 1);	// 记录评论列表类型	新闻/翻译
	  break;
	}
    
}

/*
 * 向控制台输出日志
 * @param  data data  要输出的日志
 * @return string
 */
function log(data){
	if(typeof data == 'string'){
		console.log(data);
	}else{
		console.log(JSON.stringify(data));
	}
}

/*
 * token过期则重新登录
 * @param  data statusCode  OSC返回的状态码
 * 主要：ios 上 api.openWin 有闪烁问题
 * @return string
 */
function tokenExpires(statusCode){
	if(statusCode == 401){
		log('token过期');
		$api.rmStorage('access_token');
		$api.rmStorage('refresh_token');
		$api.rmStorage('token_type');
		$api.rmStorage('expires_in');
		$api.rmStorage('uid');
    	api.closeWin({name:'slidLayout'});
    	api.openWin({name: 'root',reload:true,pageParam:{from:'relogin'}});
		return true;
	}else{
		return false;
	}
}

/*
 * 时间转换时间戳 
 * @param  string endTime  日期 2015-03-29 20:21:32
 * @return int	时间戳 
 */
function transdate(endTime){
	var date=new Date();
	date.setFullYear(endTime.substring(0,4));
	date.setMonth(endTime.substring(5,7)-1);
	date.setDate(endTime.substring(8,10));
	date.setHours(endTime.substring(11,13));
	date.setMinutes(endTime.substring(14,16));
	date.setSeconds(endTime.substring(17,19));
	return Date.parse(date)/1000;
}

/*
 * 显示友好时间
 * @param  string date  日期 2015-03-29 20:21:32
 * @return string	友好的时间 
 */
function friendly_time(date)
{
	var time_stamp = transdate(date)
    var now_d = new Date();
    var now_time = now_d.getTime() / 1000; //获取当前时间的秒数
    var f_d = new Date();
    f_d.setTime(time_stamp * 1000);
    var f_time = f_d.toLocaleDateString();

    var ct = now_time - time_stamp;
    var day = 0;
    if (ct < 0)
    {
        f_time = "【预约】" + f_d.toLocaleString();
    }
    else if (ct < 60)
    {
        f_time = Math.floor(ct) + '秒前';
    }
    else if (ct < 3600)
    {
        f_time = Math.floor(ct / 60) + '分钟前';
    }
    else if (ct < 86400)//一天
    {
        f_time = Math.floor(ct / 3600) + '小时前';
    }
    else if (ct < 691200)//7天
    {
        day = Math.floor(ct / 86400);
        if (day < 2)
            f_time = '1天前';
        else
            f_time = day + '天前';
    }
    else if(ct >= 691200)
    {
        f_time=date.substring(0, date.length-9);
    }
    return f_time;
}


/*
 * 由于接口返回的日期最后多了个 .0 所以删除它，然后显示友好的时间
 */
function adjustDate(date){
	if(date.length==21){
		date=date.substring(0, date.length-2);
	}
	return friendly_time(date);
}

function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
//http://www.cnblogs.com/sosoft/
}