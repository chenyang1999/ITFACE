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
$(".self_introduction").on({
	focus: function() {
		if (!Isintro && $(".self_introduction").val() == "") {
			
			$(".self_introduction").css({
				"color": "#2a74a3"
			})
			
			Isintro = true;
		}
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
	if (Isname == true && Isprofession == true && Isqq == true && Isintention == true && Isphone == true && Isintro == true && $("self_introduction").val().length <= 200 && $(".self_introduction").val().length > 0) {
		let str = $(".selected").text();
		$(".intention_choose").html(str);


	} else {
		if ($(".self_introduction").val().length > 200) {
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