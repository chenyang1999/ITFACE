var userAgent = navigator.userAgent.toLowerCase();
// Figure out what browser is being used
jQuery.browser = {
	version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
	safari: /webkit/.test(userAgent),
	opera: /opera/.test(userAgent),
	msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
	mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
}; //通过正则去判断当前使用的哪种内核的浏览器
var H, W;
if ($.browser.version != "7.0") //判断是不是IE7 ，IE7下不支持“$(window).width()”
{
	H = $(window).height(); //获得窗口宽度
	W = $(window).width(); //获得窗口高度

	$(window).resize(function() { //浏览器缩放重新获得窗口宽高
		H = $(window).height();
		W = $(window).width();

	});

	$(".container").height(H);
	$(".container").width(W);


	$(window).resize(function() { //浏览器缩放重新获得窗口宽高
		$(".container").height(H);
		$(".container").width(W);

	})
} else {

}