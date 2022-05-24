$(function(){

	var swiper = new Swiper(".mySwiper", {
		loop: true,
		speed: 1200,
		effect: "fade",
		click: true,
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
		},
        pagination: {
        	el: ".swiper-pagination",
			clickable: true,
        },
    });
	$(".prev").click(function(e){
		e.preventDefault();
		swiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		swiper.slideNext();
	});
	$(".play").click(function(e){
		e.preventDefault();
		swiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			swiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			swiper.autoplay.stop();	
		}
	});

	var t=0;
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var winHalf=$(window).height()/2;
	var winThird=$(window).height()/3;

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#highone_is").offset().top-winThird){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;

			if((scrollT+$(window).height()) == $(document).height()){
				pageN=4;
			}
		}
		else{
			pageN=4;
		}

		$(".control li").removeClass("on");
		$(".control li").eq(pageN).addClass("on");

		if(scrollT > 550){
			$("#page2").addClass("active");
		}
		if(scrollT > 2425){
			$("#page4").addClass("active");
		}
		if(scrollT > 2740){
			$("#page4 .customer .notice").addClass("active");
			$("#page4 .customer .pr_center").addClass("active");
		}
		if(scrollT > 3060){
			$("#page4 .franchise li").addClass("active");
		}

    	if(scrollT > 100){
         	$(".top").addClass("fixed");
    	}
    	else{
    	$(".top").removeClass("fixed");
    	}
   });

	$(".control li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		// $(".control li").removeClass("on");
		// $(this).addClass("on");

		if(pageN == 0 ){
			targetY=0;
		}
		// else if(pageN == 1){
		// 	targetY=$("#page2").offset().top;			
		// }
		// else if(pageN == 2){
		// 	targetY=$("#page3").offset().top;	
		// }
		else if(pageN == 3){
			targetY=$("#highone_is").offset().top;
		}
		else if(pageN == 4) {
			targetY=$("#page4").offset().top;				
		}
		else{
			targetY=$("#page"+(pageN+1)).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);		
	});

	$(".top").hover(
		function(){
			$(".top").addClass("over");
		},
		function(){
			$(".top").removeClass("over");
		}
	);
	
	$("nav > ul > li:first-child > a").focusin(function(){
		$(".top").addClass("over");
	});
	$("nav li:last-child li:last-child a").focusout(function(){
		$(".top").removeClass("over");
	});
	$("nav > ul > li > a").focusin(function(){
		$(this).parent().addClass("over");
	});
	$("nav li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("over");
	});
});