var webNum, nowWeb, centerL, centerT, circleW, circleH, sctnH, upH, upW, sideH, sideW, flashFlag;

$(document).ready(function() {
	$(".menu").children().eq(3).addClass("nowpage");
	localwee();
	var angle = 1; //圈旋转的角度
	var circleFlash = setInterval(function() {
		$(".circle").css({
			'transform': 'rotate(-' + angle + 'deg)',
			'-webkit-transform': 'rotate(-' + angle + 'deg)',
			'-moz-transform': 'rotate(-' + angle + 'deg)',
			'-ms-transform': 'rotate(-' + angle + 'deg)',
			'-o-transform': 'rotate(-' + angle + 'deg)',
		})
		angle += 1;
	}, 50)
	webNum = parseInt($("#webNum").val());
	nowWeb = 0;
	countHW();
	for (var i = 0; i < 4; i++) {
		giveInfo(i, i % webNum);
		var blockHandle = ".block" + i.toString();
		$(blockHandle).show();
	}
	getName();
	flashFlag = false;
	setBlock(0, 180);
	setBlock(1, 90);
	setBlock(2, 0);
	setBlock(3, 270);
})


function IEVersion() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
	var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
	var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion == 7) {
			return 7;
		} else if (fIEVersion == 8) {
			return 8;
		} else if (fIEVersion == 9) {
			return 9;
		} else if (fIEVersion == 10) {
			return 10;
		} else {
			return 6; //IE版本<=7
		}
	} else if (isEdge) {
		return 'edge'; //edge
	} else if (isIE11) {
		return 11; //IE11  
	} else {
		return -1; //不是ie浏览器
	}
}
var liu =IEVersion();
// console.log(liu)
//解决IE下箭头问题
if(liu !=-1)
{
	$(".planetandarrow .downarrow").css({
		'bottom':'-38%'
	})
}
$(window).on('load resize', function() {
	countHW();
	if (!flashFlag) {
		setBlock(0, 180);
		setBlock(1, 90);
		setBlock(2, 0);
		setBlock(3, 270);
	}
});

function countHW() {
	sw = $('.container').width();
	sh = $('.container').height();
	sctnH = $('.show_container').height();
	centerL = sw * 0.5;
	centerT = sctnH * 0.789;
	circleH = sh * 0.260;
	circleW = circleH * 417.5 / 288.5;
	upH = sctnH * 0.47;
	upW = upH * 2;
	sideH = sctnH * 0.402;
	sideW = sideH * 2;
}

function giveInfo(b, i) {
	var blockHandle = ".block" + b.toString();
	var infoHandle = ".number" + i.toString();
	$(blockHandle).children().eq(0).attr("src", $(infoHandle).children().eq(1).val());
	$(blockHandle).children().eq(1).attr("href", $(infoHandle).children().eq(2).val());
	$(blockHandle).children().eq(2).val($(infoHandle).children().eq(0).val());
}

function getName() {
	$(".webname").html($(".block1").children().eq(2).val());
}

// function setBlock(){
// if (flashFlag) return;
// $(".block0").css({
// "width":sideW,
// "height":sideH,
// "left":centerL-circleW-sideW/2,
// "top":centerT-0-sideH/2,
// })

// $(".block1").css({
// "width":upW,
// "height":upH,
// "left":centerL-upW/2,
// "top":centerT-circleH-upH/2,
// })

// $(".block2").css({
// "width":sideW,
// "height":sideH,
// "left":centerL+circleW-sideW/2,
// "top":centerT-0-sideH/2,
// })

// $(".block3").css({
// "width":0,
// "height":0,
// "left":centerL-0-0,
// "top":centerT+circleH-0,
// })
// }

function setBlock(handle, angle) {
	if (angle < 0)
		angle = angle + 360;
	var blockHandle = ".block" + handle.toString();
	var posL, posT, blockH, blockW;
	posL = centerL + Math.cos(Math.PI * angle / 180) * circleW;
	posT = centerT - Math.sin(Math.PI * angle / 180) * circleH;
	if (angle < 180) {
		blockH = sideH + (upH - sideH) * Math.sin(Math.PI * angle / 180);
		blockW = blockH * 2;
	} else {
		blockH = sideH + sideH * Math.sin(Math.PI * angle / 180);
		blockW = blockH * 2;
	}
	$(blockHandle).css({
		"width": blockW,
		"height": blockH,
		"left": posL - blockW / 2,
		"top": posT - blockH / 2,
	})
}

$(".uparrow").click(function() {
	if (!flashFlag) {
		flashFlag = true;
		nowWeb = (nowWeb + webNum - 1) % webNum;
		console.log(nowWeb);
		giveInfo(3, nowWeb);
		var angle = 0;
		var flashTime = 1000; // ms
		var fps = 50;
		var flash = setInterval(function() {
			angle += 90 / fps;
			if (angle > 90) {
				clearInterval(flash);
				setBlock(0, 90);
				setBlock(1, 0);
				setBlock(2, 270);
				setBlock(3, 180);
				flashFlag = false;
				$(".block0").addClass("tempclass");
				$(".block0").removeClass("block0");

				$(".block3").addClass("block0");
				$(".block3").removeClass("block3");

				$(".block2").addClass("block3");
				$(".block2").removeClass("block2");

				$(".block1").addClass("block2");
				$(".block1").removeClass("block1");

				$(".tempclass").addClass("block1");
				$(".tempclass").removeClass("tempclass");
				getName();
			} else {
				setBlock(0, 180 - angle);
				setBlock(1, 90 - angle);
				setBlock(2, 0 - angle);
				setBlock(3, 270 - angle);
			}
		}, flashTime / fps)
	}
})

$(".downarrow").click(function() {
	if (!flashFlag) {
		flashFlag = true;
		nowWeb = (nowWeb + webNum + 1) % webNum;
		console.log(nowWeb);
		giveInfo(3, (nowWeb + 2) % webNum);
		var angle = 0;
		var flashTime = 1000; // ms
		var fps = 50;
		var flash = setInterval(function() {
			angle += 90 / fps;
			if (angle > 90) {
				clearInterval(flash);
				setBlock(0, 270);
				setBlock(1, 180);
				setBlock(2, 90);
				setBlock(3, 0);
				flashFlag = false;
				$(".block0").addClass("tempclass");
				$(".block0").removeClass("block0");

				$(".block1").addClass("block0");
				$(".block1").removeClass("block1");

				$(".block2").addClass("block1");
				$(".block2").removeClass("block2");

				$(".block3").addClass("block2");
				$(".block3").removeClass("block3");

				$(".tempclass").addClass("block3");
				$(".tempclass").removeClass("tempclass");
				getName();
			} else {
				setBlock(0, 180 + angle);
				setBlock(1, 90 + angle);
				setBlock(2, 0 + angle);
				setBlock(3, 270 + angle);
			}
		}, flashTime / fps)
	}
})