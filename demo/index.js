(function () {

	// the App

	$(document).ready(function() {

		var $navbar, $content;
		var myDemo;

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
					{ label: 'Start', event: 'math.play', icon: 'play', disabled: true },
					{ label: 'Pause', event: 'math.pause', icon: 'pause', disabled: true },
					{ label: 'Stop', event: 'math.stop', icon: 'stop', disabled: true }
					],
				left: [
					{ label: 'Select a component', dropdown: [
						{ label: 'Panel', event: 'demo.panel' },
						{ label: 'Tab', event: 'demo.tab' },
						{ label: 'Buttons & button group', event: 'demo.button' },
						{ label: 'List group', event: 'demo.listgroup' },
						{ label: 'jqbs on GitHub', event: 'demo.github', separator: true }
						] }
					],
				});
			$content.css('margin-top', $navbar.outerHeight(true));
			myDemo=new demo({ $wr: $content });
			// ----
			$content.on('demo.panel', myDemo.examplePanel);
			$content.on('demo.tab', myDemo.exampleTab);
			$content.on('demo.button', myDemo.exampleButton);
			$content.on('demo.listgroup', myDemo.exampleListgroup);
			$content.on('demo.github', function(){
				location.assign('https://github.com/volacsek/jquery-bootstrap'); 
				});
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
 