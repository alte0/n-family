(function($, undefined) {
	$(function() {

		// maps
		var $closeStaticMap = $('.discuss__map');
		var $openJsMap = $('.discuss__map_js');

		$closeStaticMap.addClass('discuss__map_jsInvisibleMap');
		$openJsMap.addClass('discuss__map_jsShowMap');


		//message error form
		var modalWindow = $('<div>', {
			class: 'modalWindow'
		});
		modalWindow.appendTo($('body'));

		var messageBadForm = $('<div>', {
			class: 'message',
			text: 'Вы не заполнили поля формы, пожалуйста заполните все!'
		});
		messageBadForm.appendTo(modalWindow);

		//кнопка закрытия формы
		var buttonClose = $('<button>', {
			class: 'buttonClose',
			type: 'button',
			text: 'Ok'
		});
		buttonClose.appendTo(messageBadForm);

		// проверка формы
		$('form.discuss__message').submit(function() {
			if (
				$(this).find('input[name=name]').val() === '' ||
				$(this).find('input[name=email]').val() === '' ||
				$(this).find('textarea[name=message]').val() === '' ) {
					modalWindow.fadeIn(300);
					return false;
				}
			});

			// button close error form
			buttonClose.on('click', function() {
				modalWindow.fadeOut(500);
			});

			//button up
			var buttonUp = $('<button>', {
				type: 'button',
				class: 'buttonUp',
				text: 'UP'
			});
			buttonUp.appendTo($('body'));
			var buttonUpBreakpont = 300;
			var activateButtonUp = 'buttonUp_active';
			$(window).on('scroll load', function(event) {
				event.preventDefault();
				if ( $(this).scrollTop()>buttonUpBreakpont ) {
					// buttonUp.addClass(activateButtonUp);
					buttonUp.fadeIn(300);
				} else {
					// buttonUp.removeClass(activateButtonUp);
					buttonUp.fadeOut(300);
				}
			});
			buttonUp.on('click', function(event) {
				$('html, body').animate({
					scrollTop: 0
				}, 500);
			});

			//animate menu to id
			$('.main-menu__item').on('click', 'a', function(event) {
				event.preventDefault();
				var elementId = $(this).attr('href');
				var elementPositionTop = $(elementId).offset().top;
				$('html, body').animate({
					scrollTop: elementPositionTop
				}, 1000);
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
			$('.feature-slider').slick({
				dots: true,
			  infinite: true,
			  speed: 1000,
			  slidesToShow: 1,
			  adaptiveHeight: true,
				slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 3000,
				arrows: false
			});
			$('.team-slider').slick({
				dots: true,
			  infinite: true,
			  speed: 1000,
			  slidesToShow: 1,
			  adaptiveHeight: true,
				slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 3500,
				arrows: false
			});
			// viewportChecker and animate
			var arrClass = [];
			// arrClass.push($('.header__top'));
			arrClass.push($('.header-slider'));
			arrClass.push($('.feature__header'));
			arrClass.push($('.feature-slider'));
			arrClass.push($('.works__header'));
			arrClass.push($('.text__semibold'));
			arrClass.push($('.works__filter'));
			arrClass.push($('.works__sorted'));
			arrClass.push($('.team__header'));
			arrClass.push($('.team-slider'));
			arrClass.push($('.some-fun-fact__header'));
			arrClass.push($('.some-fun-fact__column-wraper'));
			arrClass.push($('.discuss__header'));
			arrClass.push($('.text__discuss_parag'));
			arrClass.push($('.discuss__column-wraper'));
			arrClass.push($('.discuss__maps'));
			arrClass.push($('.footer__column'));

			$.each(arrClass, function(index, element) {
				element.addClass('hidden').viewportChecker({
					classToAdd: 'visible animated fadeIn',
					// classToAddForFullView: 'visible',
					classToRemove: 'hidden visible animated fadeIn'
					// offset: 100
				});
			});

	});
})(jQuery);
