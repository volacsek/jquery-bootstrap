var demo=function(options) {
	
	var s=$.extend(true, {}, options);

	this.examplePanel=examplePanel;
	this.exampleTab=exampleTab;
	this.exampleButton=exampleButton;

	function examplePanel() {
		s.$wr.html('<div class="sample-container"></div>');
		s.$wr.find('.sample-container').jqbsPanel({ header: '@panelTitle_first', body: '@panelBody_first' });
		// ----
		for (var i=0; i<3; i++) {
			s.$wr.append('<div id="sample-panel-'+i+'" class="sample-container-x"></div>');
			s.$wr.find('.sample-container-x').jqbsPanel({ header: '@panelTitle', body: '@panelBody', type: 'info' });
			s.$wr.find('#sample-panel-1').jqbsPanel('setHeader', '@fire').jqbsPanel('setType', 'danger');
			}
		}

	function exampleTab() {
		var data={ 
			$eventTarget: s.$wr,
			elements: [
				{ label: 'Tab-1', event: 'demo.tab1', panel: '_1st', icon: 'star' },
				{ label: 'Tab-2', event: 'demo.tab2', panel: '_2nd' },
				{ label: 'Tab-3', event: 'demo.tab3', panel: '_3rd', active: true },
				{ label: 'Tab-4', dropdown: [
					{ label: 'Sub-A', event: 'demo.tab4sub', panel: '_4thA' },
					{ label: 'Sub-B', event: 'demo.tab4sub', panel: '_4thB' }
					] }
				],
			panel: {
				_1st: '<p>1st text</p>',
				_2nd: '<p>2nd text</p>',
				_3rd: '<p>3rd text</p>',
				_4thA: '<p>4thA text</p>',
				_4thB: '<p>4thB text</p>'
				}
			}
		s.$wr.html('<div class="sample-container-tab"></div><div class="sample-container-pill"></div>');
		s.$wr.find('.sample-container-tab').jqbsTab(data);
		s.$wr.find('.sample-container-pill').jqbsTab($.extend(true, {}, data, { type: 'pills', justified: true, fade: true, idPrefix: 'p2' }));
		}

	function exampleButton() {
		var data;
		var sampleContainer=[
			'<h2>Simple buttons</h2>'+
			'<div class="sample-container-btn">'+
				'<button></button>&nbsp;'+
				'<button></button>'+
			'</div>',
			'<h2>Button group</h2>'+
			'<div class="sample-container-btnGroup"></div>'+
			'<h2>Button toolbar</h2>'+
			'<div class="sample-container-btnToolbar"></div>'
			];
		s.$wr.html(sampleContainer.join(''));
		// simple buttons
		data={ $eventTarget: s.$wr, label: 'first button', event: 'demo.btnClicked' }
		s.$wr.find('.sample-container-btn button:nth-of-type(1)').jqbsButton(data);
		s.$wr.find('.sample-container-btn button:nth-of-type(2)').jqbsButton($.extend(true, {}, data, { label: 'second button', type: 'primary' }));
		// button group
		data={ elements: [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }] }
		s.$wr.find('.sample-container-btnGroup').jqbsButtonGroup(data);
		// button toolbar
		data={ type: 'toolbar', elements: [
			{ elements: [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }] },
			{ elements: [{ label: 'A' }, { label: 'B', $eventTarget: s.$wr, dropdown: [
				{ label: 'B - first dropdown', event: 'demo.btnDropdownClicked' },
				{ label: 'B - first dropdown', event: 'demo.btnDropdownClicked' }
				] }] }
			] }
		s.$wr.find('.sample-container-btnToolbar').jqbsButtonGroup(data);
		}


	function tab2_handler(event, data) { 
		data.$panel.append('<p>... clicked content...</p>');
		}

	function btnClicked(event, data) {
		alert(data.$element.attr('id')+' button will be `info` type...');
		data.$element.jqbsButton('setType', 'info');
		}

	function btnDropdownClicked(event, data) {
		alert('Dropdown element clicked ...');
		}

	function init() {
		// init
		s.$wr.on('demo.tab2', tab2_handler);
		s.$wr.on('demo.btnClicked', btnClicked);
		s.$wr.on('demo.btnDropdownClicked', btnDropdownClicked);
		}

	init();
	}