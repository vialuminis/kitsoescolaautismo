(function ($) {
	'use strict';

	$(document).ready(function () {
		const button = $('#mwb');
		const button_container = $('#mwb .b-container');
		const close = $('#mwb .close');

		button_container.on('click', function () {
			const redirectWindow = window.open(mwb.url, '_blank');
			redirectWindow.location;
		});

		close.on('click', function () {
			button.removeClass().addClass(`${mwb.location} animated fadeOut`);
		});

		setTimeout(() => {
			button.addClass(`${mwb.location} animated ${mwb.animation}`);
		}, mwb.time);
	});

})(jQuery);
