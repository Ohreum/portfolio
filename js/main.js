window.addEventListener("load", () => {
	
	/*-----------------------메인 페이지 비디오-----------------------*/
	let videoUrl=["video1", "video2", "video3"];
	let videoTotal=videoUrl.length-1;
	let videoN=0;
	let videoPath="";
	let video=this.document.getElementById("my_video");
	


	video.muted=true;
	video.play();

	video.addEventListener("ended", () => {
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.play();

	});
	/*--------------------------------------------------------------*/
	
	let body=this.document.body;
	let wrapper=document.getElementsByClassName("wrapper")[0];
	let header=document.getElementById("header");
	let mainpage=document.getElementById("mainpage");
	let logo=header.getElementsByClassName("logo")[0];
	let gnb=document.getElementById("gnb");
	let gnbUl=gnb.firstElementChild;
	let gnbLi=gnbUl.children;
	let controller=mainpage.getElementsByClassName("controller")[0];
	let controllerUl=controller.firstElementChild;
	let controllerLi=controllerUl.children;
	let tab=header.getElementsByClassName("tab")[0];
	let floating_menu=header.getElementsByClassName("floating_menu")[0];
	let floatingUl=floating_menu.firstElementChild.children[0];
	let floatingLi=floatingUl.children;
	let contentList=[];

	for(let i=0; i<wrapper.children.length; i++){
		if(wrapper.children[i].tagName  == "SECTION"){
			contentList.push(wrapper.children[i]);
		}
	}

	let scrollT=0;
	let pageN=0;
	let targetY=0;
	let winHalf;
	let transition=false;
	let categoryFlag=false;

	controllerLi[0].classList.add("active");
	gnbLi[0].classList.add("active");
	floatingLi[0].classList.add("active");
	
	window.addEventListener("scroll", () => {
		scrollT=window.pageYOffset;
		if(scrollT < contentList[0].offsetTop-winHalf){
			pageN=0;
		}
		else if(scrollT < contentList[1].offsetTop-winHalf){
			pageN=1;
		}
		else if(scrollT < contentList[2].offsetTop-winHalf){
			pageN=2;
		}
		else if(scrollT < contentList[3].offsetTop-winHalf){
			pageN=3;

			if((scrollT+window.innerHeight) == document.documentElement.scrollHeight){
				pageN=4;
			}
		}
		else{
			pageN=4;
		}
	
		for(let i=0; i<floatingLi.length; i++){
			if(i == pageN) {
				floatingLi[pageN].classList.add("active");
				gnbLi[pageN].classList.add("active");
				controllerLi[pageN].classList.add("active");			
			}
			else{
				floatingLi[i].classList.remove("active");	
				gnbLi[i].classList.remove("active");
				controllerLi[i].classList.remove("active");			
			}
		}

		if(!pageN == 0){
			gnb.classList.add("dark");
			controller.classList.add("dark");
			logo.classList.add("dark");
			tab.classList.add("dark");
		}
		else {
			gnb.classList.remove("dark");
			controller.classList.remove("dark");
			logo.classList.remove("dark");
			tab.classList.remove("dark");			
		}
	});


	if(categoryFlag){
			return;
		}
	else{
		if(pageN == 0){
			header.classList.add("active");
		}
		else{
			// $("#page"+pageN).addClass("active");
			contentList[pageN].classList.add("active");
			if(pageN == 4){
				categoryFlag=true;
			}
		}
	}

	$(window).resize(() => {
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");	


	tab.addEventListener("click", (e) => {
		e.preventDefault();

		if(e.currentTarget.classList.contains("active")){
			floating_menu.classList.remove("active");
			tab.classList.remove("active");
		}
		else{
			floating_menu.classList.add("active");
			tab.classList.add("active");
		};
	});

	var n;
	
	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].index=i;
		controllerLi[i].index=i;
		floatingLi[i].index=i;

		gnbLi[i].addEventListener("mouseenter", function(e){
			e.preventDefault();
			
			if(n == e.currentTarget.index) return;
			n=e.currentTarget.index;

			for(j=0; j<gnbLi.length; j++){
				if(j == n){
					gnbLi[j].classList.add("active");
				}
				else{
					gnbLi[j].classList.remove("active");							
				}
			}
		});
		controllerLi[i].addEventListener("mouseenter", (e) => {
			e.preventDefault();
			
			if(n == e.currentTarget.index) return;
			n=e.currentTarget.index;

			for(j=0; j<controllerLi.length; j++){
				if(j == n){		
					controllerLi[j].classList.add("active");
				}
				else{
					controllerLi[j].classList.remove("active");								
				}
			}
		});
	}
	
	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].addEventListener("click", (e) => {
			ClickMoving(e);
		});
		controllerLi[i].addEventListener("click", (e) => {
			ClickMoving(e);
		});
		floatingLi[i].addEventListener("click", (e) => {
			e.preventDefault();
			pageN=e.currentTarget.index;

			if(pageN == 0){
				targetY=0;
			}
			else{
				targetY=wrapper.children[pageN + 1].offsetTop;
			}

			transition=true;
			body.classList.remove("fixed");
			tab.classList.remove("active");
			floating_menu.classList.remove("active");
		});
	}
	
	function ClickMoving(e){
		e.preventDefault();
		pageN=e.currentTarget.index;

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=wrapper.children[pageN + 1].offsetTop;
		}
		
		gsap.to(document.documentElement, {scrollTop : targetY, duration: 0.3})
	}

	$(".floating_menu").on("transitionend", () => {
		if($(this).hasClass("active") == false && transition){
			transition=false;
			$("html").animate({"scrollTop":targetY}, 300);
		}
	});

	const content = "Hi. I'm Ohreum, \n Want to be a \n Front-end developer.";
	const text = document.querySelector(".text");
	let num = 0;

	// function sleep(delay){
	// 	const start = new Date().getTime();
	// 	while (new Date().getTime() < start + delay);
	// }

	function typing(){
  		let txt = content[num++];
  		text.innerHTML += txt=== "\n" ? "<br/>": txt;
		if (num > content.length) {
 	    	text.textContent = "";
  	   		num = 0;
	    }
	}	
	setInterval(typing, 180);

//------------------------- page2 -------------------------

	let page2=document.getElementById("page2");
	let skill=page2.getElementsByClassName("skill_list")[0];
	let skillUl=skill.firstElementChild;
	let skillLi=skillUl.children;
	let skill_text=skill.getElementsByClassName("text");
	var n;

	init();

	function init(){
		skillLi[0].classList.add("active");
		skill_text[0].classList.add("active");
		for(let i=1; i<skill_text.length; i++){
			skill_text[i].classList.add("narr");
		}
	}	

	for(let i=0; i<skillLi.length; i++){
		skillLi[i].index=i;
		
		skillLi[i].addEventListener("click", (e) => {
			e.preventDefault();

			if(n == e.currentTarget.index) return;
			n=e.currentTarget.index;
			
			for(let j=0; j<skillLi.length; j++){	
				if(j == n){
					textActiveAdd(j);			
				}
				else{
					textActiveRemove(j);						
				}
			}
		});
	}
	function textActiveAdd(j){
		skillLi[j].classList.add("active");	
		skill_text[j].classList.add("active");	
		skill_text[j].classList.remove("narr");			
	}
	function textActiveRemove(j){	
		skillLi[j].classList.remove("active");
		skill_text[j].classList.remove("active");
		skill_text[j].classList.add("narr");
	}

// ------------------------- page3 -------------------------

	let page3=document.getElementById("page3");
	let project=page3.getElementsByClassName("project");
	let title=[];
	let page3_n;
	for(let i=0; i<project.length; i++){
		if(project[i].firstElementChild.children[0].className == "title"){
			title[i]=project[i].firstElementChild.children[0];
		}
	}	

	project[0].classList.add("active");

	for(let i=0; i<project.length; i++){
		title[i].index=i;

		title[i].addEventListener("click", (e) => {
			e.preventDefault();
			
			let portY;
			page3_n=e.currentTarget.index;
			
			for(let j=0; j<project.length; j++){
				if(j == page3_n){
					project[j].classList.toggle("active")
					portY=project[j].offsetTop;
					gsap.to(document.documentElement, {scrollTop : portY, duration: 0.8})	
					// $("html").animate({scrollTop : portY}, 800);
				}
				else{
					project[j].classList.remove("active");
				}
			}
		});
	}
});