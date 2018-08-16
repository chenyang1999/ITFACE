var allInterval=[],isFlashing=[],sw,sh; // screenwidth and screenheight;

function localwee(){
	var timeout = setTimeout(function(){
		window.clearInterval(allInterval[".wee"]);
		isFlashing[".wee"]=false;
		var left = $('.nowpage').position().left + 10;
		var width = $('.nowpage').width();
		//console.log(width);
		//console.log(left);
		$('.wee').css({ 'left': left , 'width': width });
	},100);
}

$(window).on('load', function() {
    sw = $('.container').width();
	sh = $('.container').height();
});

// $(window).on('resize', function() {
	$(window).resize(function(event) {
		sw = $('.container').width();
	sh = $('.container').height();
	// window.clearInterval(allInterval['.wee']);
	localwee();
	// });
    
});

function slideFlash(handle,aimLeft,aimTop,aimWidth,aimHeight){  // top left 都是相对父元素的 fps是帧率
	fps=50;
	var startLeft=$(handle).position().left;
	var startTop=$(handle).position().top;
	var startWidth=$(handle).width();
	var startHeight=$(handle).height();
	var startsw=sw,startsh=sh;
	window.clearInterval(allInterval[handle]);
	isFlashing[handle]=true;
	allInterval[handle]=window.setInterval(flash,750/fps);
	var i=0;
	function flash() {
		i++;
		var nowLeft = (aimLeft - startLeft) * Math.cos(Math.PI / 2 * i / fps - Math.PI / 2) + startLeft;
		var nowTop = (aimTop - startTop) * Math.cos(Math.PI / 2 * i / fps - Math.PI / 2) + startTop;
		var nowWidth = (aimWidth - startWidth) * Math.cos(Math.PI / 2 * i / fps - Math.PI / 2) + startWidth;
		var nowHeight = (aimHeight - startHeight) * Math.cos(Math.PI / 2 * i / fps - Math.PI / 2) + startHeight;
		// if (i<20) console.log(i, (aimLeft - startLeft) * Math.cos(Math.PI / 2 * i / fps - Math.PI / 2));
		$(handle).css({'left': nowLeft*sw/startsw , 'top': nowTop*sh/startsh , 'width': nowWidth*sw/startsw , 'height': nowHeight*sh/startsh });
		if (i===fps){
			isFlashing[handle]=false;
			window.clearInterval(allInterval[handle]);
		}
    }
}

$('.menu-item').hover(function() {
	var aimLeft = $(this).position().left + 10;
	var aimWidth = $(this).width();

	var aimTop=$('.wee').offset().top;
	var aimHeight=2;
	slideFlash('.wee',aimLeft,aimTop,aimWidth,aimHeight);
}, function() {
	var aimLeft = $('.nowpage').position().left + 10;
	var aimWidth = $('.nowpage').width();
	var aimTop=$('.wee').offset().top;
	var aimHeight=2;
	slideFlash('.wee',aimLeft,aimTop,aimWidth,aimHeight);
});