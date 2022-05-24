$(function(){
	
	var t=0;
	var n=0;

	$(window).scroll(function(){
	
		//변수부
		t=$(window).scrollTop();
	
		if(t < $("#page1").offset().top-winHalf){
			n=0;
		}
		else if(t < $("#page2").offset().top-winHalf){
			n=1;
		}
		else if(t < $("#page3").offset().top-winHalf){
			n=2;
		}
		else if(t < $("#page4").offset().top-winHalf){
			n=3;
		}
		else if(t < $("#page5").offset().top-winHalf){
			n=4;
		}
		else{
			n=5;
		}

		$("#gnb li a").removeClass("on");
		$("#gnb li").eq(n).find("a").addClass("on");
		
		if(t > 100){
			$(".menu_zone").addClass("active");
			if($(".btn_top").css("display") == "none"){
				$(".btn_top").fadeIn(300);
			}
		}
		else{
			$(".menu_zone").removeClass("active");
			if($(".btn_top").css("display") == "block"){
				$(".btn_top").fadeOut(300);
			}
		}
		if(n == 0) {
			$("#header").addClass("active");
		}
		else {
			$("#page"+n).addClass("active");
		}	
	});

	$(window).trigger("scroll");
	
	var winHalf;

	$(window).resize(function(){
		winHalf=$(window).height()/2;
	});
	$(window).trigger("resize");
	$(window).trigger("scroll");

	$(".tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$(".mobile").toggleClass("active");
		$(".tab").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("fixed");
		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});

	var topArea;
	var topPos;

	$("#gnb li").click(function(e){
		e.preventDefault();
		topArea=$(this).find("a").attr("href");
		topPos=$(topArea).offset().top;
		$("html").animate({scrollTop : topPos}, 300);
	});
	$("#m_gnb li").click(function(e){
		e.preventDefault();

		$("body").removeClass("static");
		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");

		topArea=$(this).find("a").attr("href");
		topPos=$(topArea).offset().top;
		$("html").delay(500).animate({scrollTop : topPos}, 300);
	});
});