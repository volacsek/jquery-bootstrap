(function($){

	var jqBS={
		type: 'jqbsTab',
		misc: $.fn.jqBS.misc,
		register: $.fn.jqBS.register,
		jqbsTab: function(element, options) {

			var $wr=$(element);
			var s=$.extend(true, {
				type: 'tabs', // tabs || pills
				stacked: false,
				justified: false,
				idPrefix: '',
				fade: true,
				elements: [],
				panel: {}
				}, options);

			var panelHTMLs=[];

			function appendMenuPanel(item) {
				var active='';
				if (s.fade===true) active+=' fade'+((item.active===true)?' in active':''); else if (item.active===true) active+=' active';
				panelHTMLs.push('<div role="tabpanel" class="tab-pane'+active+'" id="'+s.idPrefix+item.panel+'">'+s.panel[item.panel]+'</div>');
				}

			function renderHTML() {
				panelHTMLs=[];
				if (s.type=='pills' && s.stacked===true) var stacked=' nav-stacked';
				else {
					var stacked='';
					if (s.type!='pills' && s.stacked===true) $.fn.jqBS.misc.debug('warn', '@nav_stacked_can_use_only_pills');
					}
				var justified=(s.justified===true)?' nav-justified':'';
				var menu=new $.fn.jqBS.misc.menu({ 
					role: 'presentation', 
					appendMenuPanel: appendMenuPanel, 
					toggle: (s.type=='pills')?'pill':'tab',
					idPrefix: s.idPrefix
					});
				var html=menu.renderMenu(s.elements, 'nav nav-'+s.type+stacked+justified);
				if (panelHTMLs.length>0) html+='<div class="tab-content">'+panelHTMLs.join('')+'</div>';
				return html;
				}
		
			function bindings() {
				$wr.find('[jqbs-event]').each(function (idx, element) {
					$(this).on('click', function() {
						if (!$(this).hasClass('disabled') && !$(this).parent().hasClass('disabled')) {
							var $target=(s.$eventTarget)?s.$eventTarget:$(document);
							var data={ $element: $(this), $panel: $panel=$('#'+$(this).attr('aria-controls')) };
							$target.trigger($(this).attr('jqbs-event'), data);
							}
						});
					});
				}
			
			function init() {
//				$wr.replaceWith($('<ul>' + $wr[0].innerHTML + '</ul>'));
				$wr.html(renderHTML());
				$wr.find('ul.nav').attr("role", "tablist");
				bindings();
				}
				
			init();
			
			}
		};
	
	$.fn.jqbsTab=function(p1, p2) {
		return this.each(function() {
			var element=$(this);
			if (element.data('jqBSObject')) {
				var thePlugin=element.data('jqBSObject');
				if (typeof p1=='string' && typeof thePlugin[p1]=='function') {
					if (typeof p2!='undefined') thePlugin[p1](p2); else thePlugin[p1]();
					}
				else if (typeof p1=='string' && typeof thePlugin[p1]!='function') $.fn.jqBS.misc.debug('warn', 'jqBS.'+jqBS.type+'.'+p1+'() @method_not_exists');
				return;
				}
			else {
				var thePlugin=new jqBS[jqBS.type](this, p1);
				element.data('jqBSObject', thePlugin);
				}
			});
		};
		
	})(jQuery);
