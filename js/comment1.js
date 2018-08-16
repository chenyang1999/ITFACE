$(document).ready(function() {
	$(".menu").children().eq(5).addClass("current-menu-item")
    var $thisnav = $('.current-menu-item').offset().left-$('.x').offset().left;
	var $initwidth = $('.current-menu-item').width();
      $('.wee').css({ 'left': $thisnav+10+'px' , 'width': $initwidth });
      addcomment(true);
})
// $(document).ready(function() {
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
let H2;
let write_top1,
	write_left1,
	boxh,
	boxw,
	button_w = 170,
	button_h = 51,
	box_top,
	com_h = 562;

$write = $(".write");
if ($.browser.version != "7.0") //判断是不是IE7 ，IE7下不支持“$(window).width()”
{
	H = $(window).height(); //获得窗口宽度
	W = $(window).width(); //获得窗口高度
	H2 = $(".container_in").height();
	write_top1 = $(".make_comment").offset().top
	write_left1 = $(".make_comment").offset().left
	box_top = $(".index_topic").offset().top
	button_w = parseInt($(".make_comment").width())
	button_h = parseInt($(".make_comment").height())
	com_h = 0.58 / 1.9 * W;
	$(window).resize(function() { //浏览器缩放重新获得窗口宽高
		H = $(window).height();
		W = $(window).width();
		H2 = $(".container_in").height();
		write_top1 = $(".make_comment").offset().top
		write_left1 = $(".make_comment").offset().left
		box_top = $(".index_topic").offset().top
		button_w = parseInt($(".make_comment").width())
		button_h = parseInt($(".make_comment").height())
		com_h = 0.58 / 1.9 * W;
	});

	// if(W<'1920' && W>1700)
	// {
	// 	com_h = 562;
	// }else if(W<=1700 && W>1500)
	// {

	// }


	$(".container").height(H);
	$(".container").width(W);
	$("body").eq(0).height(H)
	// $(".header h1").css({'margin-top':(H-H2)/2});
	$(".index_topic").height(H * 0.414);
	$(".index_topic").css({
		'margin-bottom': 0.041 * H,
		'margin-top': 0.027 * H
	})
	$(".comments").css({
		// 'min-height': 0.284 * H * 0.414,
		'margin-bottom': 0.067 * 0.414 * H,
		'min-height': 0.045 * W,

	})
	$(".comments .head_c").css({
		// 'height': 0.645*0.284 * H * 0.414,
		// 'margin-top': 0.27*0.645*0.284 * H * 0.414
		'height': 0.0427 * W,
		'margin-top': 0.012 * W
	})
	$(".make_comment").css({
		'height': 0.0266 * W,
		'line-height': 0.0266 * W + 'px'
	})
	$(".make_comment_wrap").css({
		'height': 0.0266 * W,
		'line-height': 0.0266 * W + 'px'
	})
	$(".comments .right").css({
		'margin-top': 0.125 * 0.284 * H * 0.414
	})
	$(".line").css({
		'margin-top': 0.020 * H
	})
	if ($(".write").css('z-index') > 0) {

		// $(".write").height(H * 0.5);
		$(".write").width(0.6 * W);
		$(".write").height(com_h);
		$(".write").css({
			'margin-left':-0.3*W
		})
	}

	// $(".write").width(0.6*W);

	// if ((W - 0) > 1550) {
	// 	boxw = 1125;
	// 	box_top = 197.667;
	// } else if ((W - 0) > 1250 && (W - 0) < 1550) {
	// 	boxw = 985;

	// 	box_top = 187.667;
	// } else {
	// 	boxw = 956;
	// 	box_top = 177.667;
	// }
	// boxw = parseInt($write.css('width'));
	// boxh = parseInt($write.css('height'));

	//当年想要按比例缩放
	$(".write textarea").css({
		'height': 0.453 * com_h - 22
	})
	$(".write .text").css({
		'height': 0.453 * com_h,
		'margin-top': 0.03 * com_h
	})
	// $(".write").css({
	// 	'height': 0.52 * H
	// })
	$(".write .header").css({
		'margin-top': 0.071 * com_h,
	})
	$(".write .close").css({
		'top': 0.0266 * com_h
	})
	$(".select_head").css({
		'height': 0.129 * com_h,
	})
	$(".write .left_arrow").css({
		'margin-top': 0.046 * com_h
	})
	$(".write .head_c").css({
		'height': 0.129 * com_h
	})

	$(".write .head_c img").css({
		'height': 0.129 * com_h
	})
	$(".write .head_tip").css({
		'margin-top': 0.028 * com_h
	})
	$(".write .id").css({
		'height': 0.076 * com_h,
		'margin-top': 0.048 * com_h
	})
	$(".write .id input").css({
		'height': 0.067 * com_h
	})
	$(".write .id_tip").css({
		'margin-top': 0.028 * com_h
	})
	$(".write .verify_tip").css({
		'margin-top': 0.028 * com_h
	})
	$(".write .verify").css({
		'height': 0.064 * com_h,
		'margin-top': 0.02 * com_h
	})
	$(".write .verify input").css({
		'height': 0.056 * com_h
	})
	$(".verify_img").css({
		'height': 0.071 * com_h,
		'margin-top': 0.021 * com_h
	})
	$(".verify_img img").css({
		'height': 0.071 * com_h,
	})
	$(".write .submit").css({
		'height': 0.087 * com_h,
		'margin-top': 0.0177 * com_h,
		'line-height': 0.087 * com_h + 'px'
	})
	$(".text_tip").css({
		'margin-top': 0.028 * com_h
	})
	$(".write .right_arrow").css({
		'margin-top': 0.046 * com_h
	})




	// boxw = $write.css('width');
	// boxh = 0.52 * H;

	$(window).resize(function() { //浏览器缩放重新获得窗口宽高
		// com_h = 0.58/21.9*W;
		// $(".write").width(0.6*W);
		$(".container").height(H);
		$(".container").width(W);
			$("body").eq(0).height(H);
		// $(".header h1").css({'margin-top':(H-H2)/2});
		$(".index_topic").height(H * 0.414);
		$(".index_topic").css({
			'margin-bottom': 0.041 * H,
			'margin-top': 0.027 * H
		})
		$(".comments").css({
			// 'min-height': 0.284 * H * 0.414,
			'margin-bottom': 0.067 * 0.414 * H,
			'min-height': 0.045 * W,

		})
		$(".comments .head_c").css({
			// 'height': 0.645*0.284 * H * 0.414,
			// 'margin-top': 0.27*0.645*0.284 * H * 0.414
			'height': 0.0427 * W,
			'margin-top': 0.012 * W
		})
		$(".make_comment").css({
			'height': 0.0266 * W,
			'line-height': 0.0266 * W + 'px'
		})
		$(".make_comment_wrap").css({
			'height': 0.0266 * W,
			'line-height': 0.0266 * W + 'px'
		})
		$(".comments .right").css({
			'margin-top': 0.125 * 0.284 * H * 0.414
		})
		$(".line").css({
			'margin-top': 0.020* H
		})

	if ($(".write").css('z-index') > 0) {

		// $(".write").height(H * 0.5);
		$(".write").width(0.6 * W);
		$(".write").height(com_h);
		$(".write").css({
			'margin-left':-0.3*W
		})
	}




		// if ((W - 0) > 1550) {
		// 	boxw = 1125;
		// 	box_top = 197.667;
		// } else if ((W - 0) > 1250 && (W - 0) < 1550) {
		// 	boxw = 985;

		// 	box_top = 187.667;
		// } else {
		// 	boxw = 956;
		// 	box_top = 177.667;
		// }
		// boxw = parseInt($write.css('width'));
		// boxh = parseInt($write.css('height'));

		//当年想要按比例缩放
		$(".write textarea").css({
			'height': 0.453 * com_h - 22
		})
		$(".write .text").css({
			'height': 0.453 * com_h,
			'margin-top': 0.03 * com_h
		})

		// $(".write").css({
		// 	'height': 0.52 * H
		// })
		$(".write .header").css({
			'margin-top': 0.071 * com_h,
		})
		$(".write .close").css({
			'top': 0.0266 * com_h
		})
		$(".select_head").css({
			'height': 0.129 * com_h,
		})
		$(".write .left_arrow").css({
			'margin-top': 0.046 * com_h
		})
		$(".write .head_c").css({
			'height': 0.129 * com_h
		})

		$(".write .head_c img").css({
			'height': 0.129 * com_h
		})
		$(".write .head_tip").css({
			'margin-top': 0.028 * com_h
		})
		$(".write .id").css({
			'height': 0.076 * com_h,
			'margin-top': 0.048 * com_h
		})
		$(".write .id input").css({
			'height': 0.067 * com_h
		})
		$(".write .id_tip").css({
			'margin-top': 0.028 * com_h
		})
		$(".write .verify_tip").css({
			'margin-top': 0.028 * com_h
		})
		$(".write .verify").css({
			'height': 0.064 * com_h,
			'margin-top': 0.02 * com_h
		})
		$(".write .verify input").css({
			'height': 0.056 * com_h
		})
		$(".verify_img").css({
			'height': 0.071 * com_h,
			'margin-top': 0.021 * com_h
		})
		$(".verify_img img").css({
			'height': 0.071 * com_h,
		})
		$(".write .submit").css({
			'height': 0.087 * com_h,
			'margin-top': 0.0177 * com_h,
			'line-height': 0.087 * com_h + 'px'
		})
		$(".text_tip").css({
			'margin-top': 0.028 * com_h
		})
		$(".write .right_arrow").css({
			'margin-top': 0.046 * com_h
		})

	});

} else {

}

// })

let HEAD_SIZE = 6; //记录头像的个数
let headimg = 1; //默认显示第一个头像
$(".right_arrow").click(function() {
	if (headimg == HEAD_SIZE) {
		headimg -= HEAD_SIZE;
	}
	headimg++;
	headshow();
	console.log(headimg)

})
$(".left_arrow").click(function() {
	if (headimg == 1) {
		headimg += HEAD_SIZE;
	}
	headimg--;
	headshow();
	console.log(headimg)

})

function headshow() {
	$(".write .head_c li").eq(headimg - 1).show().siblings().hide();
}

//点击打开弹框，弹出发表评论框
//我先让评论框放到我要留言下面
// $write = $(".write");
// let write_top1 = $(".make_comment").offset().top,
// 	write_left1 = $(".make_comment").offset().left,
// 	boxh,
// 	boxw,
// 	box_top;

// if ((W - 0) > 1550) {
// 	boxw = 1125;
// 	box_top = 197.667;
// } else if ((W - 0) > 1250 && (W - 0) < 1550) {
// 	boxw = 985;
// 	box_top = 187.667;
// } else {
// 	boxw = 956;
// 	box_top = 177.667;
// }
// boxw = $write.css('width');
// boxh = $write.css('height');

// 点击我要留言后的展示效果
// $(".make_comment").click(function() {


// })
$(".make_comment").click(function() {
	changeverify();
	boxw = 0.6 * W;
	// boxh = parseInt($(".index_topic").css('height'));
	box_top = $(".index_topic").offset().top
	//先把遮罩层放好位置
	// $(".writewrap").css({
	// 	'width': boxw,
	// 	'height': '562px',
	// 	'top': box_top,
	// 	'left': (W - boxw) / 2,
	// 	'z-index': '50',

	// })
	//先把这个框藏在按钮的下面
	$write.css({
		'display': 'block',

		'top': write_top1,
		// 'left': write_left1,
		'z-index': '100',
		'left': '50%',
		'margin-left': -button_w / 2
	});
	//把框移到屏幕中间，并令其成为最高的一层
	$write.animate({
		// 'z-index': '100',
		'top': (H - button_h) / 2,
		// 'left': (W-171)/2,

	}, 100, function() {
		$write.animate({


			'width': boxw,
			'height': com_h,
			'top': box_top,
			// 'left': (W - boxw) / 2,
			// 'top':'50%',
			// 'left':'50%',
			'margin-left': -boxw / 2,
			// 'margin-top':-0.25*H

		}, 300, function() {
			//接下来就是展开遮罩层的动画了
			// setTimeout(function() {
			// 	$(".writewrap").show();
			// 	$(".writewrap").animate({
			// 		'width': '100%',
			// 		'height': H,
			// 		'top': '0',
			// 		'left': '0'

			// 	}, 300)
			// }, 50)

		})
	})
	//展开该框（其实这里应该采取等比例的作法让展开看起来更贴合事实）

	// $(window).resize(function() {
	// 	$write.css({
	// 		'width': boxw,
	// 		'height': 0.52 * H,
	// 		// 'top': box_top,
	// 		// 'left': (W - boxw) / 2,
	// 		'top': '50%',
	// 		'left': '50%',
	// 		'margin-left': -boxw / 2,
	// 		'margin-top': -0.25 * H
	// 	})

	// })



})


$(".write .close").click(function() {
	close_comment();
})
	function close_comment(){
		$(".write textarea").val('');
		$(".write .id input").val('');
		$(".write .verify input").val('')




	//先收起遮罩层并隐藏
	// alert("666")
	// $(".writewrap").animate({
	// 	'width': boxw,
	// 	'height': 0.5 * H,
	// 	'top': box_top,
	// 	'left': (W - boxw) / 2,
	// 	'z-index': '50',

	// }, 300)

	// $(".writewrap").hide(function() {
	//接下来这个框应该先回到中间
	setTimeout(function() {
		$write.animate({


			'width': button_w,
			'height': button_h,
			'top': (H - button_h) / 2,
			// 'left': (W - 170) / 2,
			'margin-left': -button_w / 2
		})
		//接下来把它移回去



		$write.animate({

			'top': write_top1,
			// 'left': write_left1
			// 'margin-left':-button_w/2

		}, 50, function() {
			$write.css({
				'z-index': '-5',
				'display': 'none'
			})
		});

	}, 10)
	// });
			}



let Iscomment = false,
	Isverify = false,
	Isid = false;

//id输入 ??字数限制呢
$(".write .id").on({
	focus: function() {
		if (!Isid && $(".write .id input").val() == '') {
			Isid = true;
		}
	},
	keydown: function(event) {

		if ($(".write textarea").val().length > 8 && event.keyCode != 8) {
			alert("字数太多了！");
			$(".write textarea").val($(".write textarea").val().substring(0, 8));

		}
	}
})
//留言框判断
//如果用户自己发起删除不应该判断为超出
$(".write textarea").on({
	focus: function() {
		if (!Iscomment && $(".write textarea").val() == '') {
			Iscomment = true;
		}
	},
	keydown: function(event) {

		if ($(".write textarea").val().length > 80 && event.keyCode != 8) {
			alert("字数太多了！");
			$(".write textarea").val($(".write textarea").val().substring(0, 80));

		}
	}
})

//验证码输入部分
$(".verify input").on({
	focus: function() {
		if (!Isverify && $(".verify input").val() == '') {
			Isverify = true;
		}
	}
})



//提交留言表单
$(".write .submit").click(function() {

	if (!Iscomment) {
		alert("留言不能为空！");
		changeverify();
	} else if (!Isverify) {
		alert("请输入验证码！");
		changeverify();
	} else if($(".write .id input").val()==''){
		alert("请输入昵称！");
		changeverify();
	}else{
		// var msg = $(".write textarea").val(),
		// 	msg = htmlEncodeJQ(msg);
		// console.log($(".write textarea").val())
		// console.log(headimg)
		// console.log($(".verify input").val())


		$.ajax({
				type: "POST",
				url: "/api/comment/submit",
				timeout : 5000,
				data: {
					content: $(".write textarea").val(),
					nickName: $(".id input").val(),
					head: headimg,
					identify: $(".verify input").val(),
				},
				dataType: "json",
				//发送成功可以返回的东西
				success: function(data){
					if (data.statusC == 1) {
					alert("留言提交失败！");
					changeverify();

				} else if (data.statusC == 2) {
					alert("验证码错误！");
					changeverify();
				} else if (data.statusC == 0) {
					alert("留言发表成功!");
					close_comment();
					location.reload();

				}
	// 				switch (data.statusC){
	// 					case 1:
	// 						alert("发表失败");
	// 						break;
	// 					case 2:
	// 						alert("验证码错误");
	// 						break;
	// 					case 0:
	// 						alert("留言发表成功成功");
	// 						break;
	// 				}
				},
				error: function(jqXHR){
				   alert("服务器错误请重试，错误代码：" + jqXHR.status);
				},
			});
	// 	var com = {
	// 		url: '/api/comment/submit',
	// 		method: 'POST',
	// 		data: {
	// 			content: $(".write textarea").val(),
	// 			head: headimg,
	// 			identify: $(".verify input").val(),
	// 			nickName: $(".id input").val(),
	// 		},
	// 		timeout: 5000,
	// 		dataType: 'json',
	// 		async:true,
	// 		dat :"content="+$(".write textarea").val()
	// 		+"&head="+headimg
	// 		+"&identify="+$(".verify input").val()
	// 		+"&nickName="+ $(".id input").val()
	// 	}
    //
    //
	// 	promisesetajax(com).then(function(data) {
    //
	// 			if (data.statusC == 1) {
	// 				alert("留言提交失败！");
    //
	// 			} else if (data.statusC == 2) {
	// 				alert("验证码错误！");
	// 			} else if (data.statusC == 0) {
	// 				alert("留言发表成功!");
	// 			}
    //
    //
    //
	// 		},
	// 		function(error) {
	// 			alert("发生错误：" + error);
	// 		})
	}
})



//滚动条插件


$(window).on("load", function() {
	$(".index_topic").mCustomScrollbar();



});

//滚动条滑到底的事件！！
$(".index_topic").mCustomScrollbar({

	callbacks: {
		whileScrolling: function() {
			if (parseInt($(".mCSB_dragger").css("bottom")) < "4") {
				addcomment();
			}

		}
	}
})

$("#ident").click(function(){
	changeverify();
});
//更换验证码事件
function changeverify() {
	$("#ident").attr('src','/api/identifyPic?time='+Math.random());
}



//频繁调用函数，特别用于调整大小时
$(window).resize(function() {})



//promise
function promisesetajax(obj) {
	return new Promise((resolve, reject) => {
		var request = new XMLHttpRequest();
		request.open(obj.method, obj.url, obj.async);
		if (obj.method == 'GET') {

			request.send();
		} else if (obj.method == 'POST') {
			request.setRequestHeader("Content-type","application/x-www-form-urlencoded")
			console.log(obj.dat)
			request.send(obj.dat);
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



//添加评论的方式
function addcomment(firstTime=false) {
	var code;
	if (firstTime){
		code = 0;
	} else {
		code = $(".index_topic .comments:last-child").attr('id')
	}

	var obj = {
		url: '/api/comment/get?code=' + code,
		method: 'GET',
		dataType: 'Default: Intelligent Guess',
		async: true

	}


	promisesetajax(obj).then(function(data) {
			let str = "";
			if (data.comment == '[]') {

			} else {
				for (let i = 0, m = data.comment.length; i < m; i++) {

					str += `<div class="comments clearfix" id="${data.comment[i].code}">
	         			 	<div class="head_c"><img src="${data.comment[i].head}" alt="" /></div>
	          				<div class="right clearfix">
				            <div class="clearfix" >
				              	<div class="id">${data.comment[i].nickname}</div>
				             	 <div class="time">${data.comment[i].createTime}</div>
				            </div>
				            <p>${data.comment[i].content}</p>
				          	</div>
			        	</div>
        `
				}
			}

			$("#mCSB_1_container").append(str);
			//刷新当前页面
			



		},
		function(error) {
			alert("发生错误：" + error);
		})

	// $.ajax({
	// 	type: "GET",
	// 	url: "http://118.25.179.209/api/comment/get",
	// 	dataType: "json",
	// 	success: function(data) {
    //
	// 		let str = "";
	// 		for (let i = 0, m = data.comment.length; i < m; i++) {
    //
	// 			str += `<div class="comments clearfix">
	//          			 	<div class="head_c"><img src="${data.comment[i].head}" alt="" /></div>
	//           				<div class="right clearfix">
	// 			            <div class="clearfix" style="margin-bottom: -5px;">
	// 			              	<div class="id"></div>
	// 			             	 <div class="time">${data.comment[i].createTime}</div>
	// 			            </div>
	// 			            <p>${data.comment[i].content}</p>
	// 			          	</div>
	// 		        	</div>
	//        `
	// 		}
	// 		$("#mCSB_1_container").append(str);
    //
	// 	},
	// 	error: function(jqXHR) {
	// 		alert("发生错误：" + jqXHR.status);
	// 	},
	// });
}

//评论初始化函数
// addcomment();



// $.ajax({ 
//     type: "POST", 	
// 	url: "http://localhost/aite/js/jj.txt",
// 	data: {
// 		num: $("#mCSB_1").children().length
// 	},
// 	dataType: "json",
// 	//发送成功可以返回的东西
// 	success: function(data){
// 		alert("666")
// 	},
// 	error: function(jqXHR){     
// 	   alert("发生错误：" + jqXHR.status);  
// 	},     
// });


// 	var obj = {
// 		url: 'http://localhost/aite/js/jj.txt',
// 		method: 'GET',
// 		data: {
// 			// num: $("#mCSB_1").children().length
// 		},
// 		dataType: 'Default: Intelligent Guess',
// 		async: true

// 	}

// 	function promisesetajax(obj) {
// 		return new Promise((resolve, reject) => {
// 			var request = new XMLHttpRequest();
// 			request.open(obj.method, obj.url, obj.async);
// 			request.send(obj.data);
// 			request.onreadystatechange = function() {
// 				if (request.readyState === 4) {
// 					if (request.status === 200) {
// 						var dat = JSON.parse(request.responseText);
// 						resolve(dat);

// 					} else {
// 						reject(new Error(request.status))
// 					}
// 				}

// 			}

// 		})
// 	}


// 	promisesetajax(obj).then(function(data) {
// 			let str = "";
// 			for (let i = 0; i < data.length; i++) {

// 				str += `<div>${data[i].content}</div>`;

// 			}
// 			// $("#mCSB_1_container")[0].innerHtml = str;
// 			console.log(str)
// 			document.getElementById("mCSB_1_container").innerHtml = str;
// 			let ss= document.getElementById("bb");
// 			ss.innerHtml = "6666";

// 		},
// 		function(error) {
// 			alert("发生错误：" + error);
// 		})

// }
// document.addEventListener("DOMNodeInserted", function(e) {
// 	console.log("insert", e.target);
// });

// })