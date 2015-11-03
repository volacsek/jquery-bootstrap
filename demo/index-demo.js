var demo=function(options) {
	
	var s=$.extend(true, {}, options);

	this.examplePanel=examplePanel;
	this.exampleTab=exampleTab;
	this.exampleButton=exampleButton;
	this.exampleListgroup=exampleListgroup;

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
				{ label: 'Tab-1', event: 'demo.tab1', panel: 'p_1st', icon: 'star' },
				{ label: 'Tab-2', event: 'demo.tab2', panel: 'p_2nd' },
				{ label: 'Tab-3', event: 'demo.tab3', panel: 'p_3rd', active: true },
				{ label: 'Tab-4', dropdown: [
					{ label: 'Sub-A', event: 'demo.tab4sub', panel: 'p_4thA' },
					{ label: 'Sub-B', event: 'demo.tab4sub', panel: 'p_4thB' }
					] }
				],
			panel: {
				p_1st: '<p>1st text</p>',
				p_2nd: '<p>2nd text</p>',
				p_3rd: '<p>3rd text</p>',
				p_4thA: '<p>4thA text</p>',
				p_4thB: '<p>4thB text</p>'
				}
			}
		s.$wr.html('<div class="sample-container-tab"></div><div class="sample-container-pill"></div>');
		s.$wr.find('.sample-container-tab').jqbsTab(data);
		s.$wr.find('.sample-container-pill').jqbsTab($.extend(true, {}, data, { type: 'pills', justified: true, fade: true, idPrefix: 'p2' }));
		}

	function exampleButton() {
		var data;
		var sampleContainers=[
			// simple button containers
			'<h2>Simple buttons</h2>'+
			'<div class="sample-container-btn">'+
				'<button></button>&nbsp;'+
				'<button></button>'+
			'</div>',
			// button group container
			'<h2>Button group</h2><div class="sample-container-btnGroup"></div>',
			// button toolbar container
			'<h2>Button toolbar</h2><div class="sample-container-btnToolbar"></div>'
			];
		s.$wr.html(sampleContainers.join(''));
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
				{ label: 'B1 - first dropdown', event: 'demo.btnDropdownClicked1' },
				{ label: 'B2 - second dropdown', event: 'demo.btnDropdownClicked2', data: { original: 'second' } }
				] }] }
			] }
		s.$wr.find('.sample-container-btnToolbar').jqbsButtonGroup(data);
		}

	function exampleListgroup() {
		s.$wr.html('<div class="sample-container"></div>');
		s.$wr.find('.sample-container').jqbsListGroup({ 
			elements: [
				'First element',
				'Second element',
				{ label: 'Third element', disabled: true },
				{ label: { header: 'Fourth element', text: 'With more text ...' } },
				{ label: 'Fifth success element', type: 'success', data: { original: 'It\'s defined!' } },
				{ label: { header: 'Sixth element', text: 'Default active info with more text ...' }, type: 'info', active: true }
				],
			event: 'demo.listgroupClicked',
			$eventTarget: s.$wr
			});
		}

	function tab2_handler(event, data) { 
		data.$panel.append('<p>... clicked content...</p>');
		}

	function btnClicked(event, idx, $el) {
		alert($el.attr('id')+' button will be `info` type...');
		$el.jqbsButton('setType', 'info');
		}

	function btnDropdownClicked1() {
		alert('Dropdown first element clicked ...');
		}

	function btnDropdownClicked2(event, idx, $el, data) {
		alert('Dropdown second element clicked, index='+idx+', data.original='+data.original);
		}

	function listgroupClicked(event, idx, $el, data) {
		var dataInfo=(data && data.original)?' ... with data.original='+data.original:'';
		alert('Clicked on listgroup element, index='+idx+dataInfo);
		}

	function init() {
		// init
		s.$wr.on('demo.tab2', tab2_handler);
		s.$wr.on('demo.btnClicked', btnClicked);
		s.$wr.on('demo.btnDropdownClicked1', btnDropdownClicked1);
		s.$wr.on('demo.btnDropdownClicked2', btnDropdownClicked2);
		s.$wr.on('demo.listgroupClicked', listgroupClicked);
		}

	init();
	}