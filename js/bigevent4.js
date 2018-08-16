var hxFlash = [],
	hxH, hxW, speed;
$(document).ready(function() {
	$(".menu").children().eq(4).addClass("nowpage");
	localwee();
	speed = 5;
	for (var i = 0; i < 8; i++) {
		hxFlash[i] = false;
	}
	var hx_timeout1 = setTimeout(function() {
		hxFlash[0] = true;
		restart(0);
	}, Math.random() * 1000);

	var hx_timeout2 = setTimeout(function() {
		hxFlash[1] = true;
		restart(1);
	}, Math.random() * 1000);

	var hx_timeout3 = setTimeout(function() {
		hxFlash[2] = true;
		restart(2);
	}, Math.random() * 1000);
	var hx_timeout4 = setTimeout(function() {
		hxFlash[3] = true;
		restart(3);
	}, Math.random() * 1000);
	var hx_timeout5 = setTimeout(function() {
		hxFlash[4] = true;
		restart(4);
	}, Math.random() * 1000);
	var hx_timeout6 = setTimeout(function() {
		hxFlash[5] = true;
		restart(5);
	}, Math.random() * 1000);
	var hx_timeout7 = setTimeout(function() {
		hxFlash[6] = true;
		restart(6);
	}, Math.random() * 1000);
	var hx_timeout8 = setTimeout(function() {
		hxFlash[7] = true;
		restart(7);
	}, Math.random() * 1000);
	var hx_timeout9 = setTimeout(function() {
		hxFlash[8] = true;
		restart(8);
	}, Math.random() * 1000);

	var hxFlashInterval = setInterval(function() {
		move();
	}, 25);

	var hxInterval = setInterval(function() {
		check();
	}, 500);
})

$(window).on('load resize', function() {
	sw = $('.container').width();
	sh = $('.container').height();

	hxH = $(".hx").height();
	hxW = $(".hx").width();
});

function check() {
	var nowLeft;
	var nowTop;
	for (var i = 0; i < 8; i++) {
		nowLeft = $(".father").children().eq(i).offset().left;
		nowTop = $(".father").children().eq(i).offset().top;
		// console.log(i,nowLeft,nowTop);
		if (nowLeft <= -hxW || nowTop > sh) restart(i);
	}
}

function restart(i) {
	var r = Math.random(),
		k = sh / (sw + sh);
	var l, t;
	if (r > k) {
		l = sw * (r - k) / (1 - k);
		t = -hxH;
	} else {
		l = -hxW;
		t = sh * (r) / (k);
	}
	$(".father").children().eq(i).css({
		"left": l,
		"top": t,
		"display": "block",
	})
}

function move() {
	for (var i = 0; i < 8; i++) {
		if (!hxFlash[i]) continue;
		nowLeft = $(".father").children().eq(i).offset().left;
		nowTop = $(".father").children().eq(i).offset().top;
		$(".father").children().eq(i).css({
			"left": nowLeft + speed,
			"top": nowTop + speed,
		})
	}
}
$baller = $(".ball");
$pole = $(".plate .pole"); // 杆子
$board = $(".plate .board"); //牌子
$plate = $(".plate") // all
$eventboard = $(".yearevent"); //
$eventtext = $(".eventwrap .index_topic"); //

var H, W;
var h, w, r;
var plate_L, //记录牌子杆子的长度
	Degree = 12, //记录牌子偏转角度
	plate_H; // 记录牌子的高度
var boardw; //记录打开以后的视窗宽度

H = $(window).height(); //获得窗口宽度
W = $(window).width(); //获得窗口高度
if (W < 600) {
	W = 600
}
w = W * 0.67; //星球高度
// h = $(".background img").height(); //星球宽度
h = W * 0.67 / 3.79;


if (W > 1500) {
	boardw = 1067;
} else if (W > 1366) {
	boardw = 900;
} else if (W > 1200) {
	boardw = 800;
} else if (W > 980) {
	boardw = 700;
} else {
	boardw = 550;
}



$(window).resize(function() { //浏览器缩放重新获得窗口宽高
	H = $(window).height();
	W = $(window).width();

	if (W < 600) {
		W = 600
	}
	w = W * 0.67; //星球高度
	h = W * 0.67 / 3.79; //星球宽度

	if (W > 1500) {
		boardw = 1067;
	} else if (W > 1366) {
		boardw = 900;
	} else if (W > 1200) {
		boardw = 800;
	} else if (W > 980) {
		boardw = 700;
	} else {
		boardw = 550;
	}


});

$(".container").height(H);
$(".container").width(W);

// h = W * 0.67;
$(".background img").width(w);
r = (h / 2) + (w * w / (8 * h)); // 星球半径
plate_H = 0.0375 * W;
plate_L = 0.078 * W;
$board.css({
	'width': W * 0.061 + 'px',
	'margin-left': -0.0305 * W + 'px',
	'height': 0.0375 * W + 'px',
	'line-height': 0.0375 * W + 'px',
	'bottom': h - 0 + plate_L,
	'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'

})

$eventboard.css({
	'width': W * 0.061 + 'px',
	'height': 0.0375 * W + 'px',
	'bottom': h - 0 + plate_L,
	'margin-left': -0.0305 * W + 'px',
	'line-height': 0.0375 * W + 'px',
	'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'

})

//控制牌子相关参数
$pole.css({
	'bottom': h - r,
	'height': plate_L,
	'border-bottom': r + 'px solid white'
})
//控制牌子的角度
initial_degree();

//将牌子的偏转坐标移到正确的位置
// $(".line").css({
// 	'margin-top': 0.015 * H
// })

$(".word_wrap").css({
	'bottom': 0.096 * W + 'px'
})



$(window).resize(function() { //浏览器缩放重新获得窗口宽高
	$(".container").height(H);
	$(".container").width(W);

	// w = W * 0.67;
	$(".background img").width(w);
	$board.css({
		'width': W * 0.061 + 'px',
		'margin-left': -0.0305 * W + 'px',
		'height': 0.0375 * W + 'px',
		'line-height': 0.0375 * W + 'px'

	})
	r = (h / 2) + (w * w / (8 * h)); // 星球半径
	plate_H = 0.0375 * W;
	plate_L = 0.078 * W;
	$board.css({
		'width': W * 0.061 + 'px',
		'margin-left': -0.0305 * W + 'px',
		'height': 0.0375 * W + 'px',
		'line-height': 0.0375 * W + 'px',
		'bottom': h - 0 + plate_L,
		'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'

	})

	//控制牌子相关参数
	$pole.css({
		'bottom': h - r,
		'height': plate_L,
		'border-bottom': r + 'px solid white'
	})
	//控制牌子的角度
	// initial_degree();
	var Isbig = false;
	if ($eventboard.css('display') != 'none') {

		Isbig = true;

	}


	if (Isbig == false) {

		$eventboard.css({
			'width': W * 0.061 + 'px',
			'height': 0.0305 * W + 'px',
			'bottom': h - 0 + plate_L,
			'margin-left': -0.0305 * W + 'px',
			'line-height': 0.0305 * W + 'px',
			'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'
		})
	} else {

		$eventboard.css({
			'width': boardw + 'px',
			'height': '62.3%',
			'margin-left': -boardw / 2 + 'px',
			'margin-bottom': -0.3118 * H,
			'bottom': '50%'
		})
		$eventtext.css({
			'height': parseInt($eventboard.height()) * 0.68,
			'margin-top': '-' + parseInt($eventtext.height()) * 0.5 + 'px'
			// 'margin-bottom': -0.3118*H
		})

	}



	//将牌子的偏转坐标移到正确的位置


	$(".word_wrap").css({
		'bottom': 0.096 * W + 'px'
	})



});



var fall_length = 200;
//牌子刚载入的函数
//按照自由落体函数
function displayplate() {
	//先把所有的位置都设置好
	$pole.css({
		'border-bottom': r + fall_length + 'px solid white',
		'z-index': '1'
	})
	$board.css({
		'bottom': h - 0 + fall_length + plate_L,
		'transform-origin': 'center ' + (plate_H + fall_length + r + plate_L) + 'px'
	})


}


function display(index) {

	var flag = true;
	var fall = fall_length;
	var fall_v = 0; // 记录下落的速度
	var t2 = setInterval(function() {
		$pole.eq(index).css({
			'border-bottom': r + fall + 'px solid white',

		})
		$board.eq(index).css({
			'bottom': h - 0 + fall + plate_L,
			'transform-origin': 'center ' + (plate_H + fall + r + plate_L) + 'px'
		})
		$plate.eq(index).show();
		fall_v += 10;
		fall -= fall_v;
		// console.log("fall"+fall)
		if (fall <= 0) {
			clearInterval(t2);
			if (flag && index < 4) {

				setTimeout(function() {
					display(index + 1);
					flag = false;
				}, 30);

			}
			$pole.css({
				'border-bottom': r + 'px solid white'
			})
			$board.css({
				'bottom': h - 0 + plate_L,
				'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'
			})
		}
	}, 20)

}

displayplate();
display(0);


//该函数用来控制初始偏转的角度
function initial_degree() {
	//初始化杆子

	$pole.eq(0).css({
		'transform': 'rotate(' + (-Degree * 2) + 'deg)'
	})
	$pole.eq(1).css({
		'transform': 'rotate(' + (-Degree) + 'deg)'
	})

	$pole.eq(3).css({
		'transform': 'rotate(' + Degree + 'deg)'
	})
	$pole.eq(4).css({
		'transform': 'rotate(' + 2 * Degree + 'deg)'
	})

	//初始化牌子

	$board.eq(0).css({
		'transform': 'rotate(' + (-Degree * 2) + 'deg)'
	})
	$board.eq(1).css({
		'transform': 'rotate(' + (-Degree) + 'deg)'
	})

	$board.eq(3).css({
		'transform': 'rotate(' + Degree + 'deg)'
	})
	$board.eq(4).css({
		'transform': 'rotate(' + 2 * Degree + 'deg)'
	})
}



//用来控制旋转
//以顺时针为正 v


//a为初始位置，n为其对应的index，len为旋转的长度，b为最终要旋转到的位置
function rorate_plate(a, n, length) {

	var b; //记录最终到达的角度
	b = a + length;
	// console.log("第" + n + "个元素b=" + b + "a=" + a)
	var v = 1; // 可以理解为速度
	//首先要确定是否要移动
	if (a != b) {

		var t = setInterval(function() {
			//这里分两种情况，一种是往左一种是往右
			if (a < b) {
				if (a == b - v) {

					// console.log("第"+n+"个元素clear t")
					clearInterval(t)
				}
				a += v;
			} else if (a > b) {
				if (a == b + v) {

					// console.log("第"+n+"个元素clear t")
					clearInterval(t)
				}
				a -= v;
			}

			// console.log("第"+n+"个元素"+a+","+"b-v="+(b-v))
			//旋转牌子和杆子
			$pole.eq(n).css({
				'transform': 'rotate(' + a + 'deg)'
			})
			$board.eq(n).css({
				'transform': 'rotate(' + a + 'deg)'
			})
		}, 20)
	}

}



//转换一下矩阵的值，将其转换成角度

function getmatrix(a, b, c, d, e, f) {
	var aa = Math.round(180 * Math.asin(a) / Math.PI);
	var bb = Math.round(180 * Math.acos(b) / Math.PI);
	var cc = Math.round(180 * Math.asin(c) / Math.PI);
	var dd = Math.round(180 * Math.acos(d) / Math.PI);
	var deg = 0;
	if (aa == bb || -aa == bb) {
		deg = dd;
	} else if (-aa + bb == 180) {
		deg = 180 + cc;
	} else if (aa + bb == 180) {
		deg = 360 - cc || 360 - dd;
	}
	return deg >= 360 ? 0 : deg;
	//return (aa+','+bb+','+cc+','+dd);  
}



//用来控制点击时牌子的旋转
//应该获取这个牌子现在的角度，以及它和0度的差值
//现在用另外一个len2和u2一直保存最左边的牌子的位置
$(".plate").click(function() {
	var index = $plate.index(this);

	//如果一开始打开了牌子
	if ($(".yearevent").css('display') == 'block') {
		function plateoc() {
			closeevent();
			click_degree(index);
			//旋转牌子以后打开窗口
			var mathlen = Math.abs(len);
			var timelen = mathlen / Degree;
			setTimeout(function() {
				displayevent(index);
			}, 400 * timelen + 100);
		}

	} else {
		// countdegree(index);
		click_degree(index);
		//旋转牌子以后打开窗口
		var mathlen = Math.abs(len);
		var timelen = mathlen / Degree;
		setTimeout(function() {
			displayevent(index);
		}, 400 * timelen + 100);
	}



})


var len;
var len2;
//先算出偏转角度，获得角度以后调用函数rotate旋转牌子
function click_degree(index) {
	var u2;
	var u = $board.eq(index).css('transform');
	if (u != "none") {
		var values = u.split('(')[1].split(')')[0].split(',');
		var a = values[0];
		var b = values[1];
		var c = values[2];
		var d = values[3];
		u = getmatrix(a, b, c, d);
	} else {
		u = 0;
	}
	//返回了两种值，一种是在圆的左半部分，一种是在右半部分
	//根据两种不同的情况分类
	if (u > 180) {
		len = u - 360;
	} else {
		len = u;
	}


	u2 = $board.eq(0).css('transform');
	if (u2 != "none") {
		var values = u2.split('(')[1].split(')')[0].split(',');
		var a = values[0];
		var b = values[1];
		var c = values[2];
		var d = values[3];
		u2 = getmatrix(a, b, c, d);
	} else {
		u2 = 0;
	}
	//返回了两种值，一种是在圆的左半部分，一种是在右半部分
	//根据两种不同的情况分类
	if (u2 > 180) {
		len2 = u2 - 360;
	} else {
		len2 = u2;
	}


	//
	$plate = $(".plate");
	var location = [];
	location[0] = len2;
	location[1] = len2 + Degree;
	location[2] = len2 + Degree * 2;
	location[3] = len2 + Degree * 3;
	location[4] = len2 + Degree * 4;

	rorate_plate(location[0], 0, -len);
	rorate_plate(location[1], 1, -len);
	rorate_plate(location[2], 2, -len);
	rorate_plate(location[3], 3, -len);
	rorate_plate(location[4], 4, -len);


}

function bdclose() { //自定义一个函数这个函数只关闭弹的窗口，
	$("body").click(function() { //帮订body事件
		closeevent(); //这个就是调用关闭弹窗口的函数
	})


}


//展示爱特大事件
function displayevent(index) {
	//为点击空白处关闭框


	bdclose();

	var obj = {
		url: 'http://ktchen.cn:8080/api/event/get?year=' + (index + 2014),
		method: 'GET',
		data: {
			year: index + 2014
		},
		dataType: 'Default: Intelligent Guess',
		async: true

	}


	promisesetajax(obj).then(function(data) {


			//先把内容清空
			$("#mCSB_1_container").children().remove();
			var str = "";
			if (data.success) {

				for (var i = 0, m = data.events.length; i < m; i++) {

					// console.log(data.events[0].name)
					str += "\n\n\t\t\t\t\t\t\t<div class=\"event\">\n\t\t\t\t\t\t\t\t<div>" + data.events[i].name + "</div>\n\t\t\t\t\t\t\t\t<div>" + data.events[i].content + "</div>\n\n\t\t\t\t\t\t\t</div>\n\n       \t\t ";
				}


				// for (var i = 0, m = data.events.length; i < m; i++) {

				// console.log(data.events[0].name)
				// str += `

				// 	<div class="event">
				// 		<div>${data.events[i].name}</div>
				// 		<div>${data.events[i].content}</div>

				// 	</div>

				//  		 `

				// }



				$("#mCSB_1_container").append(str);
				$(".year").html(index + 2014)

			}

		},
		function(error) {
			alert("发生错误：" + error);
		})
	$(".year").css({
		'z-index': '200'
	})
	$(".close").css({
		'z-index': '200'
	})
	$eventboard.css({
		'display': 'block',
		'z-index': '200',

	})
	$eventboard.animate({
		'width': boardw + 'px',
		'height': '62.3%',
		'margin-left': -boardw / 2 + 'px',
		'margin-bottom': -0.3118 * H,
		'bottom': '50%'
	}, 600, function() {
		$eventtext.css({
			// 'height': 0.623 * H * 0.68,

			// 'margin-top': '-' + 0.623 * H * 0.68 * 0.5 + 'px'
			'height': parseInt($eventboard.height()) * 0.68,
			'margin-top': '-' + parseInt($eventboard.height()) * 0.68 * 0.5 + 'px'
		})
		// console.log($eventboard.css('margin-top'))
		$eventtext.show();
		$eventtext.animate({
			'opacity': '1'
		})
		$(".year").show();
		$(".year").animate({
			'opacity': '1'
		})
		$(".close").show();
		$(".close").animate({
			'opacity': '1'
		})

	});


}



//promise
function promisesetajax(obj) {
	return new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
		request.open(obj.method, obj.url, obj.async);
		if (obj.method == 'GET') {
			request.send();
		} else if (obj.method == 'POST') {
			request.send(obj.data);
		}

		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					var dat = JSON.parse(request.responseText);
					resolve(dat);

				} else {
					reject(new Error(request.status))
				}
			}

		}

	})
}



//点击任意一个窗口之外的位置，都能够关闭


//点击×关闭艾特大事记

$(".yearevent .close").click(function() {

	// alert(index)
	closeevent();
})
//关闭爱特大事件的函数
function closeevent() {
	$(".year").animate({
		'opacity': '0'
	}, function() {
		$(".year").hide();
	})
	$(".close").animate({
		'opacity': '0'
	}, function() {
		$(".close").hide();
	})
	$eventtext.animate({
		'opacity': '0'
	}, function() {
		$eventboard.animate({
			'width': W * 0.061 + 'px',
			'height': 0.0375 * W + 'px',
			'bottom': h - 0 + plate_L,
			'margin-left': -0.0305 * W + 'px',
			'line-height': 0.0375 * W + 'px',
			'margin-bottom': '0px',
			'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'
		})
		$eventboard.animate({
			'z-index': '-200',


		}, 20, function() {
			$eventboard.css({
				'display': 'none'
			})
			//把牌子收回初始位置

			click_degree(2);

		})
		$(".year").css({
			'z-index': '-200'
		})
		$(".close").css({
			'z-index': '-200'
		})
		// $eventtext.eq(index).hide();

	})

	$("body").unbind();

}

// function ballmove() {

// 	$baller = $(".ball");
// 	var ball = new Object();

// 	ball.y = parseInt($baller.css('top'));
// 	var ballfalllen = 100;
// 	ball.v = 0;
// 	ball.a = 0.1;
// 	ball.degree = 0;
// 	ball.degreea = 60;
// 	//这是小球的下落
// 	var t1 = setInterval(function() {
// 		if (ball.y - ball.v > 0.7 * H)

// 		{
// 			clearInterval(t1);


// 			var t2 = setInterval(function() {
// 				if (ball.v < 0) {
// 					ball.v = 0;
// 					clearInterval(t2);

// 					ballmove();
// 				}
// 				ball.degreea -= 10;
// 				ball.degree += ball.degreea;
// 				$baller.css({
// 					'transform': 'rotate(' + ball.degree + 'deg)'
// 				})
// 				ball.v -= ball.a;
// 				ball.y -= ball.v;
// 				$baller.css({
// 					'top': ball.y
// 				})
// 			}, 20)
// 		}
// 		ball.v += ball.a;
// 		ball.y += ball.v;
// 		$baller.css({
// 			'top': ball.y
// 		})
// 	}, 20)
// }
// ballmove();



//关于那个小球要拟人化的



//checkout闪烁
function word() {
	$(".event_word").animate({
		'opacity': '0'
	}, 1000, function() {
		$(".event_word").animate({
			'opacity': '100'
		}, 1000)
	})
	setTimeout(function() {
		word();
	}, 2000)

}
word();