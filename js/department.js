var ellipse=[],dpNowAngle=[],dpMaxAngle=[],dpMinAngle=[],dpAngleAdd=[],fps=[],alltime=[],blockw=[],blockh=[],hoverFlag=[],clickFlag=[],departNum=4;

$(document).ready(function() {
	$(".menu").children().eq(2).addClass("nowpage");
	localwee();
	
	for (var i=1;i<=4;i++){
		ellipse[i]=new _ellipse();
	}
	
	dpMaxAngle[1]=70;
	dpMinAngle[1]=10;
	alltime[1]=6000;
	fps[1]=300;
	
	dpMaxAngle[2]=55;
	dpMinAngle[2]=7;
	alltime[2]=7000;
	fps[2]=300;
	
	dpMaxAngle[3]=43;
	dpMinAngle[3]=5;
	alltime[3]=8000;
	fps[3]=300;
	
	dpMaxAngle[4]=38;
	dpMinAngle[4]=5;
	alltime[4]=9000;
	fps[4]=300;
	
	for (var i=1;i<=departNum;i++){
		var dphandle=".dp"+i.toString();
		dpNowAngle[i]=dpMinAngle[i];
		dpAngleAdd[i]=(dpMaxAngle[i]-dpMinAngle[i])/fps[i];
		blockw[i]=$(dphandle).children().eq(0).width();
		blockh[i]=$(dphandle).children().eq(0).height();
		hoverFlag[i]=false;
		clickFlag[i]=false;
	}

	var timeout1 = setTimeout(function(){  
		allInterval[".dp1"]=setInterval(function(){
			rotateFlash(1)
		},alltime[1]/fps[1]);
		
		allInterval[".dp2"]=setInterval(function(){
			rotateFlash(2)
		},alltime[2]/fps[2]);
		
		allInterval[".dp3"]=setInterval(function(){
			rotateFlash(3)
		},alltime[3]/fps[3]);
		
		allInterval[".dp4"]=setInterval(function(){
			rotateFlash(4)
		},alltime[4]/fps[4]);
	},100); 
})
// var timeout = setTimeout(function(){
// },100);
$(window).on('load resize', function() {
    sw = $('.container').width();
	sh = $('.container').height();
	var timeout = setTimeout(function(){  
	ellipse[1].center.l=sw*0.05;
	ellipse[1].center.t=sh*0.971;
	ellipse[1].w=sw*0.4;
	ellipse[1].h=sh*0.6;
	ellipse[1].angle=10;
	draw(1);
	
	ellipse[2].center.l=sw*0.05;
	ellipse[2].center.t=sh*0.971;
	ellipse[2].w=sw*0.56;
	ellipse[2].h=sh*0.73;
	ellipse[2].angle=5;
	draw(2);
	
	ellipse[3].center.l=sw*0.05;
	ellipse[3].center.t=sh*0.971;
	ellipse[3].w=sw*0.72;
	ellipse[3].h=sh*0.85;
	ellipse[3].angle=7;
	draw(3);
	
	ellipse[4].center.l=sw*0.05;
	ellipse[4].center.t=sh*0.971;
	ellipse[4].w=sw*0.88;
	ellipse[4].h=sh*1;
	ellipse[4].angle=5;
	draw(4);
	
	for (var i=1;i<=departNum;i++){
		var dphandle=".dp"+i.toString();
		blockw[i]=$(dphandle).children().eq(0).width();
		blockh[i]=$(dphandle).children().eq(0).height();
		$(dphandle).css({
			"width":blockw[i],
		})
		
		var wordhandle = ".word"+i.toString();
		var tp=new _point();
		getPoint(tp,dpNowAngle[i],i);
		var wordw=$(wordhandle).width();
		var wordh=$(wordhandle).height();	
		if (i==4){
			tp.l=tp.l-wordw/2;
		}		
		$(wordhandle).css({
			"left":tp.l-wordw/2,
			"top":tp.t-wordh/2,
		})
	}
},100); 
});

function rotateFlash(i) {
	var dphandle=".dp"+i.toString();
	if (!(clickFlag[i]||hoverFlag[i]))
		dpNowAngle[i]+=dpAngleAdd[i];
	// console.log(i);
	if (dpNowAngle[i]>=dpMaxAngle[i]){
		dpAngleAdd[i]=-Math.abs(dpAngleAdd[i]);
	}
	if (dpNowAngle[i]<=dpMinAngle[i]){
		dpAngleAdd[i]=Math.abs(dpAngleAdd[i]);
	}
	var tp=new _point();
	getPoint(tp,dpNowAngle[i],i);
	$(dphandle).css({
		"left":tp.l-blockw[i]/2,
		"top":tp.t-blockh[i]/2,
	})
}

function _point(){
	this.l=0;
	this.t=0;
}

function _ellipse(){
	this.center = new _point();
	this.w = 0; // 轴1
	this.h = 0; // 轴2  轴2方向为轴1方向逆时针转90度
	this.angle = 0; // 轴1与x轴的夹角
}

function draw(i){
	var circlehandle=".cir"+i.toString();
	var ell=ellipse[i];
	var tempa=-ell.angle;
	$(circlehandle).css({
		"width":ell.w*2,
		"height":ell.h*2,
		
		"left":ell.center.l-ell.w,
		"top":ell.center.t-ell.h,
		
		'transform':'rotate('+tempa.toString()+'deg)',
		'-webkit-transform':'rotate('+tempa.toString()+'deg)',
		'-moz-transform':'rotate('+tempa.toString()+'deg)',
		'-ms-transform':'rotate('+tempa.toString()+'deg)',
		'-o-transform':'rotate('+tempa.toString()+'deg)',
	})
}

function getPoint(tempPoint,angle,i){
	var ell=ellipse[i];
	var h=ell.h,w=ell.w,pi=Math.PI;
	var a=ell.angle*pi/180,b=angle*pi/180;
	tempPoint.l = ell.center.l + h * Math.cos(a+pi/2) * Math.sin(b-a) + w * Math.cos(a) * Math.cos(b-a);
	tempPoint.t = ell.center.t - h * Math.sin(a+pi/2) * Math.sin(b-a) - w * Math.sin(a) * Math.cos(b-a);
}

$(".dp").hover(function(){
	$(this).children().eq(1).css("opacity","1");
	for (var i=1;i<=departNum;i++){
		if ($(this).hasClass("dp"+i.toString())){
			hoverFlag[i]=true;
		}
	}
},function(){
	$(this).children().eq(1).css("opacity","0");
	for (var i=1;i<=departNum;i++){
		if ($(this).hasClass("dp"+i.toString())){
			hoverFlag[i]=false;
		}
	}
});

$(".dp").click(function(){
	for (var i=1;i<=departNum;i++){
		var wordhandle = ".word"+i.toString();
		if ($(this).hasClass("dp"+i.toString())){
			clickFlag[i]=true;
			var tp=new _point();
			getPoint(tp,dpNowAngle[i],i);
			var wordw=$(wordhandle).width();
			var wordh=$(wordhandle).height();
			if (i==4){
				tp.l=tp.l-wordw/2;
			}
			$(wordhandle).css({
				"left":tp.l-wordw/2,
				"top":tp.t-wordh/2,
			})
			$(wordhandle).show();
		} else {
			clickFlag[i]=false;
			$(wordhandle).hide();
		}
	}
})

$(".close").click(function(){
	$(this).parent().hide();
	for (var i=1;i<=departNum;i++){
		clickFlag[i]=false;
	}
})

$(".cir").click(function(){
	for (var i=1;i<=departNum;i++){
		var wordhandle = ".word"+i.toString();
		clickFlag[i]=false;
		$(wordhandle).hide();
	}
})

$(".backgroundImg").click(function(){
	for (var i=1;i<=departNum;i++){
		var wordhandle = ".word"+i.toString();
		clickFlag[i]=false;
		$(wordhandle).hide();
	}
})

