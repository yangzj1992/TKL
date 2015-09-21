$(document).ready(function($) {
    "use strict";
    var scrollstatus = $(document).scrollTop();
    if(scrollstatus >10){
    	 $(".lightnav .navbar-inner").addClass("lightnav-alt");
       $(".darknav .navbar-inner").addClass("darknav-alt");
    }else{
    	 $(".lightnav .navbar-inner").removeClass("lightnav-alt");
       $(".darknav .navbar-inner").removeClass("darknav-alt");
    }


    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $(".lightnav .navbar-inner").addClass("lightnav-alt");
            $(".darknav .navbar-inner").addClass("darknav-alt");
        } else {
            $(".lightnav .navbar-inner").removeClass("lightnav-alt");
            $(".darknav .navbar-inner").removeClass("darknav-alt");
        }
    });

	$(document).ready(function($) {
		var wall_number = "url(http://7bv937.com1.z0.glb.clouddn.com/qcyoung/TKL/wall-"+Math.ceil(Math.random()*12)+".jpg)";
		// var wall_number = "url(http://img1.imgtn.bdimg.com/it/u=479037135,1190319691&fm=21&gp=0.jpg)";
    $(".element-img").css('background-image',wall_number);

    // 定位二维码
    var footerheight = $("footer").outerHeight();
    $(".popPanel").css('bottom',footerheight);
    var objPopPanel = $(".popPanel");	
    var h = objPopPanel.outerHeight();
    $(".social .weixin").hover(function() {
        objPopPanel.show();
    }, function() {
        objPopPanel.hide();
    });
    
    $("#navigation .weixin").bind('click',function(event) {
      layer.open({
        type: 1,
        title: false,
        skin: 'layui-layer-demo', //样式类名
        closeBtn: false, //不显示关闭按钮
        shift: 2,
        shadeClose: true, //开启遮罩关闭
        content: '<img src="http://7bv937.com1.z0.glb.clouddn.com/qcyoung/yangzj1992QRcode.jpg" width="200px"/>'
      });
    });

    //返回顶部
    $(window).bind("scroll",function() {
      //获取当前垂直位移值
      var scrollTopNum=$(document).scrollTop(),
      //获取浏览器当前高度
      winHeight=$(window).height(),
      returnTop=$("div.return-top");
      //滚动条垂直距离大于0时显示，反之隐藏
      (scrollTopNum>200)?returnTop.fadeIn("fast"):returnTop.fadeOut('fast');
    });

    // 点击按钮后，滚动条的垂直方向的值逐渐变为0，也就是滑动向上的效果
    $("div.return-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 800);return false;
    });

		// Slidebars off-canvas menu
		$.slidebars();

		// Popovers [Hover]
		$("[data-toggle=popover]")
			.popover({
				html:true
			}
		);

		$("html").niceScroll({
			smoothscroll: true, // scroll with ease movement
			autohidemode: false,
			zindex: "100", // change z-index for scrollbar div
        	scrollspeed: 60, // scrolling speed
        	mousescrollstep: 40,// mouse scrolling speed
        	gesturezoom: false,//上缩放框激活时，间距输出/输入
        	horizrailenabled: false,//管理水平滚动
        	cursorcolor: "#151515",
	        boxzoom: false,
	        cursorborder: "0 solid #202020",
	        cursorborderradius: "5px",
	        cursorwidth: 9,
	        enablemousewheel: true,
	        background: "rgba(255,255,255,0.7)",
		});

		// Page transitions
		$(".animsition").animsition({

			inClass               :   'fade-in',
			outClass              :   'fade-out-down-sm',
			inDuration            :    500,
			outDuration           :    500,
			linkElement           :   '.animsition-link', 
			//e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
			                          '-webkit-animation-duration',
			                          '-o-animation-duration'
			                        ],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			overlay               :   false,

			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		});

		// WOW plugin settings
        var wow = new WOW(
          { animateClass: 'animated', // set our global css classT (default is animated)
            offset: 250, // set distance to content until it triggers (default is 0)
            mobile: false, // remove animations for mobiles/tablets (default is true)
            live: true }); // act on asynchronously loaded content (default is true)
        new WOW().init();

		// Functionailty constraints for mobile
		if (!Modernizr.touch) {
		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.herofade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.7 - st / 1600
		            });
		        });
		    });

		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.videofade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.7 - st / 1600
		            });
		        });
		    });

		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.headerfade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.7 - st / 300
		            });
		        });
		    });
		}

		// autohide navbar on scroll
		$("div.navbar-fixed-top").autoHidingNavbar({
			animationDuration: 400,
			hideOffset: 0,
		});

		// faq's floating sidebar (left)
	    $('#sidebar').affix({
	    	offset: {
	    		top: 500
	    	}
		});
		
	    // Scrollspy for scrollto links in floating faq sidebar
		var $body   = $(document.body);
		var navHeight = $('.navbar').outerHeight(true) + 80;

		$body.scrollspy({
			target: '#leftcol',
			offset: navHeight
		});

		// fade out map cover (contact.html)
	    $(".map-cover").click(function () {
	        $(".map-cover").fadeOut("slow");
	    });

		// Collapsible panels for faq's and careers
	    $('.collapse').on('show.bs.collapse', function() {
	        var id = $(this).attr('id');
	        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-panel');
	        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-up"></i>');
	    });
	    $('.collapse').on('hide.bs.collapse', function() {
	        var id = $(this).attr('id');
	        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-panel');
	        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-down"></i>');
	    });

	    /*!
	     * IE10 viewport hack for Surface/desktop Windows 8 bug
	     * Copyright 2014 Twitter, Inc.
	     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
	     * details, see http://creativecommons.org/licenses/by/3.0/.
	     */
	    // See the Getting Started docs for more information:
	    // http://getbootstrap.com/getting-started/#support-ie10-width
	    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	        var msViewportStyle = document.createElement('style');
	        msViewportStyle.appendChild(
	            document.createTextNode(
	                '@-ms-viewport{width:auto!important}'
	            )
	        );
	        document.querySelector('head').appendChild(msViewportStyle);
	    }

	    $(".logo").hover(function() {
	    	$(this).find("#white-logo").css('display','none');
	    	$(this).find("#brown-logo").css('display','block');
	    }, function() {
	    	$(this).find("#brown-logo").css('display','none');
	    	$(this).find("#white-logo").css('display','block');
	    });

	}); // Document Ready

}(jQuery)); // End "use strict"

// Enable dropdown sub-menus in off-canvas navigation
$(document).ready(function($) {
	$('.sb-toggle-submenu').off('click') // Stop submenu toggle from closing Slidebars.
		.on('click', function() {
			$submenu = $(this).parent().children('.sb-submenu');
			$(this).add($submenu).toggleClass('sb-submenu-active'); // Toggle active class.

			if ($submenu.hasClass('sb-submenu-active')) {
			$submenu.slideDown(200);
			} else {
			$submenu.slideUp(200);
		}
	});
});
