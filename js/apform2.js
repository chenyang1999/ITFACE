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
P = 867 / 560 //长宽比
// if ($.browser.version != "7.0") //判断是不是IE7 ，IE7下不支持“$(window).width()”
// {
	H = $(window).height() ||document.body.offsetHeight; //获得窗口宽度
	W = $(window).width() || document.body.offsetWidth ; //获得窗口高度
	// $("body").height(H);
	if (H > 400) {
		$(".container").height(H);
		$(".logo,.logo img").css({
			'height': 0.071 * H,
			'width': 0.071 * H
		})
		$(".formheader").css({
			'height': 0.0796 * H + 'px',
			'line-height': 0.0796 * H + 'px'
		})
		$(".apform").height(H * 0.803);
		$(".formbody").css({
			'padding-top': 0.027 * H + 'px',
			'padding-bottom': 0.027 * H + 'px'
		});
		$(".formbody").height(H * 0.803 - parseInt($(".formbody").css("padding-top")) * 2 + "px");
		$(".apform").width(H * 0.803 / P);
		// $(".container").width(H*0.803/P);

		$(".info_title").css({
			'height': 0.0435 * H + 'px',
			'line-height': 0.0435 * H + 'px'
		})
		
		$(".info_input input").css({
			'height': (0.0416 * H - 2) + 'px',
			'line-height': (0.0416 * H - 2) + 'px'
		})
		$(".choosehead").css({
			'height': 0.087 * H + 'px',
			'line-height': 0.087 * H + 'px'
		})
		$(".choosebody li").css({
			'height': 0.051 * H + 'px',
			'line-height': 0.051 * H + 'px'
		})
		$(".choosebody li").eq(0).css({

			'margin-bottom': 0.023 * H + 'px'
		})
		$(".choosebody li").eq(1).css({
			'margin-bottom': 0.023 * H + 'px'
		})
		$(".intro_title").css({
			'height': 0.08 * H + 'px',
			'line-height': 0.08 * H + 'px'
		})
		$(".introduction").height(0.13 * H);
		$(".introduction").css({
			'padding': 0.0093 * H + 'px'
		})
		$(".buttonwrap").css({
			'margin-top': 0.031 * H + 'px'
		})
		$(".apform_check").css({
			'height': 0.044 * H + 'px',
			'line-height': 0.044 * H + 'px'
		})
		$(".apform_submit").css({
			'height': 0.044 * H + 'px',
			'line-height': 0.044 * H + 'px'
		})
		$(".intro_tip").css({
			'bottom': 0.0185 * H + 'px',

		})
		$(".verify").css({
			'height':H*0.803,
			'width':H * 0.803 / P
		})
		$(".verify h2").css('margin-top',0.103*H)
		$(".verify_check,.verify_back").height(0.044*H)
		$(".inputwrap").css('margin-top',0.076*H)
		$(".inputwrap input").height(0.064*H)
		$(".button_1").css('margin-top',0.287*H)
		$(".button_2").css('margin-top',0.03*H)
	}



	$(window).resize(function() {
		H = $(window).height(); //获得窗口宽度
		W = $(window).width(); //获得窗口高度
		// $("body").height(H);
		if (H > 400) {
			$(".container").height(H);
			$(".logo,.logo img").css({
				'height': 0.071 * H,
				'width': 0.071 * H
			})
			$(".formheader").css({
				'height': 0.0796 * H + 'px',
				'line-height': 0.0796 * H + 'px'
			})
			$(".apform").height(H * 0.803);
			$(".formbody").css({
				'padding-top': 0.027 * H + 'px',
				'padding-bottom': 0.027 * H + 'px'
			});
			$(".formbody").height(H * 0.803 - parseInt($(".formbody").css("padding-top")) * 2 + "px");
			$(".apform").width(H * 0.803 / P);
			// $(".container").width(H*0.803/P);

			$(".info_title").css({
				'height': 0.0435 * H + 'px',
				'line-height': 0.0435 * H + 'px'
			})
			
			$(".info_input input").css({
				'height': (0.0416 * H - 2) + 'px',
				'line-height': (0.0416 * H - 2) + 'px'
			})
			$(".choosehead").css({
				'height': 0.087 * H + 'px',
				'line-height': 0.087 * H + 'px'
			})
			$(".choosebody li").css({
				'height': 0.051 * H + 'px',
				'line-height': 0.051 * H + 'px'
			})
			$(".choosebody li").eq(0).css({

				'margin-bottom': 0.023 * H + 'px'
			})
			$(".choosebody li").eq(1).css({
				'margin-bottom': 0.023 * H + 'px'
			})
			$(".intro_title").css({
				'height': 0.08 * H + 'px',
				'line-height': 0.08 * H + 'px'
			})
			$(".introduction").height(0.13 * H);
			$(".introduction").css({
				'padding': 0.0093 * H + 'px'
			})
			$(".buttonwrap").css({
				'margin-top': 0.031 * H + 'px'
			})
			$(".apform_check").css({
				'height': 0.044 * H + 'px',
				'line-height': 0.044 * H + 'px'
			})
			$(".apform_submit").css({
				'height': 0.044 * H + 'px',
				'line-height': 0.044 * H + 'px'
			})
			$(".intro_tip").css({
				'bottom': 0.0185 * H + 'px',

			})
			$(".verify").css({
				'height':H*0.803,
				'width':H * 0.803 / P
			})
			$(".verify h2").css('margin-top',0.103*H)
			$(".verify_check,.verify_back").height(0.044*H)
			$(".inputwrap").css('margin-top',0.076*H)
			$(".inputwrap input").height(0.064*H)
			$(".button_1").css('margin-top',0.287*H)
			$(".button_2").css('margin-top',0.03*H)
			
		}



	})
// } else {

// }



//