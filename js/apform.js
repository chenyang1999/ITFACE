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
	if ($.browser.version != "7.0") //判断是不是IE7 ，IE7下不支持“$(window).width()”
	{
		H = $(window).height(); //获得窗口宽度
		W = $(window).width(); //获得窗口高度

		$(window).resize(function() { //浏览器缩放重新获得窗口宽高
			H = $(window).height();
			W = $(window).width();

		});
		if (H < 900 && H > 800) {
			$(".intention ul li").css({
				'font-size': '18px'
			})
			$(".basic_info>div:first-child").css({
				'font-size': '18px'
			})
			$(".formheader").css({
				'font-size': '22px'
			})
			$(".intention h2").css({
				'font-size': '18px'
			})
			$(".self_introduction div").css({
				'font-size': '18px'
			})
			$(".basic_info input").css({
				'font-size': '16px'
			})
			$(".introduction").css({
				'font-size': '15px'
			})
		} else if (H <= 800 && H > 700) {
			$(".basic_info>div:first-child").css({
				'font-size': '14px'
			})
			$(".info_title").css({

				'margin-top': 0.0346 * 0.802 * H
			})
			$(".basic_info input").css({
				'font-size': '13px'
			})
			$(".intention ul li").css({
				'font-size': '15px'
			})
			$(".intention h2").css({
				'font-size': '16px'
			})
			$(".self_introduction div").css({
				'font-size': '16px'
			})
			$(".self_introduction .tip").css({
				'font-size': '12px'
			})

		} else if (H <= 700) {
			$(".intention ul li").css({
				'font-size': '11px'
			})
			$(".basic_info>div:first-child").css({
				'font-size': '13px'
			})
			$(".basic_info input").css({
				'font-size': '12px'
			})
			$(".intention h2").css({
				'font-size': '14px'
			})
			$(".self_introduction div").css({
				'font-size': '14px'
			})
			$(".info_title").css({

				'margin-top': 0.0316 * 0.802 * H
			})
			$(".introduction").css({
				'font-size': '12px',
				'line-height': '15px'
			})
			$(".self_introduction div").css({
				'font-size': '18px'
			})
			$(".self_introduction .tip").css({
				'font-size': '10px'
			})
			$(".self_introduction div").css({
				'font-size': '14px'
			})
			$(".formheader").css({
				'font-size': '16px'
			})

		}


		$(window).resize(function() {

			if (H < 900 && H > 800) {
				$(".intention ul li").css({
					'font-size': '18px'
				})
				$(".basic_info>div:first-child").css({
					'font-size': '18px'
				})
				$(".formheader").css({
					'font-size': '22px'
				})
				$(".intention h2").css({
					'font-size': '18px'
				})
				$(".self_introduction div").css({
					'font-size': '18px'
				})
				$(".basic_info input").css({
					'font-size': '16px'
				})
				$(".introduction").css({
					'font-size': '15px'
				})
			} else if (H <= 800 && H > 700) {
				$(".basic_info>div:first-child").css({
					'font-size': '14px'
				})
				$(".info_title").css({

					'margin-top': 0.0346 * 0.802 * H
				})
				$(".basic_info input").css({
					'font-size': '13px'
				})
				$(".intention ul li").css({
					'font-size': '17px'
				})
				$(".intention h2").css({
					'font-size': '16px'
				})
				$(".self_introduction div").css({
					'font-size': '16px'
				})

			} else if (H <= 700) {
				$(".intention ul li").css({
					'font-size': '14px'
				})
				$(".basic_info>div:first-child").css({
					'font-size': '15px'
				})
				$(".basic_info input").css({
					'font-size': '13px'
				})
				$(".intention h2").css({
					'font-size': '14px'
				})
				$(".self_introduction div").css({
					'font-size': '14px'
				})

			}
		})

		$(".container").height(H);
		$(".container").width(W);
		$("body").eq(0).height(H)
		$("#apform").height(0.852 * H);
		$("#apform").width(0.852 * H / 1.54);
		$(".verify").height(0.852 * H);
		$(".formbody").height(0.852 * H);
		$(".formheader").css({
			'margin-bottom': 0.021 * 0.802 * H,
		})
		$(".basic_info").height(0.075 * 0.802 * H);
		// if (H < 840) {
		// 	console.log("888")
		// 	$(".info_title").css({
		// 		'margin-top': 0.0306 * 0.802 * H
		// 	})

		// } else {
		// 	$(".info_title").css({
		// 		'margin-top': 0.0346 * 0.802 * H
		// 	})
		// }
		$(".info_title").css({
			'margin-top': 0.0346 * 0.802 * H
		})

		$(".basic_info input").css({
			'height': 0.059 * 0.802 * H,
			'margin-top': 0.0115 * 0.802 * H
		})
		$(".intention ul li").css({
			'height': 0.0599 * 0.802 * H,
			'line-height': 0.0599 * 0.802 * H + 'px'

		})

		$(".introduction").height(0.1656 * 0.802 * H);
		$(".apform button").css({
			// 'bottom':0.0322*0.802*H,
			'height': 0.058 * 0.802 * H
		})
		$(".intention").height(0.21 * 0.802 * H);
		$(".intention h2").css({
			'margin-top': 0.041 * 0.802 * H,
			'margin-bottom': 0.030 * 0.802 * H
		})
		$(".buttonwrap").css({
			'height': 0.058 * 0.802 * H,
			'margin-top': 0.037 * 0.802 * H
		})
		$(".intention ul li").eq(0).css({
			'margin-bottom': 0.03 * 0.802 * H
		})
		$(".intention ul li").eq(1).css({
			'margin-bottom': 0.03 * 0.802 * H
		})

		$(".self_introduction .title").css({
			'margin-bottom': 0.025 * 0.802 * H
		})
		if (W < '1400') {
			$(".self_introduction").css({
				'margin-top': 0.035 * 0.802 * H
			})
		} else {
			$(".self_introduction").css({
				'margin-top': 0.041 * 0.802 * H
			})
		}
		$(".verify input").height(0.0807 * 0.802 * H);
		$(".verify h2").css({
			'margin-top': 0.129 * 0.802 * H
		})
		$(".verify .inputwrap").css({
			'margin-top': 0.076 * 0.802 * H
		})
		$(".verify .verify_check,.verify .verify_back").css({
			'height': 0.0588 * 0.802 * H,
			'margin-top': 0.3587 * 0.802 * H
		})
		$(".verify .verify_back").css({
			'margin-top': 0.0357 * 0.802 * H
		})
		$(".processform .info").css({
			'margin-bottom': 0.056 * 0.802 * H
		})
		$(".state").css({
			'height': 0.401 * 0.802 * H,
			'margin-top': 0.057 * 0.802 * H
		})
		$(".line").css({
			'height': 0.403 * 0.802 * H
		})
		$(".dot").css({
			'height': 0.0138 * 0.802 * H
		})
		$(".dot").eq(0).css({
			'bottom': 0.0346 * 0.802 * H
		})
		$(".dot").eq(1).css({
			'bottom': 0.201 * 0.802 * H
		})
		$(".dot").eq(2).css({

			'top': 0.0346 * 0.802 * H
		})
		$(".event").eq(0).css({
			'bottom': 0.0346 * 0.802 * H

		})
		$(".event").eq(1).css({
			'bottom': 0.180 * 0.802 * H
		})
		$(".event").eq(2).css({
			'top': 0.0346 * 0.802 * H
		})
		$(".processform .return").css({
			// 'bottom': 0.047 * 0.802 * H,
			'height': 0.0588 * 0.802 * H
		})



		$(window).resize(function() { //浏览器缩放重新获得窗口宽高
			$(".container").height(H);
			$(".container").width(W);
			$("body").eq(0).height(H)
			$("#apform").height(0.852 * H);
			$("#apform").width(0.852 * H / 1.54);
			$(".verify").height(0.852 * H);
			$(".formbody").height(0.852 * H);
			$(".formheader").css({
				'margin-bottom': 0.021 * 0.802 * H,
			})
			$(".basic_info").height(0.075 * 0.802 * H);
			$(".basic_info input").css({
				'height': 0.059 * 0.802 * H,
				'margin-top': 0.0115 * 0.802 * H
			})
			// if (H < 610) {
			// 	console.log("888")
			// 	$(".info_title").css({
			// 		'margin-top': 0.0156 * 0.802 * H
			// 	})

			// } else if (H < 840) {
			// 	// alert("999")
			// 	console.log("888")
			// 	$(".info_title").css({
			// 		'margin-top': 0.0206 * 0.802 * H
			// 	})

			// } else {
			$(".info_title").css({
				'margin-top': 0.0346 * 0.802 * H
			})
			// }
			$(".intention ul li").css({
				'height': 0.0599 * 0.802 * H,
				'line-height': 0.0599 * 0.802 * H + 'px'

			})
			$(".introduction").height(0.1656 * 0.802 * H);

			$(".apform button").css({
				// 'bottom':0.0322*0.802*H,
				'height': 0.058 * 0.802 * H
			})
			$(".intention").height(0.21 * 0.802 * H);
			$(".intention h2").css({
				'margin-top': 0.041 * 0.802 * H,
				'margin-bottom': 0.030 * 0.802 * H
			})
			$(".buttonwrap").css({
				'height': 0.058 * 0.802 * H,
				'margin-top': 0.037 * 0.802 * H
			})
			$(".intention ul li").eq(0).css({
				'margin-bottom': 0.03 * 0.802 * H
			})
			$(".intention ul li").eq(1).css({
				'margin-bottom': 0.03 * 0.802 * H
			})

			$(".self_introduction .title").css({
				'margin-bottom': 0.026 * 0.802 * H
			})
			if (W < '1400') {
				$(".self_introduction").css({
					'margin-top': 0.035 * 0.802 * H
				})
			} else {
				$(".self_introduction").css({
					'margin-top': 0.041 * 0.802 * H
				})
			}
			$(".verify input").height(0.0807 * 0.802 * H)
			$(".verify h2").css({
				'margin-top': 0.129 * 0.802 * H
			})
			$(".verify .inputwrap").css({
				'margin-top': 0.076 * 0.802 * H
			})
			$(".verify .verify_check,.verify .verify_back").css({
				'height': 0.0588 * 0.802 * H,
				'margin-top': 0.3587 * 0.802 * H
			})
			$(".verify .verify_back").css({
				'margin-top': 0.0357 * 0.802 * H
			})
			$(".processform .info").css({
				'margin-bottom': 0.056 * 0.802 * H
			})
			$(".state").css({
				'height': 0.401 * 0.802 * H,
				'margin-top': 0.057 * 0.802 * H
			})
			$(".line").css({
				'height': 0.403 * 0.802 * H
			})
			$(".dot").css({
				'height': 0.0138 * 0.802 * H
			})
			$(".dot").eq(0).css({
				'bottom': 0.0346 * 0.802 * H
			})
			$(".dot").eq(1).css({
				'bottom': 0.201 * 0.802 * H
			})
			$(".dot").eq(2).css({
				'top': 0.0346 * 0.802 * H

			})
			$(".event").eq(0).css({
				'bottom': 0.0346 * 0.802 * H

			})
			$(".event").eq(1).css({
				'bottom': 0.180 * 0.802 * H
			})
			$(".event").eq(2).css({
				'top': 0.0346 * 0.802 * H
			})
			$(".processform .return").css({
				// 'bottom': 0.047 * 0.802 * H,
				'height': 0.0588 * 0.802 * H
			})


		})



	} else {

	}


let Isname = false,
		Isprofession = false,
		Isqq = false,
		Isphone = false,
		Isintro = false,
		Isintention = false,
		Isemail = false,
		reg = new Array();

	//姓名事件

	$(".name").focus(function() {
		if(Isname == false)
		{
			$(this).val('')
		}
		
		$(this).css({
			"border-bottom": " 1px solid #2a74a3",
			"color": "#2a74a3"
		})
	})

	$(".name").blur(function() {
	
		reg[0] = /^[\u4e00-\u9fa5]{2,10}$/;
		if (reg[0].test($(this).val()) == false) {
			$(this).val("请输入正确的姓名");
			$(this).css({
				"color": "#e81a33"
			})
			Isname = false;
		} else {
			$(this).css({
				'border-bottom': '2px solid rgba(204, 204, 204, 0.6)'
			})
			Isname = true;
		}
	})


	//专业事件

	$(".profession").focus(function() {
		if(Isprofession == false)
		{
			$(this).val('')
		}
		$(this).css({
			"border-bottom": " 1px solid #2a74a3",
			"color": "#2a74a3"
		})
	})

	$(".profession").blur(function() {
	reg[4] = /^201[5678][\u4e00-\u9fa5]{2,15}$/;
		if (reg[4].test($(this).val()) == false) {
			$(this).val("请输入正确的年级/专业（例：2018药学");
			$(this).css({
				"color": "#e81a33"
			})
			Isprofession = false;
		} else {
			$(this).css({
				'border-bottom': '2px solid rgba(204, 204, 204, 0.6)'
			})
			Isprofession = true;
		}
	})


	//qq号码事件
	$(".qq").focus(function() {
		if(Isqq == false)
		{
			$(this).val('')
		}
		$(this).css({
			"border-bottom": " 1px solid #2a74a3",
			"color": 'black'
		})
	})

	$(".qq").blur(function() {
		reg[1]=/^[1-9][0-9]{4,9}$/gim;
		if (reg[1].test($(this).val()) == false) {
			$(this).val("请输入正确的qq号码");
			$(this).css({
				"color": "#e81a33"
			})
			Isqq = false;
		} else {
			$(this).css({
				'border-bottom': '2px solid rgba(204, 204, 204, 0.6)'
			})
			Isqq = true;
		}
	})


	//手机号
	$(".phonenumber").focus(function() {
		if(Isphone == false)
		{
			$(this).val('')
		}
		$(this).css({
			"border-bottom": " 1px solid #2a74a3",
			"color": '#e81a33'
		})
	})

	$(".phonenumber").blur(function() {
	reg[2]= /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
		if (reg[2].test($(this).val()) == false) {
			$(this).val("请输入正确的手机号");
			$(this).css({
				"color": "#e81a33"
			})
			Isphone = false;
		} else {
			$(this).css({
				'border-bottom': '2px solid rgba(204, 204, 204, 0.6)'
			})
			Isphone = true;
		}
	})
//验证邮箱信息


$(".email").focus(function() {
		if(Isemail == false)
		{
			$(this).val('')
		}
		$(this).css({
			"border-bottom": " 1px solid #2a74a3",
			"color": 'black'
		})
	})

	$(".email").blur(function() {
	reg[3] = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if (reg[3].test($(this).val()) == false) {
			$(this).val("请输入正确的邮箱号码");
			$(this).css({
				"color": "#e81a33"
			})
			Isemail = false;
		} else {
			$(this).css({
				'border-bottom': '2px solid rgba(204, 204, 204, 0.6)'
			})
			Isemail = true;
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

	//个人介绍事件

	$(".introduction").blur(function(){
		if($(this).val().length>0 && $(this).val().length<200)
		{
			Isintro = true;
		}
		else{
			Isintro =false;
		}

	})
	$(".introduction").keydown(function(event){
		if ($(this).val().length > 200 && event.keyCode != 8) {
			alert("字数太多了！");
			$(this).val($(this).val().substring(0, 200));

		}
	})









	//验证表单是否有空项


	function check_form() {
		for (var i = 0; i < document.apform.elements.length - 2; i++) {
			if (document.apform.elements[i].value == "") {
				alert("表单不可为空!");
				document.apform.elements[i].focus();

				return false;
			}
		}
		return true;

	}
	function correct_form(){
		if(Isname == false ||Isprofession == false||Isqq == false||Isphone ==false||Isintro == false||Isintention == false||Isemail == false)
		{
			alert("请正确填写表单信息!")
			return false;
		}
		else{
			
			return true;
		}
		
		
	}


	//先触发submit事件,判断一下表单是否为空
$(".apform").submit(function() {
	if (check_form() && correct_form()) {
		let wantdepart = $(".selected").val();
		$(".intention_choose").val(wantdepart);
		$.ajax({
			type: "POST",
			url: "/api/sign/submit",
			// timeout: 5000,
			data: {
				name: $(".name").val(),
				yearAndMajor: $(".profession").val(),
				qq: $(".qq").val(),
				phone: $(".phonenumber").val(),
				email: $(".email").val(),
				wantDepartment: $(".intention_choose").val(),
				selfIntro: $(".introduction").val(),
			},
			dataType: "json",
			//发送成功可以返回的东西
			success: function(data) {
				if (data.statusC == 0) {
					alert("表单提交成功，请注意邮件查收!");
				} else {
					alert("表单提交失败!")
				}

			},
			error: function(jqXHR) {
				alert("表单提交失败:" + jqXHR.status);
			},
		});
	}else{
		return false;
	}

})





	//点击查看进程
	$(".apform_check").click(function() {
		$(".apform").hide();
		$(".verify").show();
	});


	$(".verify_check").click(function() {
		if ($(".inputwrap input").val() == '') {
			alert('查询编号不可为空!');
		} else {
			// $.ajax({
			//     type: "GET",
			//     url: "/api/status/get?userCode=" + $("#usercodeinput").val(),
			//     timeout: 5000,
			//     dataType: "json",
			//     //发送成功可以返回的东西
			//     success: function (data) {
			//         if (data.success) {
			//             $(".cname").html(data.name);
			//             $(".cmajor").html(data.major);
			//             $(".cdepart").html(data.wantDepart);
			//
			//             x = [0, 1, 2];
			//             x.forEach(function (v) {
			//                 if (data.status[v])
			//                     $(".status" + x[v].toString()).html("状态：" + data.status[v].statusName + "，发生于：" + data.status[v].statusHappenTime);
			//             })
			//             $(".verify").hide();
			//             $(".processform").show();
			//         } else {
			//             alert("获取失败");
			//         }
			//     },
			//     error: function (jqXHR) {
			//         alert("服务器错误请重试，错误代码：" + jqXHR.status);
			//     },
			// });
			var obj = {
				method: "GET",
				url: "/api/status/get?userCode=" + $("#usercodeinput").val(),
				timeout: 5000,
				dataType: 'Default: Intelligent Guess',
				async: true
			}
			promisesetajax(obj).then(function(data) {
				if (data.success) {
					$(".cname").html(data.name);
					$(".cmajor").html(data.major);
					$(".cdepart").html(data.wantDepart);

					x = [0, 1, 2];
					x.forEach(function(v) {
						if (data.status[v])
							$(".status" + x[2 - v].toString()).html("状态：" + data.status[v].statusName + "，发生于：" + data.status[v].statusHappenTime);
						else {
							$(".status" + x[2 - v].toString()).html("");
						}
					})
					// var str22 ='';
					// for (let i = 0, m = data.status.length; i < m; i++) {
					//
					// 	str22 += `
					// 	<div class="event">
					// 		<span>${data.status[i].statusHappenTime}</span>
					// 		<span>${data.status[i].statusName}</span>
					//
					// 	</div>
					// `
					//
					//
					// }
					// $("events").append(str22);
					$(".verify").hide();
					$(".processform").show();
				} else {
					alert("查询失败!");
				}
			}, function(error) {
				alert("发生错误：" + error);

			})
		}
	});


	//输入编号点击返回
	$(".verify_back").click(function() {
		$('.verify').hide();
		$('.apform').show();
	});


	//在报名状态下点击返回，然后回到单号页面
	$(".processform .return").click(function() {

		$(".processform").hide();
		$(".verify").show();
	})

	// 	let ISchecknum = false;
	// 	$(".verify input").on({
	// 		focus: function() {
	// 			if (!Ischecknum) {
	// 				$(".verify input").val("");
	//
	// 			}
	// 		},
	// 		blur: function() {
	// 			// reg = /^[1-9][0-9]{4,10}$/;
	// 			// if (!reg.test($(".qq").val())) {
	// 			// 	$(".qq").val("qq");
	// 			// 	$(".qq").css({
	// 			// 		"color": "#e81a33"
	// 			// 	})
	// 			// 	Ischecknum = false;
	// 			// } else {
	// 			// 	Ischecknum = true;
	// 			// }
	//
	// 		}
	// 	})
	// 	//promise
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
	// 	//输入编号点击查询
	// chec// kprocess();
	// 	//要判断是否填写了编号,要返回错误信息
	// 	function checkprocess() {
	// 		// + $(".verify input").val()
	//
	//
	// 		var obj = {
	// 			url: 'http://118.25.179.209/api/status/get?UserCode=1',
	// 			method: 'GET',
	// 			data: {
	//
	// 			},
	// 			dataType: 'Default: Intelligent Guess',
	// 			async: true
	//
	// 		}
	// 		promisesetajax(obj).then(function(data) {
	// 				let str = "";
	// 				if (data.success) {
	//
	// 					if (data.status == '[]') {
	//
	// 					} else {
	// 						for (let i = 0, m = data.status.length; i < m; i++) {
	// 							str += `
	// 							<div class="event">
	// 								<span>${data.status[i].statusHappenTime}</span>
	// 								<span>${data.status[i].statusName}</span>
	//
	// 							</div>
	// 					`
	//
	//
	// 						}
	//
	// 					}
	//
	// 					$("events").append(str);
	// 				}
	//
	//
	// 			},
	// 			function(error) {
	// 				alert("发生错误：" + error);
	//
	// 			})
	//
	//
	//
	// 	}



// });