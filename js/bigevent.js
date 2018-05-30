// var H; //记录窗口高度
// var W; // 记录窗口宽度
// //判断是不是IE7 ，IE7下不支持“$(window).width()”
// H = $(window).height(); //获得窗口宽度
// W = $(window).width(); //获得窗口高度
// $(window).resize(function() { //浏览器缩放重新获得窗口宽高
// 	H = $(window).height();
// 	W = $(window).width();
// });

// var space; //记录两个时间表之间的距离
// var clock_size = 80; //记录一个钟表的大小
// var clock_amount = 5; // 记录钟表的数目
// var clock_top = 70; // 记录钟表上引入线的长度
// // clock_size = $(".event_clock").width()-0 + ( $(".event_clock").css("border")-0)*2;
// clock_size = 80;
// space = (H - clock_amount * clock_size) / 4;


// var $line = $(".block_line");
// var $clock = $(".event_clock");


// 	$line.animate({'height':clock_top}, 1000,function(){
// 		$clock.eq(0).animate({'opacity':'1'},1000)

// 	});
window.onload = function() {

	$pole = $(".plate .pole"); // 杆子
	$board = $(".plate .board"); //牌子
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
	var h, w, r;
	var plate_L, //记录牌子杆子的长度
		Degree, //记录牌子偏转角度
		plate_H = 72; // 记录牌子的高度
	if ($.browser.version != "7.0") //判断是不是IE7 ，IE7下不支持“$(window).width()”
	{
		H = $(window).height(); //获得窗口宽度
		W = $(window).width(); //获得窗口高度
		w = W * 0.67; //星球高度
		h = $(".background img").height(); //星球宽度



		$(window).resize(function() { //浏览器缩放重新获得窗口宽高
			H = $(window).height();
			W = $(window).width();
			w = W * 0.67; //星球高度
			h = W * 0.67 / 3.79; //星球宽度

		});

		$(".container").height(H);
		$(".container").width(W);
		// h = W * 0.67;
		$(".background img").width(w);
		r = (h / 2) + (w * w / (8 * h)); // 星球半径
		//控制牌子的偏转角度
		if (W > '1550') {
			Degree = 12;
			plate_L = 150;
		} else if (W > '1250' && W < '1550') {
			Degree = 15;
			plate_L = 100;
		}
		//控制牌子相关参数
		$(".plate .pole").css({
			'bottom': h - r,
			'height': r - 0 + plate_L
		})
		//控制牌子的角度
		initial_degree();
		$(".board").css({
			'bottom': h - 0 + plate_L
		})
		//将牌子的偏转坐标移到正确的位置

		$(".plate .board").css({
			'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'
		})



		$(window).resize(function() { //浏览器缩放重新获得窗口宽高
			$(".container").height(H);
			$(".container").width(W);
			// w = W * 0.67;
			$(".background img").width(w);
			r = (h / 2) + (w * w / (8 * h)); // 星球半径
			//控制牌子的偏转角度
			if (W > '1550') {
				Degree = 12;
				plate_L = 150;
			} else if (W > '1250' && W < '1550') {
				Degree = 15;
				plate_L = 100;
			}
			//控制牌子相关参数
			$(".plate .pole").css({
				'bottom': h - r,
				'height': h - 0 + plate_L
			})
			//控制牌子的角度
			initial_degree();
			$(".board").css({
				'bottom': r - 0 + plate_L
			})
			$(".plate .board").css({
				'transform-origin': 'center ' + (olate_H + r + plate_L) + 'px'
			})



		});

	} else {

	}





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
	function rorate_plate(a,n,) {
		
		let b =0;
		let v = 1; // 可以理解为速度

		let t = setInterval(function() {
			if (a == b - v) {
				clearInterval(t)
			}
			a += v;
			$pole.eq(n).css({
				'transform': 'rotate(' + a + 'deg)'
			})
			$board.eq(n).css({
				'transform': 'rotate(' + a + 'deg)'
			})
		}, 50)
	}



	//用来控制点击时牌子的旋转
	$(".plate,.board").click(function() {
		click_degree();
	})

	function click_degree() {
		$plate = $(".plate");
		
		rorate_plate(-Degree * 2,0);
		rorate_plate(-Degree ,1);
	}


	$(".sss").click(function() {
		console.log("8888")
		// alert("333")
	})


}