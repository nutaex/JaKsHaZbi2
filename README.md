### 简介
本项目是基于 [APICloud](http://www.apicloud.com) 的开发的 [OSChina](http://www.oschina.net) 客户端；
由于作者是搞 PHP 的，前端技术实在很菜，所以代码拼拼凑凑的，还请大家见谅。

### 使用说明
**由于本项目尚未开发完成，还有大量功能未实现，所以在使用时会遇到大量打不开、空内容的情况。**

### 编译说明
1. 申请自己的 [OpenAPI](http://www.oschina.net/openapi) 应用，并配置（需要一个回调页，我是用 OSC_GIT 的演示平台搞的，大家也可直接使用，地址是：http://bind.oschina.mopaas.com/bind.html ）。
2. 配置应用 OAuth2.0 授权信息。有两个配置的地方，一是在 /res/key.xml 中配置，当项目通过 APICloud **云编译后**，此配置文件会加密存放，保证你的应用安全；二是在  /script/config.js 中配置，此配置是为了方便IDE“一键真机同步测试”用的，由于这种调试方式不支持上面的 key.xml 加密与解密，所以就做个这种开发测试用的配置。如果使用第二种配置，APP_DEBUG 请设为 true。如果使用第一种配置，请把 APP_DEBUG 请设为 false，并清空js方式的配置。

### 接口 BUG/缺陷 列表
OSChina 的 [OpenAPI](http://www.oschina.net/openapi) 存在很多BUG和缺陷，所以备注下

1. [blog_list](http://www.oschina.net/openapi/docs/post_detail) 返回的 pubDate 时间格式不对，多了 .0
2. [news_list](http://http://www.oschina.net/openapi/docs/news_list) 新闻列表没有信息简介
3. [blog_comment_list](http://www.oschina.net/openapi/docs/blog_comment_list) 和 [comment_list](http://www.oschina.net/openapi/docs/comment_list) 有很多差异，比如字段大小写、字段的数量、是否存在 refers 的差异等等，很坑，得小心。还有[blog_comment_pub](http://www.oschina.net/openapi/docs/blog_comment_pub) [blog_comment_reply](http://www.oschina.net/openapi/docs/blog_comment_reply) 与 [comment_pub](http://www.oschina.net/openapi/docs/comment_pub) [comment_reply](http://www.oschina.net/openapi/docs/comment_reply) 有所差异，得注意。

### 扫描下载
![扫描下载](http://static.oschina.net/uploads/space/2015/0409/121515_SlEx_252582.jpg "扫描下载")

对应版本 2015-04-07 8e08bd93f

### 预览图
![输入图片说明](http://static.oschina.net/uploads/space/2015/0403/012845_NWTF_252582.jpg "登录页")

![输入图片说明](http://static.oschina.net/uploads/space/2015/0403/012844_FADw_252582.png "资讯列表页")

![输入图片说明](http://static.oschina.net/uploads/space/2015/0403/012844_AMVb_252582.png "侧滑式布局")

![输入图片说明](http://static.oschina.net/uploads/space/2015/0403/012844_LXXT_252582.png "博客列表页")

![输入图片说明](http://static.oschina.net/uploads/space/2015/0403/012844_Jzas_252582.png "资讯详情页面")

![输入图片说明](http://static.oschina.net/uploads/space/2015/0403/012845_xYLX_252582.png "评论页")

![资讯详情页面也能直接评论](http://static.oschina.net/uploads/space/2015/0403/012845_gHmq_252582.png "资讯详情页面也能直接评论")

![输入图片说明](http://static.oschina.net/uploads/space/2015/0403/012845_Vvqy_252582.png "博客详情页")