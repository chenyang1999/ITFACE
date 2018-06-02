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
let appr = 0.53 * W;
var programr= 0.42*W;
$front = $(".ball .front_end");
$ui = $(".ball .ui")
$program = $(".program");
$app = $(".app");

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
	$front.css({
		'height': 0.088 * W,
		'top': 0.129 * W
	})
	$ui.css({
		'height': 0.0906 * W,
		'top': 0.276 * W
	})
	$program.css({
		'height': 0.0906 * W,
		'top': 0.122 * W
	})
	$app.css({
		'height': 0.0906 * W,
		'top': 0.2502 * W
	})
	$(".back").css({
		'height': H
	})
	balloval2(0.30, 0.65, programr, programr);
	if(W>1700 && W<=1920){
		appr = 0.53 * W;
		programr = 0.42*W;
		balloval2(0.30, 0.65, programr, programr);
	}

	else if(W<=1700 && W>1500){
		programr = 0.42*W;
		balloval2(0.30, 0.60, programr, programr);
	}
	else if(W<=1500 && W>980){
		programr = 0.42*W;
		balloval2(0.30, 0.60, programr, programr);
	}
	alert('w'+H )


	$(window).resize(function() { //浏览器缩放重新获得窗口宽高
		$(".container").height(H);
		$(".container").width(W);
		$front.css({
			'height': 0.088 * W,
			'top': 0.129 * W
		})
		$program.css({
			'height': 0.0906 * W,
			'top': 0.122 * W
		})
		$ui.css({
			'height': 0.0906 * W,
			'top': 0.276 * W
		})
		$app.css({
			'height': 0.0906 * W,
			'top': 0.2502 * W
		})

	})
} else {

}

function balloval(ballname, ox, oy, shorto, longo) {
	$ball = $(ballname);
	var y = parseInt($ball.css("top"));
	let originx = ox * W;
	let originy = oy * H;
	let short = shorto;
	let long = longo;
	let short2 = short * short;
	let long2 = long * long;
	let all = long2 * short2;
	let b = y;
	// console.log("orginx"+ox*W)
	let t = setInterval(function() {
		// console.log($ball.css('left'));
		if (parseInt($ball.css('left')) < 0.47 * W) {
			clearInterval(t);

			let t2 = setInterval(function() {
				if (parseInt($ball.css('top')) > 0.58 * H) {
					clearInterval(t2);
					balloval(ballname, ox, oy, shorto, longo);
				}
				b += 1;
				x = Math.sqrt((all - long2 * (b - originy) * (b - originy)) / short2);

				$ball.css({
					'top': b,
					'left': x + originx
				})
			}, 20)
		}
		b -= 1;
		x = Math.sqrt((all - long2 * (b - originy) * (b - originy)) / short2);

		$ball.css({
			'top': b,
			'left': x + originx
		})


		// console.log(x+short);
	}, 20)
}


// balloval(".ui", 0.30, 0.65, 0.27 * W, 0.27 * W);



function balloval2(ox, oy, shorto, longo) {
	// $ball = $(ballname);
	let y = parseInt($(".program").css("top"));
	let originx = ox * W;
	let originy = oy * H;
	let short = shorto;
	let long = longo;
	let short2 = short * short;
	let long2 = long * long;
	let all = long2 * short2;
	let b = y;
	// console.log("orginx"+ox*W)
	let t = setInterval(function() {
		// console.log($(".program").css('left'));
		if (parseInt($(".program").css('left')) < 0.68 * W) {
			clearInterval(t);

			let t2 = setInterval(function() {
				if (parseInt($(".program").css('top')) > 0.55 * H) {
					clearInterval(t2);
					balloval2(ox, oy, shorto, longo);
				}
				b += 2;
				x = Math.sqrt((all - long2 * (b - originy) * (b - originy)) / short2);

				$(".program").css({
					'top': b,
					'left': x + originx
				})
			}, 20)
		}
		b -= 2;
		x = Math.sqrt((all - long2 * (b - originy) * (b - originy)) / short2);

		$(".program").css({
			'top': b,
			'left': x + originx
		})


		// console.log(x+short);
	}, 20)
}




function balloval3(ox, oy, shorto, longo) {

	var y = parseInt($(".app").css("top"));
	let originx = ox * W;
	let originy = oy * H;
	let short = shorto;
	let long = longo;
	let short2 = short * short;
	let long2 = long * long;
	let all = long2 * short2;
	let b = y;
	// console.log("orginx"+ox*W)
	let t = setInterval(function() {
		// console.log($(".app").css('left'));
		if (parseInt($(".app").css('left')) < 0.78 * W) {
			clearInterval(t);

			let t2 = setInterval(function() {
				if (parseInt($(".app").css('top')) > 0.58 * H) {
					clearInterval(t2);
					balloval3(ox, oy, shorto, longo);
				}
				b += 1;
				x = Math.sqrt((all - long2 * (b - originy) * (b - originy)) / short2);

				$(".app").css({
					'top': b,
					'left': x + originx
				})
			}, 20)
		}
		b -= 1;
		x = Math.sqrt((all - long2 * (b - originy) * (b - originy)) / short2);

		$(".app").css({
			'top': b,
			'left': x + originx
		})



	}, 20)
}


// balloval3(0.30, 0.65, appr, appr);