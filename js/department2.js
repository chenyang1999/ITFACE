var H, W;
$front = $(".front_endball");
$ui = $(".ball .ui")
$program = $(".program");
$app = $(".app");
$baller = $(".baller")
H = $(window).height(); //获得窗口宽度
W = $(window).width(); //获得窗口高度
$(".container").height(H);
$(".container").width(W);

$(window).resize(function() { //浏览器缩放重新获得窗口宽高
	H = $(window).height();
	W = $(window).width();
	$(".container").height(H);
	$(".container").width(W);


});

//前端小球运动
var num =-250,
	a, b;
var t1;

function ballrun1() {
	lr = 0.34 * W;
	sr = 0.45 * W;
	X = 0 * W;
	Y = 0 * H;
	var flag=1;
	t1 = setInterval(function() {

		// if (parseInt($front.css('top')) > 0.51 * H) {
		// 	flag = 1;
		// } else if (parseInt($front.css('top')) < 0.4 * H) {
		// 	flag = 2;
		// }

		if (flag == 1) {
			num -= 0.7;

		} else if (flag == 2) {

			num += 0.7;

		}
		console.log(num);

		a = Math.sin(num * Math.PI / 180) * lr;

		b = Math.cos(num * Math.PI / 180) * sr;
		$front.css({
			'left': X + b + 'px',
			'bottom': Y + a + 'px'
		})

	}, 50)
}
ballrun1();


$(window).resize(function() {
	for (let i = 0; i < 1; i++) {
		cleart(i);
		startt(i);
		console.log("777")

	}

})
function startt(index) {
	if (index == 0) {
		clearInterval(t1);

		ballrun1();
	} else if (index == 1) {
		clearInterval(t2);

		balloval2(0.50, 0.50, 0.33 * W, 0.34 * W);
	} else if (index == 2) {
		clearInterval(t3);

		balloval3(".ball .ui", 0.30, 0.65, 0.27 * W, 0.27 * W);
	} else if (index == 3) {
		clearInterval(t4);
		balloval4(0.30, 0.65, 0.42 * W, 0.42 * W);
	}

}

function cleart(index) {
	if (index == 0) {
		clearInterval(t1);


	} else if (index == 1) {
		clearInterval(t2);


	} else if (index == 2) {
		clearInterval(t3);


	} else if (index == 3) {
		clearInterval(t4);


	}
}