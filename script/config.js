var APP_DEBUG = true;

/* 应用授权信息 调试模式时使用，正云编译前请清空下面的值*/
var API_client_id 		= '填写 client_id';
var API_client_secret 	= '填写 client_secre';
var API_redirect_uri 	= '填写 redirect_uri';

var OscIP = "http://www.oschina.net";
var OpenAPI = {
	"dataType": "json",
	"pageSize": 10,
	
	"authorize": OscIP + "/action/oauth2/authorize",
	"access_token": OscIP + "/action/openapi/token",
	"access_user": OscIP + "/action/openapi/user",
	"user_information": OscIP + "/action/openapi/user_information",
	"my_information": OscIP + "/action/openapi/my_information",

	"news_list": OscIP + "/action/openapi/news_list",
	"news_blog": OscIP + "/action/openapi/blog_list",
	"news_recommend": OscIP + "/action/openapi/blog_recommend_list",
	"news_detail": OscIP + "/action/openapi/news_detail",
	"news_blog_detail": OscIP + "/action/openapi/blog_detail",
	"news_search": OscIP + "/action/openapi/search_list",


	"post_pub": OscIP + "/action/openapi/post_pub",
	"question_list": OscIP + "/action/openapi/post_list",
	"question_detail": OscIP + "/action/openapi/post_detail",

	"tweet_list": OscIP + "/action/openapi/tweet_list",
	"tweet_detail": OscIP + "/action/openapi/tweet_detail",
	"tween_hot_list": OscIP + "/action/openapi/tweet_list",
	"tweet_pub": OscIP + "/action/openapi/tweet_pub",
	"tweet_delete": OscIP + "/action/openapi/tweet_delete",

	"my_list": OscIP + "/action/openapi/active_list",
	'message_list': OscIP + '/action/openapi/message_list',
	"message_delete": OscIP + "/action/openapi/message_delete",

	"comment_pub": OscIP + "/action/openapi/comment_pub",
	"comment_reply": OscIP + "/action/openapi/comment_reply",
	"comment_list": OscIP + "/action/openapi/comment_list",
	"comment_delete": OscIP + "/action/openapi/comment_delete",

	"favorite_list": OscIP + "/action/openapi/favorite_list",
	"favorite_add": OscIP + "/action/openapi/favorite_add",
	"favorite_remove": OscIP + "/action/openapi/favorite_remove",

	"blog_comment_list": OscIP + "/action/openapi/blog_comment_list",
	"blog_comment_pub": OscIP + "/action/openapi/blog_comment_pub",
	"blog_comment_reply": OscIP + "/action/openapi/blog_comment_reply",


	"user_relation": OscIP + "/action/openapi/update_user_relation",
	"user_dynmic_blog": OscIP + "/action/openapi/user_blog_list",
	"user_blog_delete": OscIP + "/action/openapi/user_blog_delete",


	"project_catalog_list": OscIP + "/action/openapi/project_catalog_list",
	"project_list": OscIP + "/action/openapi/project_list",
	"project_detail": OscIP + "/action/openapi/project_detail",
	"project_tag_list": OscIP + "/action/openapi/project_tag_list",

	"friends_list": OscIP + "/action/openapi/friends_list",

	"clear_notice": OscIP + "/action/openapi/clear_notice",
	"portrait_update": OscIP + "/action/openapi/portrait_update",
	"user_notice": OscIP + "/action/openapi/user_notice"
};