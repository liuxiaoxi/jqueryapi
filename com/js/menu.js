var preload_data = {
    "more": false,
    "results":[
    			{
    				"id":"cheatsheet",
    				"text":"速查表"

    			},
			    {
			        "text": "Ajax",
			        "children": [
			            {
			                "id": "jQuery.ajax",
			                "text": "jQuery.ajax()",
			                "info": "通过 HTTP 请求加载远程数据"
			            },
			            {
			                "id": "ajaxComplete",
			                "text": ".ajaxComplete()",
			                "info": "AJAX 请求完成时执行函数。Ajax 事件。 "
			            },
			            {
			                "id": "ajaxError",
			                "text": ".ajaxError()",
			                "info": " Ajax请求出错时注册一个回调处理函数，这是一个 Ajax 事件。"
			            },
			            {
			                "id": "ajaxSend",
			                "text": ".ajaxSend()",
			                "info": "在Ajax请求发送前显示一个信息."
			            },
			            {
			                "id": "jQuery.ajaxSetup",
			                "text": "jQuery.ajaxSetup()",
			                "info": "设置未来（可以理解为全局）的 AJAX请求默认选项"
			            },
			            {
			                "id": "ajaxStart",
			                "text": ".ajaxStart()",
			                "info": "在AJAX 请求刚开始时执行一个处理函数。 Ajax 事件。"
			            },
			            {
			                "id": "ajaxStop",
			                "text": ".ajaxStop()",
			                "info": "在Ajax请求停止后隐藏加载信息。"
			            },
			            {
			                "id": "ajaxSuccess",
			                "text": ".ajaxSuccess()",
			                "info": "当一个Ajax请求成功完成时显示一个信息"
			            },
			            {
			                "id": "jQuery.get",
			                "text": "jQuery.get()",
			                "info": "通过服务器HTTP GET请求加载数据"
			            },
			            {
			                "id": "jQuery.getJSON",
			                "text": "jQuery.getJSON()",
			                "info": "通过 HTTP GET 请求从服务器载入 JSON 数据。"
			            },
			            {
			                "id": "jQuery.getScript",
			                "text": "jQuery.getScript()",
			                "info": "通过 HTTP GET 请求从服务器载入并执行一个 JavaScript 文件"
			            },
			            {
			                "id": "load",
			                "text": ".load()",
			                "info": "载入远程 HTML 文件代码并插入至 DOM 中"
			            },
			            {
			                "id": "jQuery.param",
			                "text": "jQuery.param()",
			                "info": "创建一个序列化的数组或对象，适用于一个URL 地址查询字符串或Ajax请求。"
			            },
			            {
			                "id": "jQuery.post",
			                "text": "jQuery.post()",
			                "info": "通过服务器HTTP POST请求加载数据"
			            },
			            {
			                "id": "serialize",
			                "text": ".serialize()",
			                "info": "将用作提交的表单元素的值编译成字符串。"
			            },
			            {
			                "id": "serializeArray",
			                "text": ".serializeArray()",
			                "info": "将用作提交的表单元素的值编译成拥有name和value对象组成的数组。"
			            }
			        ]
			    },
			    {
			        "text": "属性（Attributes）",
			        "children": [
			            {
			                "id": "prop",
			                "text": ".prop()",
			                "info": "获取在匹配的元素集中的第一个元素的属性值。"
			            },
			            {
			                "id": "removeProp",
			                "text": ".removeProp()",
			                "info": "为匹配的元素删除设置的属性。"
			            },
			            {
			                "id": "addClass",
			                "text": ".addClass()",
			                "info": "为每个匹配的元素添加指定的类名"
			            },
			            {
			                "id": "attr",
			                "text": ".attr()",
			                "info": "取得第一个匹配元素的属性值。"
			            },
			            {
			                "id": "hasClass",
			                "text": ".hasClass()",
			                "info": "检查匹配的元素是否含有某个特定的类。"
			            },
			            {
			                "id": "html",
			                "text": ".html()",
			                "info": "从匹配的第一个元素中获取HTML内容。"
			            },
			            {
			                "id": "removeAttr",
			                "text": ".removeAttr()",
			                "info": "为匹配的元素集合中的每个元素中移除一个属性。"
			            },
			            {
			                "id": "removeClass",
			                "text": ".removeClass()",
			                "info": "移除每个匹配元素的一个，多个或全部样式。"
			            },
			            {
			                "id": "text",
			                "text": ".text()",
			                "info": "得到匹配元素集合中每个元素的文本内容结合,包括他们的后代。"
			            },
			            {
			                "id": "toggleClass",
			                "text": ".toggleClass()",
			                "info": "在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或价值切换属性。"
			            },
			            {
			                "id": "val",
			                "text": ".val()",
			                "info": "获取匹配的元素集合中第一个元素的当前值。"
			            }
			        ]
			    },
			    {
			        "text": "回调对象（Callbacks Object）",
			        "children": [
			            {
			                "id": "jQuery.Callbacks",
			                "text": "jQuery.Callbacks()",
			                "info": "一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表。\n"
			            },
			            {
			                "id": "callbacks.add",
			                "text": "callbacks.add()",
			                "info": "回调列表中添加一个回调或回调的集合。"
			            },
			            {
			                "id": "callbacks.disable",
			                "text": "callbacks.disable()",
			                "info": "禁用回调列表中的回调"
			            },
			            {
			                "id": "callbacks.empty",
			                "text": "callbacks.empty()",
			                "info": "从列表中删除所有的回调"
			            },
			            {
			                "id": "callbacks.fire",
			                "text": "callbacks.fire()",
			                "info": "这个参数或参数列表传回给回调列表。"
			            },
			            {
			                "id": "callbacks.fired",
			                "text": "callbacks.fired()",
			                "info": "确定如果回调至少已经调用一次。"
			            },
			            {
			                "id": "callbacks.fireWith",
			                "text": "callbacks.fireWith()",
			                "info": "访问给定的上下文和参数列表中的所有回调。"
			            },
			            {
			                "id": "callbacks.has",
			                "text": "callbacks.has()",
			                "info": "确定是否提供的回调列表"
			            },
			            {
			                "id": "callbacks.lock",
			                "text": "callbacks.lock()",
			                "info": "锁定在其当前状态的回调列表。"
			            },
			            {
			                "id": "callbacks.locked",
			                "text": "callbacks.locked()",
			                "info": "确定是否已被锁定的回调列表。"
			            },
			            {
			                "id": "callbacks.remove",
			                "text": "callbacks.remove()",
			                "info": "删除回调或回调回调列表的集合。"
			            }
			        ]
			    },
			    {
			        "text": "核心（Core）",
			        "children": [
			           
			            {
			                "id": "jQuery_selector_context",
			                "text": "jQuery()",
			                "info": "接受一个包含CSS选择器的字符串用于匹配的元素集合。"
			            },
			            {
			                "id": "jQuery.noConflict",
			                "text": "jQuery.noConflict()",
			                "info": "放弃jQuery控制的$的变量。"
			            }
			        ]
			    },
			    {
			        "text": "CSS",
			        "children": [
			            {
			                "id": "addClass",
			                "text": ".addClass()",
			                "info": " 为每个匹配的元素添加指定的类名 。"
			            },
			            {
			                "id": "css",
			                "text": ".css()",
			                "info": "为匹配的元素集合中获取第一个元素的样式属性值。"
			            },
			            {
			                "id": "hasClass",
			                "text": ".hasClass()",
			                "info": "检查匹配的元素是否含有某个特定的类。"
			            },
			            {
			                "id": "height",
			                "text": ".height()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值。"
			            },
			            {
			                "id": "innerHeight",
			                "text": ".innerHeight()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。"
			            },
			            {
			                "id": "innerWidth",
			                "text": ".innerWidth()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，但是不包括border。"
			            },
			            {
			                "id": "offset",
			                "text": ".offset()",
			                "info": "为匹配的元素集合中获取第一个元素的当前坐标，相对于文档（document）。"
			            },
			            {
			                "id": "outerHeight",
			                "text": ".outerHeight()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，border和选择性的margin。"
			            },
			            {
			                "id": "outerWidth",
			                "text": ".outerWidth()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，border。"
			            },
			            {
			                "id": "position",
			                "text": ".position()",
			                "info": "为匹配的元素集合中获取第一个元素的当前坐标，是相对于相对于父级元素的位移。"
			            },
			            {
			                "id": "removeClass",
			                "text": ".removeClass()",
			                "info": "移除每个匹配元素的一个，多个或全部样式。"
			            },
			            {
			                "id": "scrollLeft",
			                "text": ".scrollLeft()",
			                "info": "为匹配的元素集合中获取第一个元素的的滚动条的水平位置。"
			            },
			            {
			                "id": "scrollTop",
			                "text": ".scrollTop()",
			                "info": "为匹配的元素集合中获取第一个元素的的滚动条的垂直位置。"
			            },
			            {
			                "id": "toggleClass",
			                "text": ".toggleClass()",
			                "info": "在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或价值切换属性。"
			            },
			            {
			                "id": "width",
			                "text": ".width()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值。"
			            }
			        ]
			    },
			    {
			        "text": "数据(Data)",
			        "children": [
			            {
			                "id": "clearQueue",
			                "text": ".clearQueue()",
			                "info": "从列队中移除所有未执行的项。"
			            },
			            {
			                "id": "data",
			                "text": ".data()",
			                "info": "在匹配远上绑定任意相关数据。"
			            },
			            {
			                "id": "jQuery.data",
			                "text": "jQuery.data()",
			                "info": "在匹配远上绑定任意相关数据。"
			            },
			            {
			                "id": "jQuery.hasData",
			                "text": "jQuery.hasData()",
			                "info": " 确定任何一个元素是否有与之相关的jQuery数据。"
			            },
			            {
			                "id": "dequeue",
			                "text": ".dequeue()",
			                "info": "在匹配的元素上执行队列中的下一个函数。"
			            },
			            {
			                "id": "jQuery.dequeue",
			                "text": "jQuery.dequeue()",
			                "info": "在匹配的元素上执行队列中的下一个函数。"
			            },
			            {
			                "id": "queue",
			                "text": ".queue()",
			                "info": "显示在匹配的元素上的已经执行的函数列队。"
			            },
			            {
			                "id": "jQuery.queue",
			                "text": "jQuery.queue()",
			                "info": "显示在匹配的元素上的已经执行的函数列队。"
			            },
			            {
			                "id": "removeData",
			                "text": ".removeData()",
			                "info": "在元素上移除绑定的数据"
			            },
			            {
			                "id": "jQuery.removeData",
			                "text": "jQuery.removeData()",
			                "info": "在元素上移除绑定的数据"
			            }
			        ]
			    },
			    {
			        "text": "延迟对象（Deferred object）",
			        "children": [
			            {
			                "id": "deferred.always",
			                "text": "deferred.always()",
			                "info": " 当递延对象是解决或拒绝被调用添加处理程序。 "
			            },
			            {
			                "id": "deferred.done",
			                "text": "deferred.done()",
			                "info": " 添加处理程序被调用时，延迟对象得到解决。 "
			            },
			            {
			                "id": "deferred.fail",
			                "text": "deferred.fail()",
			                "info": " 添加处理程序被调用时，延迟对象将被拒绝。"
			            },
			            {
			                "id": "deferred.isRejected",
			                "text": "deferred.isRejected()",
			                "info": " 确定延迟对象是否已被拒绝。"
			            },
			            {
			                "id": "deferred.isResolved",
			                "text": "deferred.isResolved()",
			                "info": " 确定延迟对象是否已得到解决。"
			            },
			            {
			                "id": "deferred.notify",
			                "text": "deferred.notify()",
			                "info": "调用一个给定args的递延对象上的进行中的回调 （progressCallbacks）"
			            },
			            {
			                "id": "deferred.notifyWith",
			                "text": "deferred.notifyWith()",
			                "info": "根据给定的上下文和args递延对象上调用progressCallbacks 。"
			            },
			            {
			                "id": "deferred.pipe",
			                "text": "deferred.pipe()",
			                "info": "筛选器和/或链Deferreds的实用程序方法。 "
			            },
			            {
			                "id": "deferred.progress",
			                "text": "deferred.progress()",
			                "info": "当Deferred对象时生成进度通知时添加被访问处理程序。"
			            },
			            {
			                "id": "deferred.reject",
			                "text": "deferred.reject()",
			                "info": " 拒绝延迟对象，并根据给定的参数调用任何失败的回调函数。 "
			            },
			            {
			                "id": "deferred.rejectWith",
			                "text": "deferred.rejectWith()",
			                "info": " 拒绝延迟的对象，并根据给定的上下文和参数调用任何失败的回调函数。 "
			            },
			            {
			                "id": "deferred.resolve",
			                "text": "deferred.resolve()",
			                "info": " 解决递延对象，并根据给定的参数调用任何完成的回调函数。"
			            },
			            {
			                "id": "deferred.resolveWith",
			                "text": "deferred.resolveWith()",
			                "info": " 解决递延对象，并根据给定的上下文和参数调用任何完成的回调函数。"
			            },
			            {
			                "id": "deferred.state",
			                "text": "deferred.state()",
			                "info": " 确定一个Deferred对象的当前状态。"
			            },
			            {
			                "id": "deferred.then",
			                "text": "deferred.then()",
			                "info": " 添加处理程序被调用时，递延对象得到解决或者拒绝。"
			            },
			            {
			                "id": "promise",
			                "text": ".promise()",
			                "info": " 返回一个 Promise 对象用来观察当某种类型的所有行动绑定到集合，排队与否还是已经完成。 "
			            },
			            {
			                "id": "jQuery.when",
			                "text": "jQuery.when()",
			                "info": "提供一种方法来执行一个或多个对象的回调函数，延迟对象通常表示异步事件。"
			            }
			        ]
			    },
			    {
			        "text": "尺寸（Dimensions）",
			        "children": [
			            {
			                "id": "height",
			                "text": ".height()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值。"
			            },
			            {
			                "id": "innerHeight",
			                "text": ".innerHeight()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。"
			            },
			            {
			                "id": "innerWidth",
			                "text": ".innerWidth()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，但是不包括border。"
			            },
			            {
			                "id": "outerHeight",
			                "text": ".outerHeight()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，border和选择性的margin。"
			            },
			            {
			                "id": "outerWidth",
			                "text": ".outerWidth()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，border。"
			            },
			            {
			                "id": "width",
			                "text": ".width()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值。"
			            }
			        ]
			    },
			    {
			        "text": "效果（Effects）",
			        "children": [
			            {
			                "id": "animate",
			                "text": ".animate()",
			                "info": "执行一个CSS属性设置的自定义动画。"
			            },
			            {
			                "id": "clearQueue",
			                "text": ".clearQueue()",
			                "info": "从列队中移除所有未执行的项。"
			            },
			            {
			                "id": "delay",
			                "text": ".delay()",
			                "info": "设置一个延时来推迟执行队列中之后的项目。"
			            },
			            {
			                "id": "dequeue",
			                "text": ".dequeue()",
			                "info": "在匹配的元素上执行队列中的下一个函数。"
			            },
			            {
			                "id": "fadeIn",
			                "text": ".fadeIn()",
			                "info": "通过淡入的方式显示匹配元素。"
			            },
			            {
			                "id": "fadeOut",
			                "text": ".fadeOut()",
			                "info": "通过淡出的方式显示匹配元素。"
			            },
			            {
			                "id": "fadeTo",
			                "text": ".fadeTo()",
			                "info": "调整匹配元素的透明度。"
			            },
			            {
			                "id": "fadeToggle",
			                "text": ".fadeToggle()",
			                "info": "Display or hide the matched elements by animating their opacity."
			            },
			            {
			                "text": "jQuery.fx.interval",
			                "info": "该动画的频率（以毫秒为单位）。"
			            },
			            {
			                "text": "jQuery.fx.off",
			                "info": "全局禁用所有动画。"
			            },
			            {
			                "id": "hide",
			                "text": ".hide()",
			                "info": "隐藏匹配的元素。"
			            },
			            {
			                "id": "queue",
			                "text": ".queue()",
			                "info": "显示在匹配的元素上的已经执行的函数列队。"
			            },
			            {
			                "id": "show",
			                "text": ".show()",
			                "info": "显示匹配的元素"
			            },
			            {
			                "id": "slideDown",
			                "text": ".slideDown()",
			                "info": "用滑动动画显示一个匹配元素。"
			            },
			            {
			                "id": "slideToggle",
			                "text": ".slideToggle()",
			                "info": "用滑动动画显示或隐藏一个匹配元素。"
			            },
			            {
			                "id": "slideUp",
			                "text": ".slideUp()",
			                "info": "用滑动动画隐藏一个匹配元素。"
			            },
			            {
			                "id": "stop",
			                "text": ".stop()",
			                "info": "停止匹配元素当前正在运行的动画。"
			            },
			            {
			                "id": "toggle",
			                "text": ".toggle()",
			                "info": "显示或隐藏匹配元素。"
			            }
			        ]
			    },
			    {
			        "text": "事件（Events）",
			        "children": [
			            {
			                "id": "bind",
			                "text": ".bind()",
			                "info": "为一个元素绑定一个处理事件。"
			            },
			            {
			                "id": "blur",
			                "text": ".blur()",
			                "info": "为 \"blur\" 事件绑定一个处理函数，或者触发元素上的 \"blur\" 事件。"
			            },
			            {
			                "id": "change",
			                "text": ".change()",
			                "info": "为 \"change\" 事件绑定一个处理函数，或者触发元素上的 \"change\" 事件。"
			            },
			            {
			                "id": "click",
			                "text": ".click()",
			                "info": "为 \"click\" 事件绑定一个处理函数，或者触发元素上的 \"click\" 事件。"
			            },
			            {
			                "id": "dblclick",
			                "text": ".dblclick()",
			                "info": "为 \"dblclick\" 事件绑定一个处理函数，或者触发元素上的 \"dblclick\" 事件。"
			            },
			            {
			                "id": "delegate",
			                "text": ".delegate()",
			                "info": "为所有选择器匹配的元素附加一个处理一个或多个事件，现在或将来，基于一组特定的根元素。"
			            },
			            {
			                "id": "die",
			                "text": ".die()",
			                "info": "从元素中删除先前用.live()绑定的所有事件"
			            },
			            {
			                "id": "error",
			                "text": ".error()",
			                "info": "绑定一个事件处理器到“错误”JavaScript事件上。"
			            },
			            {
			                "id": "focus",
			                "text": ".focus()",
			                "info": "为 \"focus\" 事件绑定一个处理函数，或者触发元素上的 \"focus\" 事件。"
			            },
			            {
			                "id": "focusin",
			                "text": ".focusin()",
			                "info": "将一个事件函数绑定到\"focusin\" 事件。"
			            },
			            {
			                "id": "focusout",
			                "text": ".focusout()",
			                "info": "将一个事件函数绑定到\"focusout\" 事件。"
			            },
			            {
			                "id": "hover",
			                "text": ".hover()",
			                "info": "将二个事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行。"
			            },
			            {
			                "id": "keydown",
			                "text": ".keydown()",
			                "info": "为 \"keydown\" 事件绑定一个处理函数，或者触发元素上的 \"keydown\" 事件。"
			            },
			            {
			                "id": "keypress",
			                "text": ".keypress()",
			                "info": "为 \"keypress\" 事件绑定一个处理函数，或者触发元素上的 \"keypress\" 事件。"
			            },
			            {
			                "id": "keyup",
			                "text": ".keyup()",
			                "info": "为 \"keyup\" 事件绑定一个处理函数，或者触发元素上的 \"keyup\" 事件。"
			            },
			            {
			                "id": "live",
			                "text": ".live()",
			                "info": "附加一个事件处理器到符合目前选择器的所有元素匹配，现在和未来。"
			            },
			            {
			                "id": "load",
			                "text": ".load()",
			                "info": "为 \"load\" 事件绑定一个处理函数。"
			            },
			            {
			                "id": "mousedown",
			                "text": ".mousedown()",
			                "info": "为 \"mousedown\" 事件绑定一个处理函数，或者触发元素上的 \"mousedown\" 事件。"
			            },
			            {
			                "id": "mouseenter",
			                "text": ".mouseenter()",
			                "info": "为 mouse enters（鼠标进入） 事件绑定一个处理函数，或者触发元素上的 mouse enters（鼠标进入） 事件。"
			            },
			            {
			                "id": "mouseleave",
			                "text": ".mouseleave()",
			                "info": "为 mouse leaves（鼠标离开） 事件绑定一个处理函数，或者触发元素上的 mouse leaves（鼠标离开） 事件。"
			            },
			            {
			                "id": "mousemove",
			                "text": ".mousemove()",
			                "info": "为 \"mousemove\" 事件绑定一个处理函数，或者触发元素上的 \"mousemove\" 事件。"
			            },
			            {
			                "id": "mouseout",
			                "text": ".mouseout()",
			                "info": "为 \"mouseout\" 事件绑定一个处理函数，或者触发元素上的 \"mouseout\" 事件。"
			            },
			            {
			                "id": "mouseover",
			                "text": ".mouseover()",
			                "info": "为 \"mouseover\" 事件绑定一个处理函数，或者触发元素上的 \"mouseover\" 事件。"
			            },
			            {
			                "id": "mouseup",
			                "text": ".mouseup()",
			                "info": "为 \"mouseup\" 事件绑定一个处理函数，或者触发元素上的 \"mouseup\" 事件。"
			            },
			            {
			                "id": "off",
			                "text": ".off()",
			                "info": "移除事件处理程序。"
			            },
			            {
			                "id": "on",
			                "text": ".on()",
			                "info": "在选择元素上绑定一个或多个事件的事件处理函数。"
			            },
			            {
			                "id": "one",
			                "text": ".one()",
			                "info": "附加一个处理事件到元素。处理函数在每个元素上最多执行一次。"
			            },
			            {
			                "id": "jQuery.proxy",
			                "text": "jQuery.proxy()",
			                "info": "接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境。"
			            },
			            {
			                "id": "ready",
			                "text": ".ready()",
			                "info": "当DOM完全加载完成时，指定一个函数来执行。"
			            },
			            {
			                "id": "resize",
			                "text": ".resize()",
			                "info": "为 \"resize\" 事件绑定一个处理函数，或者触发元素上的 \"resize\" 事件。"
			            },
			            {
			                "id": "scroll",
			                "text": ".scroll()",
			                "info": "为 \"scroll\" 事件绑定一个处理函数，或者触发元素上的 \"scroll\" 事件。"
			            },
			            {
			                "id": "select",
			                "text": ".select()",
			                "info": "为 \"select\" 事件绑定一个处理函数，或者触发元素上的 \"select\" 事件。"
			            },
			            {
			                "id": "submit",
			                "text": ".submit()",
			                "info": "为 \"submit\" 事件绑定一个处理函数，或者触发元素上的 \"submit\" 事件。"
			            },
			            {
			                "id": "toggle",
			                "text": ".toggle()",
			                "info": "绑定两个或多个处理程序绑定到匹配的元素，用来执行在交替的点击。"
			            },
			            {
			                "id": "trigger",
			                "text": ".trigger()",
			                "info": "为给定的事件类型执行所有处理器和行为附加到匹配的元素"
			            },
			            {
			                "id": "triggerHandler",
			                "text": ".triggerHandler()",
			                "info": "Execute all handlers attached to an element for an event."
			            },
			            {
			                "id": "unbind",
			                "text": ".unbind()",
			                "info": "Remove a previously-attached event handler from the elements."
			            },
			            {
			                "id": "undelegate",
			                "text": ".undelegate()",
			                "info": "Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements."
			            },
			            {
			                "id": "unload",
			                "text": ".unload()",
			                "info": "Bind an event handler to the \"unload\" JavaScript event."
			            }
			        ]
			    },
			    {
			        "text": "表单（Forms）",
			        "children": [
			            {
			                "id": "blur",
			                "text": ".blur()",
			                "info": "为 \"blur\" 事件绑定一个处理函数，或者触发元素上的 \"blur\" 事件。"
			            },
			            {
			                "id": "change",
			                "text": ".change()",
			                "info": "为 \"change\" 事件绑定一个处理函数，或者触发元素上的 \"change\" 事件。"
			            },
			            {
			                "id": "focus",
			                "text": ".focus()",
			                "info": "为 \"focus\" 事件绑定一个处理函数，或者触发元素上的 \"focus\" 事件。"
			            },
			            {
			                "id": "jQuery.param",
			                "text": "jQuery.param()",
			                "info": "创建一个序列化的数组或对象，适用于一个URL 地址查询字符串或Ajax请求。 "
			            },
			            {
			                "id": "select",
			                "text": ".select()",
			                "info": "为 \"select\" 事件绑定一个处理函数，或者触发元素上的 \"select\" 事件。"
			            },
			            {
			                "id": "serialize",
			                "text": ".serialize()",
			                "info": "将用作提交的表单元素的值编译成字符串。"
			            },
			            {
			                "id": "serializeArray",
			                "text": ".serializeArray()",
			                "info": "将用作提交的表单元素的值编译成拥有name和value对象组成的数组。例如[ { name: a value: 1 }, { name: b value: 2 },...]"
			            },
			            {
			                "id": "submit",
			                "text": ".submit()",
			                "info": "为 \"submit\" 事件绑定一个处理函数，或者触发元素上的 \"submit\" 事件。"
			            },
			            {
			                "id": "val",
			                "text": ".val()",
			                "info": "获取匹配的元素集合中第一个元素的当前值。"
			            }
			        ]
			    },
			    {
			        "text": "文档操作（Manipulation）",
			        "children": [
			            {
			                "id": "addClass",
			                "text": ".addClass()",
			                "info": "为每个匹配的元素添加指定的类名 。"
			            },
			            {
			                "id": "after",
			                "text": ".after()",
			                "info": "根据参数设定在每一个匹配的元素之后插入内容。"
			            },
			            {
			                "id": "append",
			                "text": ".append()",
			                "info": "根据参数设定在每个匹配元素里面的末尾处插入内容。"
			            },
			            {
			                "id": "appendTo",
			                "text": ".appendTo()",
			                "info": "将匹配的元素插入到目标元素的最后面（里面的后面）。"
			            },
			            {
			                "id": "attr",
			                "text": ".attr()",
			                "info": "取得第一个匹配元素的属性值。"
			            },
			            {
			                "id": "before",
			                "text": ".before()",
			                "info": "根据参数设定在匹配元素的前面（外面）插入内容"
			            },
			            {
			                "id": "clone",
			                "text": ".clone()",
			                "info": "深度复制匹配的元素。"
			            },
			            {
			                "id": "css",
			                "text": ".css()",
			                "info": "为匹配的元素集合中获取第一个元素的样式属性值。"
			            },
			            {
			                "id": "detach",
			                "text": ".detach()",
			                "info": "从DOM中去掉所有匹配的元素。"
			            },
			            {
			                "id": "empty",
			                "text": ".empty()",
			                "info": "从DOM中移除所有节点的子节点。"
			            },
			            {
			                "id": "hasClass",
			                "text": ".hasClass()",
			                "info": "检查匹配的元素是否含有某个特定的类。"
			            },
			            {
			                "id": "height",
			                "text": ".height()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值。"
			            },
			            {
			                "id": "html",
			                "text": ".html()",
			                "info": "从匹配的第一个元素中获取HTML内容。"
			            },
			            {
			                "id": "innerHeight",
			                "text": ".innerHeight()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，但是不包括border。"
			            },
			            {
			                "id": "innerWidth",
			                "text": ".innerWidth()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，但是不包括border。"
			            },
			            {
			                "id": "insertAfter",
			                "text": ".insertAfter()",
			                "info": "在目标后面插入每个匹配的元素。"
			            },
			            {
			                "id": "insertBefore",
			                "text": ".insertBefore()",
			                "info": "在目标前插入所有匹配元素。"
			            },
			            {
			                "id": "offset",
			                "text": ".offset()",
			                "info": "为匹配的元素集合中获取第一个元素的当前坐标，相对于文档（document）。"
			            },
			            {
			                "id": "outerHeight",
			                "text": ".outerHeight()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算高度值,包括padding，border和选择性的margin。"
			            },
			            {
			                "id": "outerWidth",
			                "text": ".outerWidth()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值,包括padding，border。"
			            },
			            {
			                "id": "position",
			                "text": ".position()",
			                "info": "获取匹配元素中第一个元素的当前坐标，相对于offset parent的坐标。( offset parent指离该元素最近的而且被定位过的祖先元素 )"
			            },
			            {
			                "id": "prepend",
			                "text": ".prepend()",
			                "info": "将参数内容插入到每个匹配元素的前面（元素内部）。"
			            },
			            {
			                "id": "prependTo",
			                "text": ".prependTo()",
			                "info": "将所有元素插入到目标前面（元素内）。"
			            },
			            {
			                "id": "remove",
			                "text": ".remove()",
			                "info": "将匹配元素从DOM中删除。"
			            },
			            {
			                "id": "removeAttr",
			                "text": ".removeAttr()",
			                "info": "为匹配的元素集合中的每个元素中移除一个属性。"
			            },
			            {
			                "id": "removeClass",
			                "text": ".removeClass()",
			                "info": "移除每个匹配元素的一个，多个或全部样式。"
			            },
			            {
			                "id": "replaceAll",
			                "text": ".replaceAll()",
			                "info": "用匹配元素替换所有目标元素。"
			            },
			            {
			                "id": "replaceWith",
			                "text": ".replaceWith()",
			                "info": "用提供的内容替换所有匹配的元素。"
			            },
			            {
			                "id": "scrollLeft",
			                "text": ".scrollLeft()",
			                "info": "为匹配的元素集合中获取第一个元素的滚动条的水平位置。"
			            },
			            {
			                "id": "scrollTop",
			                "text": ".scrollTop()",
			                "info": "为匹配的元素集合中获取第一个元素的滚动条的垂直位置。"
			            },
			            {
			                "id": "text",
			                "text": ".text()",
			                "info": "得到匹配元素集合中每个元素的文本内容结合,包括他们的后代。"
			            },
			            {
			                "id": "toggleClass",
			                "text": ".toggleClass()",
			                "info": "在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或价值切换属性。即：如果存在（不存在）就删除（添加）一个类。"
			            },
			            {
			                "id": "unwrap",
			                "text": ".unwrap()",
			                "info": "将匹配元素的父级元素删除，保留自身（和兄弟元素，如果存在）在原来的位置。"
			            },
			            {
			                "id": "val",
			                "text": ".val()",
			                "info": "获取匹配的元素集合中第一个元素的当前值。"
			            },
			            {
			                "id": "width",
			                "text": ".width()",
			                "info": "为匹配的元素集合中获取第一个元素的当前计算宽度值。"
			            },
			            {
			                "id": "wrap",
			                "text": ".wrap()",
			                "info": "在每个匹配的元素外层包上一个html元素。"
			            },
			            {
			                "id": "wrapAll",
			                "text": ".wrapAll()",
			                "info": "在所有匹配元素外面包一层HTML结构。"
			            },
			            {
			                "id": "wrapInner",
			                "text": ".wrapInner()",
			                "info": "在匹配元素里的内容外包一层结构。"
			            }
			        ]
			    },
			    {
			        "text": "杂项（Miscellaneous）",
			        "children": [
			            {
			                "id": "data",
			                "text": ".data()",
			                "info": "在匹配远上绑定任意相关数据。"
			            },
			            {
			                "id": "each",
			                "text": ".each()",
			                "info": "遍历一个jQuery对象，为每一个匹配元素执行一个函数。"
			            },
			            {
			                "id": "get",
			                "text": ".get()",
			                "info": "通过jQuery对象获取对应的DOM元素。"
			            },
			            {
			                "id": "index",
			                "text": ".index()",
			                "info": "从匹配的元素中搜索给定元素的索引值，从0开始计数。"
			            },
			            {
			                "id": "jQuery.noConflict",
			                "text": "jQuery.noConflict()",
			                "info": "放弃jQuery控制的$的变量。"
			            },
			            {
			                "id": "jQuery.param",
			                "text": "jQuery.param()",
			                "info": "创建一个序列化的数组或对象，适用于一个URL 地址查询字符串或Ajax请求。"
			            },
			            {
			                "id": "removeData",
			                "text": ".removeData()",
			                "info": "在元素上移除绑定的数据"
			            },
			            {
			                "id": "size",
			                "text": ".size()",
			                "info": "返回的jQuery对象匹配的DOM元素的数量。"
			            },
			            {
			                "id": "toArray",
			                "text": ".toArray()",
			                "info": "返回一个包含jQuery对象集合中的所有DOM元素的数组。"
			            }
			        ]
			    },
			    {
			        "text": "位置（Offset）",
			        "children": [
			            {
			                "id": "offset",
			                "text": ".offset()",
			                "info": "为匹配的元素集合中获取第一个元素的当前坐标，相对于文档（document）。"
			            },
			            {
			                "id": "offsetParent",
			                "text": ".offsetParent()",
			                "info": "返回最近的被定过位的祖先元素。（祖先元素指该元素的上级元素，即包着它的外层元素）"
			            },
			            {
			                "id": "position",
			                "text": ".position()",
			                "info": "为匹配的元素集合中获取第一个元素的当前坐标，是相对于相对于父级元素的位移。"
			            },
			            {
			                "id": "scrollLeft",
			                "text": ".scrollLeft()",
			                "info": "为匹配的元素集合中获取第一个元素的滚动条的水平位置。"
			            },
			            {
			                "id": "scrollTop",
			                "text": ".scrollTop()",
			                "info": "为匹配的元素集合中获取第一个元素的滚动条的垂直位置。"
			            }
			        ]
			    },
			    {
			        "text": "插件编写（Plugin Authoring）",
			        "children": [
			            {
			                "id": "context",
			                "text": ".context",
			                "info": "返回传给jQuery()的原始的DOM节点内容；如果没有获得通过，那么上下文将可能是该文档。"
			            },
			            {
			            	"id":"jQuery.error",
			                "text": "jQuery.error",
			                "info": "接受一个字符串，并抛出包含这个字符串的异常。"
			            },
			            {
			                "id": "pushStack",
			                "text": ".pushStack()",
			                "info": "将一个DOM元素集合加入到jQuery栈。"
			            },
			            {
			                "id": "selector",
			                "text": ".selector",
			                "info": "返回传给jQuery()的原始选择器。"
			            }
			        ]
			    },
			    {
			        "text": "Plugins",
			        "children": []
			    },
			    {
			        "text": "属性（Properties）",
			        "children": [
			            {
			            	"id":"jQuery.browser",
			                "text": "jQuery.browser",
			                "info": "我们不推荐使用这个属性，请尝试使用功能检测来代替（见jQuery.support）。用来获取useragent的包含标志，读取 navigator.userAgent。虽然jQuery.browser不会从jQuery的未来版本被删除，竭力推荐应采用jQuery.support和适当的特征检测。"
			            },
			            {
			                "id": "context",
			                "text": ".context",
			                "info": "返回传给jQuery()的原始的DOM节点内容；如果没有获得通过，那么上下文将可能是该文档。"
			            },
			            {
			            	"id":"jQuery.fx.interval",
			                "text": "jQuery.fx.interval",
			                "info": "该动画的频率（以毫秒为单位）。"
			            },
			            {
			            	"id":"jQuery.fx.off",
			                "text": "jQuery.fx.off",
			                "info": "全局禁用所有动画效果"
			            },
			            {
			                "id": "length",
			                "text": ".length",
			                "info": "在jQuery对象中的元素数。"
			            },
			            {
			                "id": "selector",
			                "text": ".selector",
			                "info": "返回传给jQuery()的原始选择器。"
			            }
			        ]
			    },
			    {
			        "text": "选择器（Selectors）",
			        "children": [
			            {
			                "id": "all",
			                "text": "All Selector (\"*\")",
			                "info": "选择所有元素."
			            },
			            {
			            	"id":"animated",
			                "text": ":animated Selector",
			                "info": "选择所有正在执行动画效果的元素"
			            },

			            {
			            	"id":"attributeContains",
			                "text": "[name*=value] 属性选择器 ",
			                "info": "\n\t\t\t选择指定属性具有包含一个给定的子字符串的元素。（选择给定的属性是以包含某些值的元素）"
			            },
			            {
			            	"id":"attributeEndsWith",
			                "text": "[name$=value] 属性选择器",
			                "info": "选择指定属性是以给定值结尾的元素。这个比较是区分大小写的。"
			            },
			            {
			            	"id":"attributeEquals",
			                "text": "[name=value] 属性选择器",
			                "info": "选择指定属性是给定值的元素。"
			            },
			            {
			            	"id":"attributeNotEqual",
			                "text": "[name!=value] 属性选择器",
			                "info": "选择不存在指定属性，或者指定的属性值不等于给定值的元素。"
			            },
			            {
			            	"id":"attributeStartsWith",
			                "text": "[name^=value] 属性选择器",
			                "info": "选择指定属性是以给定字符串开始的元素"
			            },
			            {
			            	"id":"attributeMultiple",
			                "text": "[selector1][selector2][selectorN]",
			                "info": "复合属性选择器，需要同时满足多个条件时使用。"
			            },
			            {
			            	"id":"button",
			                "text": ":button Selector",
			                "info": "选择所有按钮元素和类型为按钮的元素。"
			            },
			            {
			            	"id":"checkbox",
			                "text": ":checkbox Selector",
			                "info": "选择所有类型为复选框的元素。"
			            },
			            {
			            	"id":"checked",
			                "text": ":checked Selector",
			                "info": "选择所有勾选的元素。"
			            },
			            {
			                "id": "child",
			                "text": "Child Selector (\"parent > child\")",
			                "info": "选择所有通过“parent”给定的元素直接子元素，该子元素“child”给定。"
			            },
			            {
			                "id": "class",
			                "text": "Class Selector (\".class\")",
			                "info": "选择给定类名的所有元素。"
			            },
			            {
			                "id": "contains",
			                "text": ":contains() Selector",
			                "info": "选择所有包含指定文本的元素。"
			            },
			            {
			                "id": "descendant",
			                "text": "Descendant Selector (\"ancestor descendant\")",
			                "info": "选择所有给定的祖先的后代元素。"
			            },
			            {
			            	"id":"disabled",
			                "text": ":disabled Selector",
			                "info": "选择所有被禁用的元素。"
			            },
			            {
			                "id": "element",
			                "text": "Element Selector (\"element\")",
			                "info": "选择所有给定标签名的元素。"
			            },
			            {
			            	"id":"empty_1",
			                "text": ":empty Selector",
			                "info": "选择所有没有子元素的元素（包括文本节点）。"
			            },
			            {
			            	"id":"enabled",
			                "text": ":enabled Selector",
			                "info": "选择所有可用的元素。"
			            },
			            {
			                "id": "eq_1",
			                "text": ":eq() Selector",
			                "info": "选择一个给定索引值的元素。（从 0 开始计数）"
			            },
			            {
			            	"id":"even",
			                "text": ":even Selector",
			                "info": "选择偶数元素，从 0 开始计数。同样查看奇数"
			            },
			            {
			            	"id":"file",
			                "text": ":file Selector",
			                "info": "选择所有类型为文件的元素。"
			            },
			            {
			            	"id":"focus_1",
			                "text": ":focus selector",
			                "info": "选择当前获取焦点的元素。"
			            },
			            {
			            	"id":"firstChild",
			                "text": ":first-child Selector",
			                "info": "选择所有父级元素下的第一个子元素。"
			            },
			            {
			            	"id":"first_1",
			                "text": ":first Selector",
			                "info": "选择第一个匹配的元素。"
			            },
			            {
			                "id": "gt",
			                "text": ":gt() Selector",
			                "info": "选择所有大于给定索引值的元素"
			            },
			            {
			                "id": "has_1",
			                "text": ":has() Selector",
			                "info": "选择含有选择器所匹配的至少一个元素的元素。"
			            },
			            {
			            	"id":"header",
			                "text": ":header Selector",
			                "info": "选择所有标题元素，像h1, h2, h3 等."
			            },
			            {
			            	"id":"hidden_1",
			                "text": ":hidden Selector",
			                "info": "选择所有隐藏的元素。"
			            },
			            {
			                "id": "id",
			                "text": "ID Selector (\"#id\")",
			                "info": "选择一个具有给定id属性的单个元素。 "
			            },
			            {
			            	"id":"image",
			                "text": ":image Selector",
			                "info": "选择所有图像类型的元素。"
			            },
			            {
			            	"id":"input",
			                "text": ":input Selector",
			                "info": "选择所有 input, textarea, select 和 button 元素."
			            },
			            {
			            	"id":"lastChild",
			                "text": ":last-child Selector",
			                "info": "选择所有父级元素下的最后一个子元素。"
			            },
			            {
			            	"id":"last_1",
			                "text": ":last Selector",
			                "info": "选择最后一个匹配的元素。"
			            },
			            {
			                "id": "lt",
			                "text": ":lt() Selector",
			                "info": "选择所有小于给定索引值的元素"
			            },
			            {
			                "id": "multiple",
			                "text": "Multiple Selector (\"selector1, selector2, selectorN\")",
			                "info": "将每一个选择器匹配到的元素合并后一起返回。"
			            },
			            {
			                "id": "next_1",
			                "text": "Next Adjacent Selector (\"prev + next\")",
			                "info": "选择所有紧接在 “prev” 元素后的 “next” 元素"
			            },
			            {
			                "id": "siblings_1",
			                "text": "Next Siblings Selector (\"prev ~ siblings\")",
			                "info": "匹配 “prev” 元素之后的所有 “siblings” 元素。"
			            },
			            {
			                "id": "not_1",
			                "text": ":not() Selector",
			                "info": "选择所有去除不匹配给定的选择器的元素。"
			            },
			            {
			                "id": "nthChild",
			                "text": ":nth-child() Selector",
			                "info": "选择其父元素下的第N个子或奇偶元素。"
			            },
			            {
			            	"id":"odd",
			                "text": ":odd Selector",
			                "info": "选择奇数元素，从 0 开始计数。同样查看偶数"
			            },
			            {
			            	"id":"onlyChild",
			                "text": ":only-child Selector",
			                "info": "选择所有其父元素下只有一个子元素的元素。"
			            },
			            {
			            	"id":"parent_1",
			                "text": ":parent Selector",
			                "info": "选择所有含有子元素或者文本的父级元素"
			            },
			            {
			            	"id":"password",
			                "text": ":password Selector",
			                "info": "选择所有类型为密码的元素。"
			            },
			            {
			            	"id":"radio",
			                "text": ":radio Selector",
			                "info": "选择所有类型为单选框的元素。"
			            },
			            {
			            	"id":"reset",
			                "text": ":reset Selector",
			                "info": "选择所有类型为重置的元素。"
			            },
			            {
			            	"id":"selected",
			                "text": ":selected Selector",
			                "info": "选择所有被选中的元素。"
			            },
			            {
			            	"id":"submit_1",
			                "text": ":submit Selector",
			                "info": "选择所有类型为提交的元素。"
			            },
			            {
			            	"id":"text_1",
			                "text": ":text Selector",
			                "info": "选择所有类型为文本的元素。"
			            },
			            {
			            	"id":"visible",
			                "text": ":visible Selector",
			                "info": "选择所有可见的元素。"
			            }
			        ]
			    },
			    {
			        "text": "遍历（Traversing）",
			        "children": [
			            {
			                "id": "add",
			                "text": ".add()",
			                "info": "添加元素到匹配的元素集合。"
			            },
			            {
			                "id": "andSelf",
			                "text": ".andSelf()",
			                "info": "添加先前的堆栈元素集合到当前组合。"
			            },
			            {
			                "id": "children",
			                "text": ".children()",
			                "info": "获得每个匹配元素集合元素的子元素，选择性筛选的选择器。"
			            },
			            {
			                "id": "closest",
			                "text": ".closest()",
			                "info": "从元素本身开始，逐级向上级元素匹配，并返回最先匹配的祖先元素。"
			            },
			            {
			                "id": "contents",
			                "text": ".contents()",
			                "info": "获得每个匹配元素集合元素的子元素，包括文字和注释节点。"
			            },
			            {
			                "id": "each",
			                "text": ".each()",
			                "info": "遍历一个jQuery对象，为每一个匹配元素执行一个函数。 "
			            },
			            {
			                "id": "end",
			                "text": ".end()",
			                "info": "终止在当前链的最新过滤操作，并返回匹配的元素集合为它以前的状态。"
			            },
			            {
			                "id": "eq",
			                "text": ".eq()",
			                "info": "获取匹配集合中指定的元素"
			            },
			            {
			                "id": "filter",
			                "text": ".filter()",
			                "info": "筛选出与指定表达式匹配的元素集合。"
			            },
			            {
			                "id": "find",
			                "text": ".find()",
			                "info": "获得当前元素匹配集合中每个元素的后代，选择性筛选的选择器。"
			            },
			            {
			                "id": "first",
			                "text": ".first()",
			                "info": "获取元素集合中第一个元素。"
			            },
			            {
			                "id": "has",
			                "text": ".has()",
			                "info": "保留包含特定后代的元素，去掉那些不含有指定后代的元素。"
			            },
			            {
			                "id": "is",
			                "text": ".is()",
			                "info": "用一个选择器检查当前匹配的元素集合，如果这些元素至少选择一个匹配，返回true。"
			            },
			            {
			                "id": "last",
			                "text": ".last()",
			                "info": "获取元素集合中最后一个元素。"
			            },
			            {
			                "id": "map",
			                "text": ".map()",
			                "info": "通过一个函数匹配当前集合中的每个元素,产生一个包含的返回值的jQuery新对象。"
			            },
			            {
			                "id": "next",
			                "text": ".next()",
			                "info": "取得一个包含匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。如果提供一个选择器，它检索下一个匹配选择器的兄弟元素。"
			            },
			            {
			                "id": "nextAll",
			                "text": ".nextAll()",
			                "info": "获得每个匹配元素集合中所有下面的同辈元素，选择性筛选的选择器。"
			            },
			            {
			                "id": "nextUntil",
			                "text": ".nextUntil()",
			                "info": "获取每个当前元素之后所有的同辈元素，但不包括选择器匹配的元素。"
			            },
			            {
			                "id": "not",
			                "text": ".not()",
			                "info": "删除匹配的元素集合中元素。"
			            },
			            {
			                "id": "offsetParent",
			                "text": ".offsetParent()",
			                "info": "返回最近的被定过位的祖先元素。（祖先元素指该元素的上级元素，即包着它的外层元素）"
			            },
			            {
			                "id": "parent",
			                "text": ".parent()",
			                "info": "获得集合中每个匹配元素的父级元素，选择性筛选的选择器。"
			            },
			            {
			                "id": "parents",
			                "text": ".parents()",
			                "info": "获得集合中每个匹配元素的祖先元素，选择性筛选的选择器。"
			            },
			            {
			                "id": "parentsUntil",
			                "text": ".parentsUntil()",
			                "info": "查找当前元素的所有的前辈元素，直到遇到选择器匹配的元素为止，不包括那个匹配到的元素。"
			            },
			            {
			                "id": "prev",
			                "text": ".prev()",
			                "info": "取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合。选择性筛选的选择器。"
			            },
			            {
			                "id": "prevAll",
			                "text": ".prevAll()",
			                "info": "获得集合中每个匹配元素的所有前面的兄弟元素，选择性筛选的选择器。"
			            },
			            {
			                "id": "prevUntil",
			                "text": ".prevUntil()",
			                "info": "获取每个元素但不包括选择器匹配的元素的所有前面的兄弟元素。"
			            },
			            {
			                "id": "siblings",
			                "text": ".siblings()",
			                "info": "获得匹配元素集合中每个元素的兄弟元素，选择性筛选的选择器。"
			            },
			            {
			                "id": "slice",
			                "text": ".slice()",
			                "info": "\n\t\t\t减少匹配元素集合由索引范围到指定的一个子集。"
			            }
			        ]
			    },
			    {
			        "text": "工具（Utilities）",
			        "children": [
			            {
			                "text": "jQuery.boxModel",
			                "info": "在jQuery 1.3中不建议使用。当前页面中浏览器是否使用标准盒模型渲染页面。 建议使用 jQuery.support.boxModel 代替。W3C CSS 盒模型。"
			            },
			            {
			                "text": "jQuery.browser",
			                "info": "我们不推荐使用这个属性，请尝试使用功能检测来代替（见jQuery.support）。用来获取useragent的包含标志，读取 navigator.userAgent。虽然jQuery.browser不会从jQuery的未来版本被删除，竭力推荐应采用jQuery.support和适当的特征检测。"
			            },
			            {
			                "id": "clearQueue",
			                "text": ".clearQueue()",
			                "info": "从列队中移除所有未执行的项。"
			            },
			            {
			                "id": "jQuery.contains",
			                "text": "jQuery.contains()",
			                "info": "检查一个DOM节点是否在另一个的DOM节点内。"
			            },
			            {
			                "id": "jQuery.data",
			                "text": "jQuery.data()",
			                "info": "在匹配远上绑定任意相关数据。"
			            },
			            {
			                "id": "dequeue",
			                "text": ".dequeue()",
			                "info": "在匹配的元素上执行队列中的下一个函数。"
			            },
			            {
			                "id": "jQuery.dequeue",
			                "text": "jQuery.dequeue()",
			                "info": "在匹配的元素上执行队列中的下一个函数。"
			            },
			            {
			                "id": "jQuery.each",
			                "text": "jQuery.each()",
			                "info": "一个通用的迭代函数，它可以用来无缝迭代对象和数组。数组和类似数组的对象通过一个长度属性（如一个函数的参数对象）来迭代数字索引，从0到length - 1。其他对象迭代通过其命名属性。"
			            },
			            {
			                "id": "jQuery.extend",
			                "text": "jQuery.extend()",
			                "info": "合并两个或更多的对象的内容汇集成到第一个对象。"
			            },
			            {
			                "id": "jQuery.globalEval",
			                "text": "jQuery.globalEval()",
			                "info": "在全局范围下执行一些JavaScript代码。"
			            },
			            {
			                "id": "jQuery.grep",
			                "text": "jQuery.grep()",
			                "info": "查找满足过滤功能数组元素。原始数组不受影响。"
			            },
			            {
			                "id": "jQuery.inArray",
			                "text": "jQuery.inArray()",
			                "info": "搜索数组中指定值并返回它的索引（如果没有找到则返回-1）。"
			            },
			            {
			                "id": "jQuery.isArray",
			                "text": "jQuery.isArray()",
			                "info": "确定的参数是否为一个数组。"
			            },
			            {
			                "id": "jQuery.isEmptyObject",
			                "text": "jQuery.isEmptyObject()",
			                "info": "检查对象是否为空（不包含任何属性）。"
			            },
			            {
			                "id": "jQuery.isFunction",
			                "text": "jQuery.isFunction()",
			                "info": "确定的参数是否为一个Javascript function对象。"
			            },
			            {
			                "id": "jQuery.isNumeric",
			                "text": "jQuery.isNumeric()",
			                "info": "确定它的参数是否是一个数字。"
			            },
			            {
			                "id": "jQuery.isPlainObject",
			                "text": "jQuery.isPlainObject()",
			                "info": "测试对象是否是纯粹的对象（通过 \"{}\" 或者 \"new Object\" 创建的）"
			            },
			            {
			                "id": "jQuery.isWindow",
			                "text": "jQuery.isWindow()",
			                "info": "确定参数是否为一个窗口（window对象）。"
			            },
			            {
			                "id": "jQuery.isXMLDoc",
			                "text": "jQuery.isXMLDoc()",
			                "info": "检查一个DOM节点是否在XML文档中（或者是一个XML文档）。"
			            },
			            {
			                "id": "jQuery.makeArray",
			                "text": "jQuery.makeArray()",
			                "info": "转换一个类似数组的对象成为真正的JavaScript数组。"
			            },
			            {
			                "id": "jQuery.map",
			                "text": "jQuery.map()",
			                "info": "将一个数组中的所有元素转换到另一个数组中。"
			            },
			            {
			                "id": "jQuery.merge",
			                "text": "jQuery.merge()",
			                "info": "合并两个数组内容到第一个数组。 "
			            },
			            {
			                "id": "jQuery.noop",
			                "text": "jQuery.noop()",
			                "info": "一个空函数。"
			            },
			            {
			                "text": "jQuery.parseJSON",
			                "info": "接受一个标准格式的 JSON 字符串，并返回解析后的 JavaScript 对象。"
			            },
			            {
			                "id": "jQuery.proxy",
			                "text": "jQuery.proxy()",
			                "info": "接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境。"
			            },
			            {
			                "id": "queue",
			                "text": ".queue()",
			                "info": "显示在匹配的元素上的已经执行的函数列队。"
			            },
			            {
			                "id": "jQuery.queue",
			                "text": "jQuery.queue()",
			                "info": "显示在匹配的元素上的已经执行的函数列队。"
			            },
			            {
			                "id": "jQuery.removeData",
			                "text": "jQuery.removeData()",
			                "info": "在元素上移除绑定的数据"
			            },
			            {
			                "text": "jQuery.support",
			                "info": "一组属性，它们代表了不同的浏览器功能或缺陷的存在的集合。"
			            },
			            {
			                "id": "jQuery.trim",
			                "text": "jQuery.trim()",
			                "info": "去掉字符串起始和结尾的空格。"
			            },
			            {
			                "id": "jQuery.type",
			                "text": "jQuery.type()",
			                "info": "确定JavaScript 对象的类型。"
			            },
			            {
			                "id": "jQuery.unique",
			                "text": "jQuery.unique()",
			                "info": "删除数组中重复元素。只处理删除DOM元素数组，而不能处理字符串或者数字数组。"
			            }
			        ]
			    }
			]
}