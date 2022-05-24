$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$("#mobile").toggleClass("active");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$("#mobile").toggleClass("active");		
	});
	$(".menu > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$(".menu > ul > li").removeClass("active");
			$(this).addClass("active");
			$(".menu ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);	
		}
	});

	var swiper = new Swiper("#main_slider .mySwiper", {
		loop: true,
		autoplay: {
			delay: 20000,
		},
		pagination: {
		  el: "#main_slider .swiper-pagination"
		},
	});

	const video=document.getElementById("my_video");
	video.muted=true;
	video.play();

	/*page1_공간설명 페이지*/

	var thumbSlider=new Swiper("#sub_slider .thumbs", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true
	});
	var subMainSlider=new Swiper("#sub_slider .big", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: "#sub_slider .swiper-button-next",
			prevEl: "#sub_slider .swiper-button-prev"
		},
		thumbs: {
			swiper: thumbSlider
		}
	});



	var thumbSlider=new Swiper("#sub_slider2 .thumbs", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true
	});
	var subMainSlider=new Swiper("#sub_slider2 .big", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: "#sub_slider2 .swiper-button-next",
			prevEl: "#sub_slider2 .swiper-button-prev"
		},
		thumbs: {
			swiper: thumbSlider
		}
	});


	var thumbSlider=new Swiper("#sub_slider3 .thumbs", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true
	});
	var subMainSlider=new Swiper("#sub_slider3 .big", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: "#sub_slider3 .swiper-button-next",
			prevEl: "#sub_slider3 .swiper-button-prev"
		},
		thumbs: {
			swiper: thumbSlider
		}
	});

	/*page1 공간 설명 페이지*/

	$("#page1 .sub_banner, #sub_slider").addClass("active");

	$("#page1 .sub_banner").click(function(e){
		e.preventDefault();

		if($("#sub_slider").hasClass("active")==false){
			$("#page1 .sub_banner, #sub_slider").addClass("active");
			$("#sub_slider2, #page1 .sub_banner2, #sub_slider3, #page1 .sub_banner3").removeClass("active");
		}
	});
	$("#page1 .sub_banner2").click(function(e){	
		e.preventDefault();

		if($("#sub_slider2").hasClass("active")==false){
			$("#page1 .sub_banner2, #sub_slider2").addClass("active");
			$("#sub_slider, #page1 .sub_banner, #sub_slider3, #page1 .sub_banner3").removeClass("active");
		}
	});
	$("#page1 .sub_banner3").click(function(e){	
		e.preventDefault();

		if($("#sub_slider3").hasClass("active")==false){
			$("#page1 .sub_banner3, #sub_slider3").addClass("active");
			$("#sub_slider, #page1 .sub_banner, #sub_slider2, #page1 .sub_banner2").removeClass("active");
		}
	});

	/*page4 이벤트 페이지*/

	var page4_swiper = new Swiper("#page4_slider .mySwiper", {
		speed: 1200,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		slidesPerView: 1.5,
		spaceBetween: 12,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: "#page4_slider .swiper-button-next",
			prevEl: "#page4_slider .swiper-button-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
		},
	});
	$(".play").click(function(e){
		e.preventDefault();
		page4_swiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			page4_swiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			page4_swiper.autoplay.stop();	
		}
	});


});