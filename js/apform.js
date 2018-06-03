

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

	});

	$(".container").height(H);
	$(".container").width(W);


	$(window).resize(function() { //浏览器缩放重新获得窗口宽高
		$(".container").height(H);
		$(".container").width(W);

	})
} else {

}

var flag = [false, false, false, false, false, false];

let Isname = false,
	Isprofession = false,
	Isqq = false,
	Isphone = false,
	Isintro = false,
	Isintention = false;
$(".name").on({
	focus: function() {
		if (!Isname) {
			$(".name").val("")
			$(".name").css({
				"border-bottom": " 1px solid #2a74a3",
				"color": "#2a74a3"
			})
		}
	},
	blur: function() {
		reg = /^[\u4e00-\u9fa5]{2,10}$/;
		if (!reg.test($(".name").val())) {
			$(".name").val("请输入正确的姓名");
			$(".name").css({
				"color": "#e81a33"
			})
			Isname = false;
		} else {
			Isname = true;
		}
		$(".name").css({
			"border-bottom": "1px solid #cccbc8"
		})
	}
})
$(".profession").on({
	focus: function() {
		if (!Isprofession) {
			$(".profession").css({
				"border-bottom": " 1px solid #2a74a3",
				"color": "#2a74a3"
			})
			$(".profession").val("")
		}
	},
	blur: function() {
		//这里要改成匹配2018
		reg = /^201[5678][\u4e00-\u9fa5]{2,15}$/;
		if (!reg.test($(".profession").val())) {
			$(".profession").val("请输入正确的年级/专业（例：2018药学）");
			$(".profession").css({
				"color": "#e81a33"
			})
			Isprofession = false;
		} else {
			Isprofession = true;
		}
		$(".profession").css({
			"border-bottom": "1px solid #cccbc8"
		})
	}
})
$(".qq").on({
	focus: function() {
		if (!Isqq) {
			$(".qq").val("")
			$(".qq").css({
				"border-bottom": " 1px solid #2a74a3",
				"color": "#2a74a3"
			})
		}
	},
	blur: function() {
		reg = /^[1-9][0-9]{4,10}$/;
		if (!reg.test($(".qq").val())) {
			$(".qq").val("qq");
			$(".qq").css({
				"color": "#e81a33"
			})
			Isqq = false;
		} else {
			Isqq = true;
		}
		$(".qq").css({
			"border-bottom": "1px solid #cccbc8"
		})
	}
})
$(".phonenumber").on({
	focus: function() {
		if (!Isphone) {
			$(".phonenumber").val("")
			$(".phonenumber").css({
				"border-bottom": " 1px solid #2a74a3",
				"color": "#2a74a3"
			})
		}
	},
	blur: function() {
		reg = /^1[34578]\d{9}$/;
		if (!reg.test($(".phonenumber").val())) {
			$(".phonenumber").val("请输入正确的手机号码");
			$(".phonenumber").css({
				"color": "#e81a33"
			})
			Isphone = false;
		} else {
			Isphone = true;
		}
		$(".phonenumber").css({
			"border-bottom": "1px solid #cccbc8"
		})
	}
})
$(".introduction").on({

	focus: function() {
		if (!Isintro && $(".introduction").val() == "") {
			
			$(".self_introduction").css({
				"color": "#2a74a3"
			})
			
			// Isintro = true;
		}
	},
	blur:function(){
		if($(".introduction").val() != ""){
		}
			Isintro = true;
	}

})

$(".intention ul li").click(function() {
	$(this).siblings().css({
		'backgroundColor': 'rgba(250, 250, 250, 0.96)',
		'color': '#458bac'
	}).removeClass('selected');
	$(this).css({
		'backgroundColor': '#458bac',
		'color': 'white'
	}).addClass('selected');
	Isintention = true;

})

$(".form_submit").click(function() {
	if (Isname == true && Isprofession == true && Isqq == true && Isintention == true && Isphone == true && Isintro == true && $(".introduction").val().length <= 200 && $(".introduction").val().length > 0) {
		let str = $(".selected").text();
		$(".intention_choose").html(str);


	} else {
		if ($(".introduction").val().length > 200) {
			alert("输入超限");
		} else {
			alert("信息填写不完全");
		}
	}
})

$("form").submit(function() {
	if (Isname == true && Isprofession == true && Isqq == true && Isintention == true && Isphone == true && Isintro == true && $(".self_introduction").val().length <= 200 && $(".self_introduction").val().length > 0) {

		return true;
	} else {
		if ($(".introduction").val().length > 200) {
			var a = $(".introduction").val().substr(0, 199);
			$(".introduction").val(a);

		}

		return false;
	}
});

//点击查看进程
$(".apform .check").click(function(){
	$(".apform").hide();
	$(".verify").show();
})

let ISchecknum = false;
$(".verify input").on({
	focus: function() {
		if (!Ischecknum) {
			$(".verify input").val("");
			
		}
	},
	blur: function() {
		// reg = /^[1-9][0-9]{4,10}$/;
		// if (!reg.test($(".qq").val())) {
		// 	$(".qq").val("qq");
		// 	$(".qq").css({
		// 		"color": "#e81a33"
		// 	})
		// 	Ischecknum = false;
		// } else {
		// 	Ischecknum = true;
		// }
		
	}
})
//promise
function promisesetajax(obj) {
	return new Promise((resolve, reject) => {
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
//输入编号点击查询

//要判断是否填写了编号,要返回错误信息
function checkprocess(){
var obj = {
		url: 'http://118.25.179.209/api/status/get?UserCode='+$(".verify input").val(),
		method: 'GET',
		data: {

		},
		dataType: 'Default: Intelligent Guess',
		async: true

	}
		promisesetajax(obj).then(function(data) {
			let str = "";
			if(data.success){

			if (data.status == '[]') {

			} else {
				// for (let i = 0, m = data.status.length; i < m; i++) {
					str +=`
							<div class="event">
								<span>2018年9月10日</span>
								<span> 网上报名</span>
								<span>成功</span>
							</div>
					`	



					str +=`<div class="events">
							<div class="event">
							${data.status[2].statusHappenTime}
							${data.status[2].statusName}</div>
							<div class="event"></div>
							<div class="event"></div>
						</div>`

					str += `<div class="comments clearfix">
	         			 	<div class="head"><img src="${data.comment[i].head}" alt="" /></div>
	          				<div class="right clearfix">
				            <div class="clearfix" style="margin-bottom: -5px;"> 
				              	<div class="id"></div>
				             	 <div class="time">${data.comment[i].createTime}</div>
				            </div>
				            <p>${data.comment[i].content}</p>
				          	</div>
			        	</div>
        `
				}
			// }

			}else{
				alert("查询失败!" );
			}

			$("#mCSB_1_container").append(str);



		},
		function(error) {
			alert("发生错误：" + error);
		})



}




$(".verify .check").click(function(){

	$(".verify").hide();
	$(".processform").show();
})


//输入编号点击返回
$(".verify .back").click(function(){
	$('.verify').hide();
	$(".apform").show();
})


//在报名状态下点击返回，然后回到单号页面
$(".processform .return").click(function(){

	$(".processform").hide();
	$(".verify").show();
})

