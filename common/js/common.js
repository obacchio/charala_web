$(function(){
    $("body").delay(500).animate({opacity:1}, 500);
    var ua = navigator.userAgent;
	if((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('iPad') > 0 || ua.indexOf('Kindle') > 0 || ua.indexOf('Silk') > 0){
			 $('head').prepend('<meta name="viewport" content="width=1100">');
	} else if ((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ua.indexOf('iPhone') > 0 || ua.indexOf('Blackberry') > 0 || ua.indexOf('iPhone') > 0){
			$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
	}else {
	}
});

$(window).on('load', function() {

});	

$(window).on('load resize',function(){
    var w = $(window).width();
    var x = 851;
    if (w < x) {
	$("a[href^=#]").click(function(){	
		$('nav').removeClass('open');
		$("body").css({position:"relative"});
		$('.navBtn').removeClass('is-open');
		var headerHeight = 65;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHeight;
		$('body,html').animate({scrollTop:position}, 0);
		return false;
	});	
	var url = $(location).attr('href');
	if(url.indexOf("#") != -1){
	var anchor = url.split("#");
	var target = $('#' + anchor[anchor.length - 1]);
	if(target.length){
	var pos = Math.floor(target.offset().top) - 65;
	$("html, body").animate({scrollTop:pos}, 500);
	}
	}
		var timer = false;
		var prewidth = $(window).width()
		$(window).resize(function() {
			if (timer !== false) {
				clearTimeout(timer);
			};
			timer = setTimeout(function() {
				var nowWidth = $(window).width()
				if(prewidth !== nowWidth){
					location.reload();
				};
				prewidth = nowWidth;
			}, 50);
		});
	}else{

		$("a[href^=#]").click(function(){	
				var headerHeight = 70;
				var speed = 1000;
				var href= $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top - headerHeight;
				$('body,html').animate({scrollTop:position}, speed, 'easeInOutBack');
				return false;
		});
		
		var url = $(location).attr('href');
		if(url.indexOf("#") != -1){
		var anchor = url.split("#");
		var target = $('#' + anchor[anchor.length - 1]);
		if(target.length){
		var pos = Math.floor(target.offset().top) - 70;
		$("html, body").animate({scrollTop:pos}, 500, 'easeInOutBack');
		}
		}

	}
});

//$(window).load(function(){
$(function(){

/* ------------------------------------------
   *
   *  header
   *
------------------------------------------ */
    var headnav = $('header .inner');    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            headnav.addClass('small');
        } else {
            headnav.removeClass('small');
        }
    });

/* ------------------------------------------
   *
   *  fadein
   *
------------------------------------------ */
	$('.fadein').on('inview', function(event, isInView) {
		 if (isInView) {
			 $(this).animate({opacity:1,top:0},800, 'easeInOutBack');
			//$(this).addClass('is_in');
		}
	});
	$('.top .sec01').on('inview', function(event, isInView) {
		 if (isInView) {
		$('.top .sec01 ul li').each(function(i) {
   		  $(this).delay(100 * i).animate({opacity:1,top:0},800, 'easeInOutBack');
	    });
		}
	});
	$('.sec02').on('inview', function(event, isInView) {
		$('.sec02 ul li').each(function(i) {
   		  $(this).delay(100 * i).animate({opacity:1,top:0},800, 'easeInOutBack');
	    });
	});
	$('.sec04').on('inview', function(event, isInView) {
		$('.sec04 ul li').each(function(i) {
   		  $(this).delay(100 * i).animate({opacity:1,top:0},800, 'easeInOutBack');
	    });
	});
	$('.sec01 .extra li').on('inview', function(event, isInView) {
		$('.sec01 .extra li').each(function(i) {
   		  $(this).delay(100 * i).animate({opacity:1,top:0},800, 'easeInOutBack');
	    });
	});
	$('.scene .extra li').on('inview', function(event, isInView) {
		$('.scene .extra li').each(function(i) {
   		  $(this).delay(100 * i).animate({opacity:1,top:0},800, 'easeInOutBack');
	    });
	});
	$('.spec li').on('inview', function(event, isInView) {
		$('.spec li').each(function(i) {
   		  $(this).delay(100 * i).animate({opacity:1,top:0},800, 'easeInOutBack');
	    });
	});

/* ------------------------------------------
   *
   *  accordion
   *
------------------------------------------ */	
    $('#faq dt').click(function(){
		$(this).next('dd').slideToggle();
 		$(this).children('h3').toggleClass('open');
	});
/* ------------------------------------------
   *
   * 　アンカー
   *
------------------------------------------ */
   var navLink = $('nav li a');
   var contentsArr = new Array();
  for (var i = 0; i < navLink.length; i++) {
      var targetContents = navLink.eq(i).attr('href');
      if(targetContents.charAt(0) == '#') {
            var targetContentsTop = $(targetContents).offset().top;
            var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
            contentsArr[i] = [targetContentsTop, targetContentsBottom]
      }
   };
    function currentCheck() {
         var windowScrolltop = $(window).scrollTop()+150;
		//var windowScrolltop = $(window).scrollTop()+400;
        for (var i = 0; i < contentsArr.length; i++) {
          if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
               navLink.removeClass('current');
               navLink.eq(i).addClass('current');
                i == contentsArr.length;
            }else{
               navLink.eq(i).removeClass('current');
                i == contentsArr.length;
				
			}
       };
  }
  $(window).on('load scroll', function() {
      currentCheck();
 });
/* ------------------------------------------
   *
   * 　アンカーaction
   *
------------------------------------------ */	
	  $('nav a, .bound').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$&</span>'));
	  });

/* ------------------------------------------
   *
   *  click action
   *
------------------------------------------ */
	$('.navBtn').click(function(){
		if ($('nav').hasClass('open')) {
			$('nav').removeClass('open');
			//$("body").css({position:"relative"});
			$('.navBtn').removeClass('is-open');
		} else {
			$('nav').addClass('open');
			$('.navBtn').addClass('is-open');
			//$('body').css({position:'fixed'});
		}
	});

});

