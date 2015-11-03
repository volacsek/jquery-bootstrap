(function($){

	$.fn.jqBS=function() {};


	// TODO: jqBS.misc miatt a $.fn.jqBS.misc metódus típust -- {...} -- át kell alakítani példányosított függvény -- function() {} -- típusúra

	$.fn.jqBS.register={ byField: {}, uniq: {}	};
	$.fn.jqBS.misc={
	
		debug: function(level, msg, obj) {
			if (console && typeof console[level]=='function') {
				if (obj) console[level](msg+' ... in '+arguments.callee.caller.name+'()', obj); else console[level](msg+' ... in '+arguments.callee.caller.name+'() method');
				}
			},
			
		confirm: function(p) {
			var canForward=window.confirm(p.msg);
			if (typeof p.callback=='function') p.callback(canForward); else jqBS.misc('warn', 'jqBS :: '+jqBS.type+' @confirm_callback_missing'); 
			},
	
		replace: function(data, tpl) {
			var html=tpl;
			for (var key in data) {
				html=html.replace(new RegExp('{'+key+'}', 'g'), (data[key]===null)?'':data[key]);
				}
			return html;
			},
			
		uniqNodeID: function (dataField, multipleIndex, prefix) {
			var prefix=(prefix>'')?prefix:'jqbs-rid-';
			do {
				var rnd=Math.floor((Math.random()*100000000));
				}
			while ($('#'+prefix+rnd).length!=0);
			var uniqID=prefix+rnd;
			$.fn.jqBS.register.uniq[uniqID]=dataField;
			if (dataField && typeof multipleIndex!='undefined') {
				if (!$.fn.jqBS.register.byField[dataField]) $.fn.jqBS.register.byField[dataField]={};
				$.fn.jqBS.register.byField[dataField][multipleIndex]=uniqID;
				}
			else if (dataField) $.fn.jqBS.register.byField[dataField]=uniqID;
			return uniqID;
			},
			
		getAllKeys: function(obj, callback) {
			var keys=[];
			for (var key in obj) {
				keys[keys.length]=key;
				if (callback) callback(key, obj[key]); 
				}
			return keys;
			},
			
		menu: function (options) {

			// TODO: 
			// 		1) dropdown header; 
			// 		2) split button style dropdown ... (jquery-bootstrap-button.js)

			var s=$.extend(true, { 
				role: 'button',
				appendMenuPanel: function() {},
				toggle: '',
				idPrefix: ''
				}, options);
		
			this.renderMenu=renderMenu;
		
			function renderSeparatorElement() {
				return '<li role="separator" class="divider"></li>';
				}

			function renderMenuItem(item, dropdown, idx) {
				var html=(item.separator===true)?renderSeparatorElement():'';
				var icon=(item.icon)?'<span class="glyphicon glyphicon-'+item.icon+'" aria-hidden="true"></span> ':'';
				var binding=(item.event>'')?' jqbs-event="'+item.event+'"':''+((idx)?(' jqbs-index="'+idx+'"'):'');
				var disabled=(item.disabled===true)?' jqbs-disabled=true':'';
				var role=(s.role=='presentation')?' role="presentation"':'';
				if (item.panel) {
					var panelAttribs=' role="tab" aria-controls="'+s.idPrefix+item.panel+'"'+((s.toggle)?' data-toggle="'+s.toggle+'"':'');
					var href='#'+s.idPrefix+item.panel;
					}
				else {
					var panelAttribs='';
					var href='#';
					}
				if (dropdown===true) {
					var moreAttribs=' class="dropdown-toggle" data-toggle="dropdown" role="'+s.role+'" aria-haspopup="true" aria-expanded="false"';
					var ddElement='<a href="'+href+'"'+moreAttribs+binding+disabled+panelAttribs+'>'+icon+item.label+' <span class="caret"></span></a>';
					var active=(item.active===true)?' active':'';
					html='<li class="dropdown'+active+'"'+role+'>'+ddElement+renderMenu(item.dropdown, 'dropdown-menu')+'</li>';
					}
				else {
					var active=(item.active===true)?' class="active"':'';
					html+='<li'+active+role+'><a href="'+href+'"'+binding+disabled+panelAttribs+'>'+icon+item.label+'</a></li>';
					}
				// menu panel callback
				if (item.panel && typeof s.appendMenuPanel=='function') s.appendMenuPanel(item, dropdown);
				return html;
				}

			function renderMenu(menu, cssClass) {
				var html='';
				for (var i in menu) {
					if (menu[i].dropdown) {
						if (menu[i].dropdown.constructor===Array) html+=renderMenuItem(menu[i], true, i); else jqBS.misc.debug('warn', '@menu_dropdown_not_array', jqBS);
						}
					else html+=renderMenuItem(menu[i], false, i);
					}
				html='<ul class="'+cssClass+'">'+html+'</ul>';
				return html;
				}

			function init() {
				// init
				}

			init();
			}

		}
	
	var jqBS={
		type: 'jqBS',
		misc: $.fn.jqBS.misc,
		register: $.fn.jqBS.register
		}
		
	})(jQuery);
