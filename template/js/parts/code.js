(function($, undefined) {
	$(function() {
		//открытие меню
		var header = $('#header');
		var navigation = header.find('.main-navigation');
		var menuWrap = header.find('.main-menu-wrap');
		var panelMenu = header.find('.panel-menu');
		var panelMenuItem = header.find('.panel-menu-item');
		var menu  = header.find('.main-menu');
		var clickPanelMenu = panelMenu.find('.link').click(function(event) {
			/* Act on the event */
			navigation.toggleClass('main-navigation__open-js');
			menuWrap.toggleClass('main-menu-wrap__open-js');
			panelMenu.toggleClass('panel-menu__open-js');
			panelMenuItem.toggleClass('panel-menu-item__open-js');
			menu.toggleClass('main-menu__open-js');
			return false;
		});

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

		var sliderVideo = $('#slideshow'),
				// sliderReviews = $('.reviews-slider'),
				sliderReviews = $('#reviews'),
				sliderReviewsClone = sliderReviews.find('.reviews-item');
				sliderNews = $('.news-article-slider');
				sliderNewsClone = sliderNews.find('.news-article');
		var sticky = $('#sticky');
				sticky.fixTo('.main-menu-wrap', {
					useNativeSticky : false
					});

		function widthSreen(widthWindow) {
			if (widthWindow >= desktop) {
				// console.log(widthWindow);
				// console.log('больше' + desktop);
					itemLinkContact.on('click', function(event) {
						// event.preventDefault();
						panelContact.css('display', 'block');
						$(window).scrollTop(0);
						return false;
						/* Act on the event */
					});
					//инит стики меню
					sticky.fixTo('start');

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
				// стики меню стоп
				sticky.fixTo('stop');
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
