$(document).ready(function() {
		function movieFormatResult(movie) {
        	var markup = "<table class='movie-result'><tr>";
        		markup += "<td class='movie-info'><div class='movie-title'>" + movie.text + "</div>";
        	if (movie.info != undefined) {
        		markup += "<div class='movie-synopsis'>" + movie.info + "</div>";
        	}
	        markup += "</td></tr></table>"
	        return markup;
	    }

		$("#e1").select2({
            placeholder: "请选择",
            allowClear: false,//是否可也关闭 默认为true
          	data:preload_data,
          	formatResult: movieFormatResult //进行返回值过滤 方便布局 
        }).on("change",function(e){
        	$('#iframe_').attr({
        		src: 'iframe/'+e.added.id+'.html'
        	});
        
        }).on('select2-open',function(e){
            $("#e1").select2("val", "");
         
        });
        $("#e1").select2('open');
});