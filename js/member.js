$(document).ready(function() {
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
			change_member(W,H);
		});
		change_member(W,H);
	} 
	else {//如果不是ie7，然而我还没写

	}
})
function change_member(W,H){
	$(".container").height(H);
	$(".star").width(0.8*W);
	$(".star").css({"left":0.1*W+"px","top":0.12*H+"px"})
	$(".member_show").css({"margin-top":0.05*H+"px"})
	$(".main").width(0.7*W);
	$(".time_star").width($(".main").width());
	$(".main").height($(".time_star").height());
	$(".main").css({"top":(H-$(".main").height())/2+50+"px","left":(W-$(".main").width())/2+"px"})
	var x=$(".main").width();
	var y=$(".main").height();
	$(".quan").css({"width":0.09*x+"px","height":0.09*x+"px"})
	$(".quan2011").css({"left":0.001*x+"px","top":0.36*y+"px"})
	$(".quan2012").css({"left":0.142*x+"px","top":0.08*y+"px"})
	$(".quan2013").css({"left":0.31*x+"px","top":0.60*y+"px"})
	$(".quan2014").css({"left":0.455*x+"px","top":0.278*y+"px"})
	$(".quan2015").css({"left":0.61*x+"px","top":0.01*y+"px"})
	$(".quan2016").css({"left":0.754*x+"px","top":0.4*y+"px"})
	$(".quan2017").css({"left":0.91*x+"px","top":0.246*y+"px"})
	$(".member_block").height(0.6*H);
	$(".member_block").width(0.5*W);
	$(".member_block").css({"top":(H-$(".member_block").height())/2+50+"px","left":(W-$(".member_block").width())/2+"px"})
	var ah=$(".member_block").height();
	var aw=$(".member_block").width();
	$(".lunbo").width(0.8*aw);
	$(".lunbo").height(0.6*ah);
	$(".lunbo").css({"top":(ah-$(".lunbo").height())/2+"px","left":(aw-$(".lunbo").width())/2+"px"});
	$(".grade").css({"left":(aw-$(".lunbo").width())/2+"px","margin-top":0.06*ah+"px"});
	$(".turnleft_row").width(0.02*aw+"px");
	$(".turnright_row").width(0.02*aw+"px");
	$(".turnleft_row").css({"top":(ah-$(".turnleft_row").height())/2+"px","left":0.02*aw+"px"});
	$(".turnright_row").css({"top":(ah-$(".turnright_row").height())/2+"px","right":0.02*aw+"px"});
	$(".turn_page").height(0.14*ah);
	$(".turn_page").width(0.25*aw);
	$(".turn_page").css({"bottom":0.02*ah+"px",left:(aw-$(".turn_page").width())/2+"px"});
	var turn_h=$(".turn_page").height();
	var turn_w=$(".turn_page").width();
	$(".page").width(0.2*turn_w);
	$(".page").height(turn_h);
	$(".page").css({"margin-right":0.05*turn_w+"px"});
	$(".qiu").height(0.12*turn_w);
	$(".qiu").width(0.12*turn_w);
	$(".uprow").width(0.1*turn_w);
	$(".downrow").width(0.1*turn_w);
	$(".qiu").css({"top":0.3*turn_h+"px","left":($(".page").width()-$(".qiu").width())/2+"px"});
	$(".uprow").css({"top":0.01*turn_h+"px","left":($(".page").width()-$(".uprow").width())/2+"px"});
	$(".downrow").css({"top":0.827*turn_h+"px","left":($(".page").width()-$(".uprow").width())/2+"px"});
	$(".member2016_block .turn_page").width(0.3*aw);
	$(".member2016_block .turn_page .page").css({"margin-right":0.04*turn_w+"px"});
	$(".member2016_block .turn_page .qiu").css({"top":0.3*turn_h+"px","left":($(".page").width()-$(".qiu").width())/2+"px"});


	var bh=$(".lunbo").height();
	var bw=$(".lunbo").width();
	$(".boy").height(bh);
	$(".boy").width(0.266*bw);
	$(".boy").css({"margin-right":0.1*bw+"px"});
	$(".portrait").width($(".boy").width());
	$(".portrait").height($(".boy").width());
	$(".cover").width(0.6*$(".portrait").width());
	$(".cover").height(0.6*$(".portrait").width());
	$(".cover").css({"padding":0.2*$(".portrait").width()+"px"})
	$(".name").css({"line-height":0.2*bh+"px"})
	$(".department").css({"line-height":0.1*bh+"px"})
}

$(window).on('load resize', function() {
    var $thisnav = $('.current-menu-item').offset().left;
    $('.menu-item').hover(function() {
      var $left = $(this).offset().left - $thisnav;
      var $width = $(this).outerWidth();
      var $start = 0;
      $('.wee').css({ 'left': $left+10 , 'width': $width-20 });
    }, function() {
      var $initwidth = $('.current-menu-item').width();
      $('.wee').css({ 'left': '10px' , 'width': $initwidth });
    });
  });//滑块
$(document).ready(function (){
	$(".float").animate({left:$(".main").width()+"px"},2500);
});
$(".portrait").hover(function(){
	$(this).children().eq(1).css({"display":"block"})
},function(){
	$(this).children().eq(1).css({"display":"none"})
})
$(".quan2011").click(function(){
	$(".member_block").css({"display":"none"});
	$(".member2011_block").css({"opacity":"0","display":"block"});
	$(".member2011_block").animate({opacity:"1"},700)
})
$(".quan2012").click(function(){
	$(".member_block").css({"display":"none"});
	$(".member2012_block").css({"opacity":"0","display":"block"});
	$(".member2012_block").animate({opacity:"1"},700)
})
$(".quan2013").click(function(){
	$(".member_block").css({"display":"none"});
	$(".member2013_block").css({"opacity":"0","display":"block"});
	$(".member2013_block").animate({opacity:"1"},700)
})
$(".quan2014").click(function(){
	$(".member_block").css({"display":"none"});
	$(".member2014_block").css({"opacity":"0","display":"block"});
	$(".member2014_block").animate({opacity:"1"},700)
})
$(".quan2015").click(function(){
	$(".member_block").css({"display":"none"});
	$(".member2015_block").css({"opacity":"0","display":"block"});
	$(".member2015_block").animate({opacity:"1"},700)
})
$(".quan2016").click(function(){
	$(".member_block").css({"display":"none"});
	$(".member2016_block").css({"opacity":"0","display":"block"});
	$(".member2016_block").animate({opacity:"1"},700)
})
$(".quan2017").click(function(){
	$(".member_block").css({"display":"none"});
	$(".member2017_block").css({"opacity":"0","display":"block"});
	$(".member2017_block").animate({opacity:"1"},700)
})
$(".cha").click(function(){
	$(".member_block").animate({opacity:"0"},700,function(){disappear()})
})

var flag=0;
var n,x=0,y=0;//x 记录当前页的,y记录被点击页
var point2012=1,point2013=1,point2014=1,point2015=1,point2016=1,point2017=1; 
function disappear(){
	$(".member_block").css({"display":"none"})
	$(".long").css({"left":"0px"});
	flag=0;
	point2012=1;point2013=1;point2014=1;point2015=1;point2016=1;point2017=1;
	$(".page1 .uprow").css({"display":"block"});
	$(".page1 .downrow").css({"display":"block"});
	$(".page2 .uprow").css({"display":"none"});
	$(".page2 .downrow").css({"display":"none"});
	$(".page3 .uprow").css({"display":"none"});
	$(".page3 .downrow").css({"display":"none"});
	$(".page4 .uprow").css({"display":"none"});
	$(".page4 .downrow").css({"display":"none"});
	$(".page2 .uprow").css({"display":"none"});
	$(".page2 .downrow").css({"display":"none"});
}
$(".qiu1").click(function(){
	var j=0;
	y=1;
	for(j=0;j<5;j++){
		if($(this).parent().parent().children().eq(j).children().eq(1).css("display")=="block"){
			x=j+1;
		}
	}
	if($(this).parent().parent().parent().hasClass("member2012_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2012+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2013_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2013+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2014_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2014+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2015_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2015+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2016_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2016+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2017_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2017+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
})
$(".qiu2").click(function(){
	var j=0;
	y=2;
	for(j=0;j<5;j++){
		if($(this).parent().parent().children().eq(j).children().eq(1).css("display")=="block"){
			x=j+1;
		}
	}
	if($(this).parent().parent().parent().hasClass("member2012_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2012+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2013_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2013+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2014_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2014+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2015_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2015+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2016_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2016+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2017_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2017+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
})
$(".qiu3").click(function(){
	var j=0;
	y=3;
	for(j=0;j<5;j++){
		if($(this).parent().parent().children().eq(j).children().eq(1).css("display")=="block"){
			x=j+1;
		}
	}
	if($(this).parent().parent().parent().hasClass("member2012_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2012+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2013_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2013+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2014_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2014+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2015_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2015+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2016_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2016+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2017_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2017+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
})
$(".qiu4").click(function(){
	var j=0;
	y=4;
	for(j=0;j<5;j++){
		if($(this).parent().parent().children().eq(j).children().eq(1).css("display")=="block"){
			x=j+1;
		}
	}
	if($(this).parent().parent().parent().hasClass("member2012_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2012+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2013_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2013+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2014_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2014+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2015_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2015+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2016_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2016+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2017_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2017+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
})
$(".qiu5").click(function(){
	var j=0;
	y=5;
	for(j=0;j<5;j++){
		if($(this).parent().parent().children().eq(j).children().eq(1).css("display")=="block"){
			x=j+1;
		}
	}
	if($(this).parent().parent().parent().hasClass("member2012_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2012+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2013_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2013+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2014_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2014+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2015_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2015+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2016_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2016+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
	else if($(this).parent().parent().parent().hasClass("member2017_block")&&flag==0){
		var left=parseInt($(this).parent().parent().parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().parent().parent().children().eq(4).children().eq(0).animate({left:left-(y-x)*($(".lunbo").width()+0.1*$(".lunbo").width())+"px"},1000,function(){flag=0;})
		point2017+=y-x;
		$(this).parent().parent().children().eq(x-1).children().eq(1).css("display","none");
		$(this).parent().parent().children().eq(x-1).children().eq(2).css("display","none");
		$(this).next().css({"display":"block"});
		$(this).next().next().css({"display":"block"});
	}
})
$(".turnright").click(function(){
	if($(this).parent().hasClass("member2012_block")&&point2012<3&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left-$(".lunbo").width()-0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2012+=1;
		var i=0;
		for(i=0;i<3;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2012-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2012-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2013_block")&&point2013<3&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left-$(".lunbo").width()-0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2013+=1;
		var i=0;
		for(i=0;i<3;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2013-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2013-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2014_block")&&point2014<3&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left-$(".lunbo").width()-0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2014+=1;
		var i=0;
		for(i=0;i<3;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2014-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2014-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2015_block")&&point2015<2&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left-$(".lunbo").width()-0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2015+=1;
		var i=0;
		for(i=0;i<2;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2015-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2015-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2016_block")&&point2016<5&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left-$(".lunbo").width()-0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2016+=1;
		var i=0;
		for(i=0;i<5;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2016-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2016-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2017_block")&&point2017<4&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left-$(".lunbo").width()-0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2017+=1;
		var i=0;
		for(i=0;i<4;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2017-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2017-1).children().eq(2).css({"display":"block"});
	}
})
$(".turnleft").click(function(){
	
	if($(this).parent().hasClass("member2012_block")&&point2012>1&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left+$(".lunbo").width()+0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2012-=1;
		var i=0;
		for(i=0;i<3;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2012-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2012-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2013_block")&&point2013>1&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left+$(".lunbo").width()+0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2013-=1;
		var i=0;
		for(i=0;i<3;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2013-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2013-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2014_block")&&point2014>1&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left+$(".lunbo").width()+0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2014-=1;
		var i=0;
		for(i=0;i<3;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2014-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2014-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2015_block")&&point2015>1&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left+$(".lunbo").width()+0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2015-=1;
		var i=0;
		for(i=0;i<2;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2015-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2015-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2016_block")&&point2016>1&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left+$(".lunbo").width()+0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2016-=1;
		var i=0;
		for(i=0;i<5;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2016-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2016-1).children().eq(2).css({"display":"block"});
	}
	else if($(this).parent().hasClass("member2017_block")&&point2017>1&&flag==0){
		var left=parseInt($(this).parent().children().eq(4).children().eq(0).css("left"));
		flag=1;
		$(this).parent().children().eq(4).children().eq(0).animate({left:left+$(".lunbo").width()+0.1*$(".lunbo").width()+"px"},1000,function(){flag=0;})
		point2017-=1;
		for(i=0;i<4;i++){
			$(this).parent().children().eq(5).children().eq(i).children().eq(1).css({"display":"none"});
			$(this).parent().children().eq(5).children().eq(i).children().eq(2).css({"display":"none"});
		}
		$(this).parent().children().eq(5).children().eq(point2017-1).children().eq(1).css({"display":"block"});
		$(this).parent().children().eq(5).children().eq(point2017-1).children().eq(2).css({"display":"block"});
	}
})

