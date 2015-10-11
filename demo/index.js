(function () {

	// the App

	$(document).ready(function() {

		var $navbar, $content;
		var myDemo;

/*		function initNavigationSuspends() {
			$(document).on('game.started', function() {
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.play', suspend: true });
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.pause', suspend: false });
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.stop', suspend: false });
				});
			$(document).on('game.paused', function() {
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.play', suspend: false });
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.pause', suspend: true });
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.stop', suspend: false });
				});
			$(document).on('game.stopped', function() {
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.play', suspend: false });
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.pause', suspend: true });
				$('.navbar').jqbsNavbar('menuSuspend', { event: 'math.stop', suspend: true });
				});
			}*/

		function init() {
			$('body').append('<div id="desktop" class="app-desktop"></div>');
			$('#desktop').append('<div id="header" class="app-header"><nav id="navbar"></nav></div>');
			$('#desktop').append('<div id="content" class="app-content"></div>');
			$('#desktop').append('<div id="footer" class="app-footer"></div>');
			// ----
			$content=$('#content');
			$navbar=$('#navbar').jqbsNavbar({
				$eventTarget: $content,
				brand: {
					label: 'jqBS demo'
					},
				right: [
					{ label: 'Indít', event: 'math.play', icon: 'play', disabled: true },
					{ label: 'Szünet', event: 'math.pause', icon: 'pause', disabled: true },
					{ label: 'Leállít', event: 'math.stop', icon: 'stop', disabled: true }
					],
				left: [
					{ label: 'Válassz egy típust', dropdown: [
						{ label: 'Panel', event: 'demo.panel' },
						{ label: 'Tab', event: 'demo.tab' },
						{ label: 'Buttons & button group', event: 'demo.button' }
						] }
					],
				});
			$content.css('margin-top', $navbar.outerHeight(true));
			myDemo=new demo({ $wr: $content });
			// ----
			$content.on('demo.panel', myDemo.examplePanel);
			$content.on('demo.tab', myDemo.exampleTab);
			$content.on('demo.button', myDemo.exampleButton);


//			$content.on('math.message', message);
			// ----
			$content.trigger('demo.panel');
			}

		function message(event, p) {
			if (p.hide===true) $contentMessage.hide(); else $contentMessage.show();
			if (p.header || p.body) $contentMessage.jqbsPanel('setHeader', p.header).jqbsPanel('setBody', p.body); else $.fn.jqBS.misc.debug('warn', '@math_application_message_missing_parameter', p); 
			}

		init();

		});

})();
 