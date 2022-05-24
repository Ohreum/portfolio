$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$("#mobile").toggleClass("active");
		$(".dim").toggleClass("active");
		$(".tab").toggleClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("fixed");
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");	
		$(".tab").removeClass("active");
	});

	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#mobile > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#mobile ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);		
		}
	});

    var swiper = new Swiper("#main_slider .mySwiper", {
		speed: 1200,
		effect: "fade",
		loop: true,
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: ".swiper-pagination",
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

	var page1_swiper = new Swiper("#page1_slider .mySwiper", {
		speed: 900,
        effect: "flip",
        grabCursor: true,
		loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

	$(window).scroll(function(){
		//console.log($(window).scrollTop());
		var n=$(window).scrollTop();
		if(n >= 300){
			$("#page1").addClass("active");
		}
		if(n >= 640){
			$("#our_product").addClass("active");
		}
		if(n >= 900){
			$("#page2").addClass("active");
		}
		if(n >= 1300){
			$("#page3").addClass("active");
		}
		if(n >= 1700){
			$("#page4").addClass("active");
		}
	});

	var page2_swiper = new Swiper("#page2_slider .mySwiper", {
		slidesPerView: 1.5,
		spaceBetween: 12,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: "#page2_slider .swiper-button-next",
			prevEl: "#page2_slider .swiper-button-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
		},
	});
});