(function($, undefined) {
	$(function() {
		// var sticky = $(document).find('#sticky');
		//открытие меню
		var header = $('#header');
		// var navigation = $(document).find('.main-navigation');
		// var menuWrap = $(document).find('.main-menu-wrap');
		// var panelMenu = $(document).find('.panel-menu');
		// var panelMenuItem = $(document).find('.panel-menu-item');
		// var menu = $(document).find('.main-menu');
		$(document).find('.main-navigation').find('.panel-menu').find('.link').on('click', function(event) {
			menuToggle(event);
		});

		function menuToggle(event) {
			$(document).find('.main-navigation').toggleClass('main-navigation__open-js');
			$(document).find('.main-menu-wrap').toggleClass('main-menu-wrap__open-js');
			$(document).find('.panel-menu').toggleClass('panel-menu__open-js');
			$(document).find('.panel-menu-item').toggleClass('panel-menu-item__open-js');
			$(document).find('.main-menu').toggleClass('main-menu__open-js');
			event.preventDefault();
			event.stopPropagation();
			return false;
		}
		//clone nav
		var cloneNavigation = $(document).find('.main-navigation').clone(true);

		// проверка на класс 
		function checkClass(checkClass) {
			var hasClass = 'slick-initialized';
			if ( checkClass.hasClass(hasClass) ) {
				return true;
			}
			return false;
		}

		//перехватываем нажатие на контакты на десктопе, что бы открыть выпадающие инфо контактов и инициальзация сладеров
		var desktop = '1001',
				itemLinkContact = $('#contact'),
				panelContact = $('#contacts');

		// sliders
		var sliderVideo = $('#slideshow'),
				// sliderReviews = $('.reviews-slider'),
				sliderReviews = $('#reviews'),
				sliderReviewsClone = sliderReviews.find('.reviews-item');
				sliderNews = $('.news-article-slider');
				sliderNewsClone = sliderNews.find('.news-article');

		function widthSreen(widthWindow) {

			if (widthWindow >= desktop) {
					itemLinkContact.on('click', function(event) {
						panelContact.css('display', 'block');
						$(window).scrollTop(0);
						return false;
					});
					//инит стики меню
						$(document).find('.panel-menu').find('.link').on('click', function(event) {

								var sticky = $(document).find('.sticky');
								var link = $(document).find('.panel-menu').find('.link');
								if(link.length > 0) {
									alert('найден')
								}

								if ( $(document).find('.panel-menu').hasClass('panel-menu__open-js') ) {
									var widthStrut = sticky.outerWidth();
									$(document).find('.main-navigation').prepend("<div class='strut'></div>");
									$('.strut').css({
										width: widthStrut,
										visibility: 'hidden'
									});
									sticky.css({
										position: 'fixed',
										right: '0'
									});

									$(window).on('scroll', function(event) {

										var windowScrollTopPosition = $(window).scrollTop();

										var heightNavigation = $(document).find('.main-navigation').outerHeight();
										var heightOfTopNavigation = $(document).find('.main-navigation').offset().top;
										var heightSticky = sticky.outerHeight();
										var heightOfTopSticky = sticky.offset().top;
										var totalHeightNavigation = heightNavigation+heightOfTopNavigation;
										var totalHeightSticky = heightSticky+heightOfTopSticky;

										if ( (windowScrollTopPosition<50 && heightOfTopSticky<50) && $(document).find('.panel-menu').hasClass('panel-menu__open-js') ){
											sticky.css({
												position: 'fixed',
												right: '0'
											});
										};
										if ( totalHeightNavigation<=totalHeightSticky) {
											sticky
											.css({
												position: 'absolute',
												bottom: '0',
												right: '0'
											})
											.stop()
											.animate({
												top: '0'
											}, 1000, function(){
												$(this).attr('style','');
											});
										}; 

										//закрытие меню
									  if ( ((windowScrollTopPosition-totalHeightNavigation) > -200) && $(document).find('.panel-menu').hasClass('panel-menu__open-js') ) {
									  	menuToggle(event);
									  }

										
									});
								} else {
									$('.strut').remove();
									sticky.removeAttr('style');
								}
						});
					  //появление меню в сладере видео
					  $(window).on('scroll', function(event) {
							var windowScrollTopPosition = $(window).scrollTop();
							var sliderVideoScrollTopPosition = sliderVideo.offset().top;
						  if ( (windowScrollTopPosition+200) >= sliderVideoScrollTopPosition ) {
						  	if ( sliderVideo.children('.main-navigation').length == 0) {
						  		sliderVideo.append(cloneNavigation);
						  		header.find('.main-navigation').detach();
						  	}
						  }
						  if ( (windowScrollTopPosition+200) <= sliderVideoScrollTopPosition ) {
						  	if ( header.find('.main-navigation').length == 0) {
							  	sliderVideo.find('.main-navigation').detach();
							  	header.find('.header-header').after(cloneNavigation);
						  	}
						  }

						 });


					if ( !checkClass(sliderVideo) ) {
							sliderVideo.slick({
							dots: true,
						  infinite: true,
						  speed: 1000,
						  slidesToShow: 1,
						  // adaptiveHeight: true,
							slidesToScroll: 1,
						  autoplay: true,
						  autoplaySpeed: 5000,
							arrows: false
			      });
					}
					if ( !checkClass(sliderReviews) ) {
						sliderReviewsClone.clone().appendTo(sliderReviews);
						sliderReviews.slick({
							dots: true,
						  infinite: true,
						  speed: 1000,
						  slidesToShow: 1,
						  // adaptiveHeight: true,
							slidesToScroll: 1,
						  autoplay: true,
						  autoplaySpeed: 3000,
							arrows: false
			      });
					}
					if ( !checkClass(sliderNews) )  {
						sliderNewsClone.clone().appendTo(sliderNews);
						sliderNews.slick({
							dots: true,
						  infinite: true,
						  speed: 1000,
						  slidesToShow: 1,
						  // adaptiveHeight: true,
							slidesToScroll: 1,
						  autoplay: true,
						  autoplaySpeed: 2500,
							arrows: false
			      });
					}
					//перемещение блока заказа видео
					var portfolio = $("#portfolio");
					var portfolioBox = portfolio.find('.order-video');
					var moveOrder = portfolio.find('.portfolio-video');
							moveOrder.mouseenter(function(event) {
								/* Act on the event */
								var targetId = event.target.id;
								// console.log( targetId );
								switch( targetId ) {
									case 'portfolio1':
										percent = "20%";
										break;
									case 'portfolio2':
										percent = "35%";
										break;
									case 'portfolio3':
										percent = "50%";
										break;
									case 'portfolio4':
										percent = "65%";
										break;
									case 'portfolio5':
										percent = "80%";
										break;
									default:
										percent = "50%";
										break;
								};
								portfolioBox.stop().animate({
									'left': percent
								}, 700);
							});
							portfolio.mouseleave(function(event) {
									portfolioBox.stop().animate({'left': '50%'}, 300);
							});

							
			} else {
				// console.log('меньше ' + desktop);
				if ( checkClass(sliderVideo) ) {
					sliderVideo.slick('unslick');
				}
				if ( checkClass(sliderReviews) ) {
					sliderReviews.slick('unslick');
					sliderReviews.find('.reviews-item:nth-child(2)').remove();
				}
				if ( checkClass(sliderNews))  {
					sliderNews.slick('unslick');
					sliderNews.find('.news-article:nth-child(2)').remove();
				}
			}
		};
		// узнаем ширину window
		var widthWindow = $(window).width();
		$(window).ready(widthSreen(widthWindow)).resize(function() {
	    var widthWindow = $(this).width();
	    widthSreen(widthWindow);
		});

		//закрываем выпадаюшие инфо
		closeButtonPanelContact = $('#contacts-close');
		closeButtonPanelContact.click(function(event) {
			/* Act on the event */
			panelContact.css('display', 'none');
			return false;
		});

		// анимация текста
		// var $reviews = $('#reviews');
		// var $animateText = $reviews.find('.animate-text').textillate({
		//   // the default selector to use when detecting multiple texts to animate
		//   selector: '.texts',
		//   // enable looping
		//   loop: true,
		//   // sets the minimum display time for each text before it is replaced
		//   minDisplayTime: 500,
		//   // sets the initial delay before starting the animation
		//   // (note that depending on the in effect you may need to manually apply
		//   // visibility: hidden to the element before running this plugin)
		//   initialDelay: 2000,
		//   // set whether or not to automatically start animating
		//   autoStart: false,
		//   // in animation settings
		//   in: {
		//     // set the effect name
		//     effect: 'fadeIn',
		//     // set the delay factor applied to each consecutive character
		//     // delayScale: 1.5,
		//     // set the delay between each character
		//     delay: 1000,
		//     // set to true to animate all the characters at the same time
		//     sync: false,
		//     // randomize the character sequence
		//     // (note that shuffle doesn't make sense with sync = true)
		//     shuffle: false,
		//     // reverse the character sequence
		//     // (note that reverse doesn't make sense with sync = true)
		//     reverse: false
		//   },
		//   // out animation settings.
		//   out: {
		//     effect: 'fadeOut',
		//     delay: 0,
		//     sync: false,
		//     shuffle: false,
		//     reverse: true,
		//     callback: function () {}
		//   },
		//   // callback that executes once textillate has finished
		//   callback: function () {},
		//   // set the type of token to animate (available types: 'char' and 'word')
  // 		// type:'char'
		// });

		//   $animateText.textillate('start');
		// $reviews.find('.reviews-family, .reviews-all').hover(function() {
		// 	/* Stuff to do when the mouse enters the element */
		//   $animateText.textillate('start');
		// }, function() {
		// 	/* Stuff to do when the mouse leaves the element */
		// 	$animateText.textillate('out');
		// });

		//натройка модалки
		 // $("#order-form").modal({
			// 	showClose: false
			// });

		//
    $('#datepicker').datepicker({
    language: "ru",
    todayHighlight: true,
    beforeShowDay: function (date){
          if (date.getMonth() == (new Date()).getMonth())
            switch (date.getDate()){
              case 4:
                return {
                  tooltip: 'Свободное время 9:00-12:00 12:00-15:00',
                  classes: 'free-time'
                };
              case 8:
                return false;
              case 12:
                return "free-day";
          }
        }
    });

      // 
      var btnPlay = $('.video-control-group-item__pause-play');
      btnPlay.click(function(event) {
      	/* Act on the event */
      	btnPlay.find('.link').toggleClass('on-play-js');
      	return false;
      });
      var btnSound = $('.video-control-group-item__sound');
      btnSound.click(function(event) {
      	/* Act on the event */
      	btnSound.find('.link').toggleClass('on-sound-js');
      	return false;
      });
			

	});
})(jQuery);
