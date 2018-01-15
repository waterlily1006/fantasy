$(window).load(function(){
	function Page() {
		this_ = this;
		this.langList = $(".lang_list");
		this.lang = $(".lang_list li");
		this.langTxt = $(".lang_txt");
		this.selectLang = $(".select_lang");
		this.smallRole = $('.small_role');
        this.bigRole = $(".big_role_pic");
        this.bigRoleVoice = $(".big_role_voice");
        this.roleBottom = $(".role_bottom");
        this.smallIntro = $(".small_intro");
        this.bigIntro = $(".big_intro");
        this.close = $(".close");
        this.iscrollImg = $(".iscroll li");
        this.scrollBtn = $(".scroll_btn");
        this.alertBox = $(".alert_box");
        this.pageMask =$(".page_mask");
        this.alertImgs = $(".content li");
        this.contentBtnR =$(".content_btn_r");
        this.contentBtnL =$(".content_btn_l");
        this.code = $(".code");
        this.bigCode = $(".erweima");
        this.video = $(".video");
        this.scrollLeftBtn = $(".scroll_btn_l");
        this.scrollRightBtn = $(".scroll_btn_r");
        this.smallRoleNum = 0;
        this.contentIndex = 0;
        this.initialScrollIndex = 0;
        this.viewDetail = $(".view_detail");
        this.closeDetail = $(".close_detail_btn");
        this.closeVideo = $(".close_video");
        this.toTopBtn = $(".to_top");
        this.selectLang = $(".select_lang");
        this.lang = $(".lang");
	};
	$.extend(Page.prototype, {
		init: function() {
			//alert("haha,请指正我的bug")
			this.ajax();
			//this.handleClickTriangle();
			//this.handleChooseLang();
			// this.initIscroll();
			this.clickSmallRole(); 
			//this.hoverSmallRole();
			this.clickIntro();
			this.clickViewDetail();
			this.clickClose();
			this.clickDetailClose();
			//this.clickScrollBtn();
			this.clickIscrollImg();
			this.clickAudioBtn();
			this.clickContentBtnL();
			this.clickContentBtnR();
			this.clickDetailPreBtn();
			this.clickDetailNextBtn();
			//this.handleHoverCode();
			this.clickVideoBtn();
			this.toTop();
			this.clickSelectLang();
			this.clickLang();

		},
		ajax: function() {
			$.ajax({ 
			    type : "GET", //提交方式 
			    url : "/mock/index.json",//路径 
			    success : function(result) {//返回数据根据结果进行相应的处理 
			    	console.log(result)
				    if( result.status === "success" ) { 
				       console.log("成功");
				       this_.handleData(result.data);
				    } else { 
				       console.log("失败")
				    } 
			    } 
		    }); 
		},
		handleData:function(data) {
			this_.ios_url = data.ios_url;
			this_.android_url = data.android_url;
			this_.customer_url = data.customer_url;
			this_.facebook_url = data.facebook_url;
			this_.game_code = data.game_code;
			this_.pay_url = data.pay_url;
			this_.lang_code = data.lang_code;
			console.log(this_.facebook_url);

			$(".top_icon1").attr("href",this_.facebook_url);
			$(".top_icon2").attr("href",this_.ios_url);
		},	
		toTop: function(){
			this_.toTopBtn.click(function(){
				$('html , body').animate({scrollTop: 0},'slow');
			})
		},	
		clickSelectLang: function() {
			this_.selectLang.click(function(){
				$(".fix_box_clloapse").hide();
				$(".fix_box_expand").show();
			})
		},
		clickLang: function() {
			this_.lang.click(function() {
				var txt;
				if($(this).text() == "CHINESE"){
					txt = "CH"
				}
				if($(this).text() == "ENGLISH"){
					txt = "EN"
				}
				$(".ch_lang").text(txt)
				$(".fix_box_clloapse").show();
				$(".fix_box_expand").hide();
			})
		},
		handleClickTriangle: function() {
			this_.triangle.click(function(){
				console.log(this_.selectLang.attr("class"))
				if(this_.selectLang.attr("class")==="select_lang lang_zhankai"){
					setTimeout(function(){
					 	this_.selectLang.toggleClass('lang_zhankai');
					    this_.selectLang.toggleClass('lang_shou');
					},200)
				}else{
				 	this_.selectLang.toggleClass('lang_zhankai');
				    this_.selectLang.toggleClass('lang_shou');
				}
				this_.langList.slideToggle("fast");
			    $(this).toggleClass("triangle_up");

			})
		},

		handleChooseLang: function() {
			this_.lang.click(function() {
				this_.langTxt.text($(this).text())
				this_.triangle.trigger("click");
			})
		},
		iScrollClick: function() {
			if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
			if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
			if (/Silk/i.test(navigator.userAgent)) return false;
			if (/Android/i.test(navigator.userAgent)) {
			   var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
			   return parseFloat(s[0]+s[3]) < 44 ? false : true
		    }
		},
		initIscroll: function() {
			//alert(this_.iScrollClick())
			var ele = $(".iscroll");
		    ele.width((ele.find("li").length-1) * (ele.find("li").width()));
		    var myScroll = new IScroll('#wrapper', {
		    	scrollX: true, 
		    	scrollY: false, 
		    	click: this_.iScrollClick(),
		    	fadeScrollbars: true
		    });
		    myScroll.scrollToElement('.iscroll_active',true,true);

		},
		clickSmallRole: function() {
			this_.smallRole.click(function(){
				this_.smallRoleNum = $(this).index();
			    $(".role_title").removeClass("role_title_active").eq(this_.smallRoleNum).addClass("role_title_active");
				this_.smallRole.removeClass('cur').eq(this_.smallRoleNum).addClass('cur');

				this_.bigRole.removeClass('big_role_pic_active animated bounceInLeft').eq(this_.smallRoleNum).addClass('big_role_pic_active animated bounceInLeft');
				this_.bigRoleVoice.removeClass('big_role_voice_active animated bounceInRight');
			    
			    	this_.bigRoleVoice.eq(this_.smallRoleNum).addClass('big_role_voice_active animated bounceInRight');
			  
                // this_.smallRoleNum = $(this).index();
                // $(".role_title").removeClass("role_title_active").eq(this_.smallRoleNum).addClass("role_title_active");

                // this_.smallRole.removeClass('cur').eq(this_.smallRoleNum).addClass('cur');      
                
                // this_.bigRole.addClass('animated fadeOut').removeClass('big_role_pic_active animated bounceInLeft').eq(this_.smallRoleNum).removeClass('animated fadeOut').addClass('big_role_pic_active animated bounceInLeft');
    

           
                
                // //this_.bigRoleVoice.not(this_.bigRoleVoice.eq(this_.smallRoleNum)).removeClass("big_role_pic_active animated bounceInRight");
                // this_.bigRoleVoice.removeClass('big_role_voice_active animated bounceInRight');
                // this_.bigRoleVoice.eq(this_.smallRoleNum).addClass('big_role_pic_active animated bounceInRight');
			})
		},
		
		hoverSmallRole: function() {
			this_.smallRole.mouseenter(function() {
				$(this).addClass('on');
			})
			this_.smallRole.mouseleave(function() {
				$(this).removeClass('on');
			})
		},
		clickViewDetail: function() {
			this_.viewDetail.click(function(){
				console.log(this_.smallRoleNum)
				$(".detail").removeClass('detail_active').eq(this_.smallRoleNum).addClass('detail_active');
			    // $("html,body").css({'height':"100%","overflow":"hidden"});
				this_.pageMask.show();
				$(".detail_list").show();
				$(".content_box").hide();
				$(".fix_box").hide();
			})
		},
		clickDetailPreBtn: function() {
			$(".pre_btn").click(function() {
				if(this_.smallRoleNum > 0){
					this_.smallRoleNum --;
				}else{
					this_.smallRoleNum = $(".detail").size()-1;
				}
				
				$(".detail").removeClass('detail_active').eq(this_.smallRoleNum).addClass('detail_active');
				this_.pageMask.show();
			})
		},
		clickDetailNextBtn: function(){
			$(".next_btn").click(function() {
				if(this_.smallRoleNum < $(".detail").size()-1){
					this_.smallRoleNum ++;
				}else{
					this_.smallRoleNum = 0;
				}
				$(".detail").removeClass('detail_active').eq(this_.smallRoleNum).addClass('detail_active');
				this_.pageMask.show();
			})
		},
		clickDetailClose: function(){
			this.closeDetail.click(function(){
			    // $("html,body").css({'height':"16.64rem","overflow":"auto"});
				this_.pageMask.hide();
				$(".video_box").hide();
				$(".detail_list").hide();
				$(".content_box").hide();
				$(".fix_box").show();
			});

			this.closeDetail.on("touchstart",function(){
				$(this).addClass("close_detail_btn_hover");
			});
			this.closeDetail.on("touchend",function(){
				$(this).removeClass("close_detail_btn_hover");
			})
		},
		clickIntro:function() {
			this_.smallIntro.click(function() {
				var smallIntroNum = $(this).index();
			    this_.bigIntro.not(smallIntroNum).removeClass('intro_active animated fadeIn');
			    this_.bigIntro.eq(smallIntroNum).addClass('intro_active animated fadeIn');
				this_.smallIntro.removeClass("small_intro_hover").find(smallIntroNum).addClass('small_intro_hover');
				$(this).addClass('small_intro_hover');
			});
			
			// this_.smallIntro.on('touchstart',function(e) {
		 //       $(this).addClass('small_intro_hover');
			// });
			// this_.smallIntro.on('touchend',function(e) {
		 //       $(this).removeClass("small_intro_hover");
			// });
		},
		clickIscrollImg:function() {
			this.iscrollImg.click(function(){
				this_.contentIndex = $(this).attr("id")-1;
				this_.showBigScrollImg();
				//alert(this_.contentIndex)

			})
		},
		showBigScrollImg: function(){
			this_.pageMask.show();
			$(".video_box").hide();
			$(".detail_list").hide();
			$(".content_box").show();
			this_.alertImgs.removeClass('active_content').eq(this_.contentIndex).addClass('active_content');
			$(".fix_box").hide();
		},
		clickContentBtnL:function(){

			$(".content_btn_l").click(function(){
				this_.contImgLen = $(".content li").size()-1;
				if(this_.contentIndex < 0){
					this_.contentIndex = this_.contImgLen;
				}else{
					this_.contentIndex--;
				}
				this_.showBigScrollImg();
			})
		},
		clickContentBtnR:function(){
			this.contentBtnR.click(function(){
				this_.contImgLen = $(".content li").size();
				if(this_.contentIndex >= this_.contImgLen-1){
					this_.contentIndex = 0;
				}else{
					this_.contentIndex++;
				}
				this_.showBigScrollImg();	
			})
		},
		clickClose:function() {
			this.close.click(function(){
 				this_.pageMask.hide();
 				$(".fix_box").show();
				// this_.alertBox.hide();
				//this_.scrollBtn.show(); 
			});
			this.close.on("touchstart",function(){
				$(this).addClass("close_hover");
			});
			this.close.on("touchend",function(){
				$(this).removeClass("close_hover");
			})
			
		},

		clickAudioBtn:function(){
			$('.btn-audio').click(function(){
				var nowId = "mp3Btn" + (this_.smallRoleNum +1);
				var url = "../images/cv_0" + nowId + ".png";
			    console.log(nowId)
			    //播放完毕
	            $("#"+ nowId).on('ended', function() {
	                console.log("音频已播放完成");
	                $('.btn-audio').css({
	                	'background':url,
	                	'background-size':'contain'});
	            })
	            //播放器控制
	            var audio = document.getElementById(nowId);
	            audio.volume = .3;
	            event.stopPropagation();//防止冒泡
	                if(audio.paused){ //如果当前是暂停状态
	                    $('.btn-audio').css({
	                    	'background':url,
	                    	'background-size':'contain'
	                    });
	                    audio.play(); //播放
	                    return;
	                }else{//当前是播放状态
	                    $('.btn-audio').css({
	                    	'background':url,
	                    	'background-size':'contain'
	                    });
	                    audio.pause(); //暂停
	                }
			});
		},
		
		handleHoverCode:function(){
			this.code.mouseenter(function(){
				this_.bigCode.show();
			});
			this.code.mouseleave(function(){
				this_.bigCode.hide();
			});
		},
		clickVideoBtn:function(){
			this.video.click(function(){
				var width = $(".video_cont").width();
				var height = $(".video_cont").height();
				$("iframe").css({"width":width,"height":height});
				this_.pageMask.show();
				$(".detail_list").hide();
				$(".content_box").hide();
				$(".video_box").show();
				$(".fix_box").hide();
			})	
			this.closeVideo.click(function(){
				this_.pageMask.hide();
				// this_.alertBox.show();
				$(".video_box").hide();
				var newSrc = $(".video_cont iframe").attr("src");
				$(".video_cont iframe").attr("src",newSrc);
				$(".fix_box").show();
			});
			
		}
			
	});

	var page = new Page();
	page.init();
})