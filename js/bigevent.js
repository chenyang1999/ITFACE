
window.onload = function() {
	$baller = $(".ball");
	$pole = $(".plate .pole"); // 杆子
	$board = $(".plate .board"); //牌子
	$plate = $(".plate") // all
	$eventboard = $(".yearevent"); //
	$eventtext = $(".eventwrap .index_topic"); //
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
		Degree = 12, //记录牌子偏转角度
		plate_H; // 记录牌子的高度
	if ($.browser.version != "7.0") //判断是不是IE7 ，IE7下不支持“$(window).width()”
	{
		H = $(window).height(); //获得窗口宽度
		W = $(window).width(); //获得窗口高度
		w = W * 0.67; //星球高度
		// h = $(".background img").height(); //星球宽度
		h = W * 0.67 / 3.79;



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
			initial_degree();
		// 	$eventboard.css({
		// 	'width': W * 0.061 + 'px',
		// 	'height': 0.0305 * W + 'px',
		// 	'bottom': h - 0 + plate_L,
		// 	'margin-left': -0.0305 * W + 'px',
		// 	'line-height': 0.0305 * W + 'px',
		// 	'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'

		// })

		//将牌子的偏转坐标移到正确的位置




		});

	} else {

	}

	let fall_length = 200;
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

		let flag = true;
		let fall = fall_length;
		let fall_v = 0; // 记录下落的速度
		let t2 = setInterval(function() {
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

		let b; //记录最终到达的角度
		b = a + length;
		// console.log("第" + n + "个元素b=" + b + "a=" + a)
		let v = 1; // 可以理解为速度
		//首先要确定是否要移动
		if (a != b) {

			let t = setInterval(function() {
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
		let aa = Math.round(180 * Math.asin(a) / Math.PI);
		let bb = Math.round(180 * Math.acos(b) / Math.PI);
		let cc = Math.round(180 * Math.asin(c) / Math.PI);
		let dd = Math.round(180 * Math.acos(d) / Math.PI);
		let deg = 0;
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
		let index = $plate.index(this);
		// countdegree(index);
		click_degree(index);
		//旋转牌子以后打开窗口
		let mathlen = Math.abs(len);
		let timelen = mathlen / Degree;
		setTimeout(function() {
			displayevent(index);
		}, 200 * timelen + 100);

	})


	var len;
	var len2;
	//先算出偏转角度，获得角度以后调用函数rotate旋转牌子
	function click_degree(index) {
		let u2;
		let u = $board.eq(index).css('transform');
		if (u != "none") {
			let values = u.split('(')[1].split(')')[0].split(',');
			let a = values[0];
			let b = values[1];
			let c = values[2];
			let d = values[3];
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
			let values = u2.split('(')[1].split(')')[0].split(',');
			let a = values[0];
			let b = values[1];
			let c = values[2];
			let d = values[3];
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
		let location = [];
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
	


	//展示爱特大事件
	function displayevent(index) {

		$eventboard.eq(index).css({
			'display': 'block',
			'z-index': '200',

		})
		$(".year").eq(index).css({
			'z-index': '200'
		})
		$(".close").eq(index).css({
			'z-index': '200'
		})
		$eventboard.eq(index).animate({
			'width': '55.5%',
			'height': '62.3%',
			'margin-left': '-27.75%',
			'margin-bottom': -0.3118 * H,
			'bottom': '50%'
		}, 600, function() {
			$eventtext.eq(index).css({
				'height': 0.74 * parseInt($eventboard.eq(index).css('height')),
				'margin-top': -0.5* 0.74 * parseInt($eventboard.eq(index).css('height')),
				// 'margin-bottom': -0.3118*H,
			})
			$eventtext.eq(index).show();
			$eventtext.eq(index).animate({
				'opacity': '1'
			})
			$(".year").eq(index).show();
			$(".year").eq(index).animate({
				'opacity': '1'
			})
			$(".close").eq(index).show();
			$(".close").eq(index).animate({
				'opacity': '1'
			})
		});


	}


	//点击×关闭艾特大事记
	$(".yearevent .close").click(function() {
		var index = $(".eventwrap .close").index(this);
		// alert(index)
		closeevent(index);
	})
	//关闭爱特大事件的函数
	function closeevent(index) {
		$(".year").eq(index).animate({
			'opacity': '0'
		}, function() {
			$(".year").eq(index).hide();
		})
		$(".close").eq(index).animate({
			'opacity': '0'
		}, function() {
			$(".close").eq(index).hide();
		})
		$eventtext.eq(index).animate({
			'opacity': '0'
		}, function() {
			$eventboard.eq(index).animate({
				'width': W * 0.061 + 'px',
				'height': 0.0375 * W + 'px',
				'bottom': h - 0 + plate_L,
				'margin-left': -0.0305 * W + 'px',
				'line-height': 0.0375 * W + 'px',
				'margin-bottom': '0px',
				'transform-origin': 'center ' + (plate_H + r + plate_L) + 'px'
			})
			$eventboard.eq(index).animate({
				'z-index': '-200',


			}, 20, function() {
				$eventboard.eq(index).css({
					'display': 'none'
				})
				//把牌子收回初始位置

				click_degree(2);

			})
			$(".year").eq(index).css({
				'z-index': '-200'
			})
			$(".close").eq(index).css({
				'z-index': '-200'
			})
			// $eventtext.eq(index).hide();

		})



	}

	function ballmove() {

		$baller = $(".ball");
		var ball = new Object();

		ball.y = parseInt($baller.css('top'));
		let ballfalllen = 100;
		ball.v = 0;
		ball.a = 0.1;
		ball.degree = 0;
		ball.degreea = 60;
		//这是小球的下落
		let t1 = setInterval(function() {
			if (ball.y - ball.v > 0.7 * H)

			{
				clearInterval(t1);


				let t2 = setInterval(function() {
					if (ball.v < 0) {
						ball.v = 0;
						clearInterval(t2);

						ballmove();
					}
					ball.degreea -= 10;
					ball.degree += ball.degreea;
					$baller.css({
						'transform': 'rotate(' + ball.degree + 'deg)'
					})
					ball.v -= ball.a;
					ball.y -= ball.v;
					$baller.css({
						'top': ball.y
					})
				}, 20)
			}
			ball.v += ball.a;
			ball.y += ball.v;
			$baller.css({
				'top': ball.y
			})
		}, 20)
	}
	ballmove();

}



//关于那个小球要拟人化的