jQuery(document).ready(function($) {
	getOneParamInfo = function(id_,text_,type_,example_){
		var one_param_info = {};
		if (id_!= null) {
			one_param_info.id=id_;
		};
		if (text_!= null) {
			one_param_info.text = text_;
		};
		if (type_ != null) {
			one_param_info.type_ = type_;
		};
		if (example_ != null) {
			one_param_info.example_ = example_;
		};
		return one_param_info;
	}
	/*
	*jQuery.ajax
	*/
	$().on('jQuery.ajax', function(event) {
		var core={};//主 核心 用于创建api的核心参数
		core.id = "jQuery.ajax(url,[ settings ])";
		core.describe = "执行一个异步的HTTP（Ajax）的请求";
		core.return_ = "返回: jqXHR";
		core.param=[];//api中方法参数
		var one_param={}//单一的
		one_param.id = "jQuery.ajax(url,[settings])";
		one_param.type = "Object";
		one_param.info =[];
		var one_param_info = {};
		one_param_info.id="";
		one_param_info.text='url:一个用来包含发送请求的URL字符串。<br>settings:一个以"{键:值}"组成的AJAX 请求设置。所有选项都是可选的。可以使用$.ajaxSetup()设置任何默认参数。看jQuery.ajax( settings )下所有设置的完整列表。';
		one_param.info.push(one_param_info);
		core.param.push(one_param);

		var one_param={}//单一的
		one_param.id = "settings:选项";
		//one_param.type = "Object";
		one_param.info =[];
		core.param.info.push(getOneParamInfo());
		core.param.info.push(getOneParamInfo('accepts','Map','默认： 取决于数据类型<br>内容类型发送请求头，告诉服务器什么样的响应会接受返回。如果accepts设置需要修改，推荐在$.ajaxSetup()方法中做一次。'));
		core.param.info.push(getOneParamInfo('async','Boolean','默认： true<br>默认设置下，所有请求均为异步请求（也就是说这是默认设置为true）。如果需要发送同步请求，请将此选项设置为 false。跨域请求和dataType: "jsonp"请求不支持同步操作。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。'));
		core.param.info.push(getOneParamInfo('beforeSend(jqXHR, settings)','Function','请求完成后回调函数 (请求成功或失败之后均调用)。参数： XMLHttpRequest 对象和一个描述成功请求类型的字符串。 Ajax 事件'));
		core.param.info.push(getOneParamInfo('cache','Boolean'));
		core.overview=""
		core.example=""
	});
});