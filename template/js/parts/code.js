(function($, undefined) {
	$(function() {

		//открытие меню
		var header = $('#header');
		var navigation = header.find('.main-navigation');
		var panelMenu = header.find('.panel-menu');
		var panelMenuItem = header.find('.panel-menu-item');
		var menu  = header.find('.main-menu');
		var clickPanelMenu = panelMenu.find('.link').click(function(event) {
			/* Act on the event */
			navigation.toggleClass('main-navigation__open-js');
			panelMenu.toggleClass('panel-menu__open-js');
			panelMenuItem.toggleClass('panel-menu-item__open-js');
			menu.toggleClass('main-menu__open-js');
			return false;
		});

		//перехватываем нажатие на контакты на десктопе, что бы открыть выпадающие инфо контактов
		var desktop = '1915', itemLinkContact = $('#contact'), panelContact = $('#contacts');
		function widthSreen(widthWindow) {
			if (widthWindow >= desktop) {
				console.log(widthWindow);
				console.log(desktop);
				itemLinkContact.on('click', function(event) {
					// event.preventDefault();
					panelContact.css('display', 'block');
					$(window).scrollTop(0);
					return false;
					/* Act on the event */
				});
			}
		}
		// узнаем ширину для перехвата
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
		var $reviews = $('#reviews');
		var $animateText = $reviews.find('.animate-text').textillate({
		  // the default selector to use when detecting multiple texts to animate
		  selector: '.texts',
		  // enable looping
		  loop: true,
		  // sets the minimum display time for each text before it is replaced
		  minDisplayTime: 500,
		  // sets the initial delay before starting the animation
		  // (note that depending on the in effect you may need to manually apply
		  // visibility: hidden to the element before running this plugin)
		  initialDelay: 1000,
		  // set whether or not to automatically start animating
		  autoStart: false,
		  // in animation settings
		  in: {
		    // set the effect name
		    effect: 'fadeIn',
		    // set the delay factor applied to each consecutive character
		    // delayScale: 1.5,
		    // set the delay between each character
		    delay: 100,
		    // set to true to animate all the characters at the same time
		    sync: false,
		    // randomize the character sequence
		    // (note that shuffle doesn't make sense with sync = true)
		    shuffle: false,
		    // reverse the character sequence
		    // (note that reverse doesn't make sense with sync = true)
		    reverse: false
		  },
		  // out animation settings.
		  out: {
		    effect: 'fadeOut',
		    delay: 0,
		    sync: false,
		    shuffle: false,
		    reverse: true,
		    callback: function () {}
		  },

		  // callback that executes once textillate has finished
		  callback: function () {},

		});;

		  $animateText.textillate('start');
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
                  tooltip: 'Example tooltip',
                  classes: 'active'
                };
              case 8:
                return false;
              case 12:
                return "green";
          }
        }
    });
			//slick
			$('.header-slider').slick({
				dots: true,
			  infinite: true,
			  speed: 1000,
			  slidesToShow: 1,
			  adaptiveHeight: true,
				slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 2500,
				arrows: false
      });

			

	});
})(jQuery);
