/*
* jQuery ��ʽ�����ߣ������� jehn jehn@vip.qq.com
*
* Copyright (c) 2008 Shawphy (shawphy.com)
* Dual licensed under the MIT and GPL licenses:
*
* $Id: jquery-doc-split.js 191 2009-01-29 14:01:51Z Shawphy $
*/
jQuery(function ($) {
    $('.longdesc,.desc:not(:has(.longdesc))').each(function () {
        $(this).html("<p>"
				+ ($(this).children("pre").html() || "")
					.replace(/\n\s*\n/g, "</p><p>")
					.replace(/&lt;/g, "<")
					.replace(/&gt;/g, ">")
					.replace(/&amp;/g, "&")
					.replace(/'''(.*?)'''/g, "<strong>$1</strong>")
				+ "</p>");
    });
    //��ӷ���Ŀ¼��ť 
    $('body').append('<a href="cheatsheet.html" title="���� jQuery���Ĳο��ֲ� �ٲ��" style="position:fixed;top:50px;right:5px;text-decoration:none;font-size:14px;font-weight:bold;">�ٲ��</a>' +
'<a href="#content" id="pzjTop" style="position:fixed;bottom:5px;right:5px;text-decoration:none;">ҳ����</a>');
    $("#pzjTop").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height())
            $("#pzjTop").show();
        else
            $("#pzjTop").hide();
    });
});


