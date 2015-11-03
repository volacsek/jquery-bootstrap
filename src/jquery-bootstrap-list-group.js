// TODO:
/*
	1) simple listgroup -- with only linked elements
	2) listgroup with badges
	3) listgroup with custom content ( header + text )
	4) using contextual classes (only can: success, info, warning, danger) and disabled
*/

(function($){

	var jqBS={
		type: 'jqbsListGroup',
		misc: $.fn.jqBS.misc,
		register: $.fn.jqBS.register,
		jqbsListGroup: function(element, options) {

			var $wr=$(element);
			var s=$.extend(true, {
				type: '', // success | info | warning | danger
				$eventTarget: $(document),
				autoActivate: true,
				elements: []
				}, options);

			this.appendElement=appendElement;

			function appendElement() {

				}

			function renderElementHTML(element) {
				var text=(element.badge)?('<span class="badge">'+element.badge+'</span>'):'';
				if (typeof element=='string') text+=element;
				else if (typeof element.label=='string') text+=element.label;
				else if (element.label) {
					if (element.label.header) text+='<h4 class="list-group-item-heading">'+element.label.header+'</h4>';
					if (element.label.text) text+='<p class="list-group-item-text">'+element.label.text+'</p>';
					}
				return text;
				}

			function renderHTML() {
				var event=(s.event)?(' jqbs-event="'+s.event+'"'):'';
				for (var i in s.elements) {
					var cssClass='list-group-item';
					var text=renderElementHTML(s.elements[i]);
					cssClass+=(s.elements[i].disabled)?' disabled':'';
					cssClass+=(s.elements[i].active)?' active':'';
					cssClass+=(s.elements[i].type>'')?(' list-group-item-'+s.elements[i].type):((s.type>'')?' list-group-item-'+s.type:'');
					$wr.append('<a href="#" id="'+s.id+'-'+i+'" jqbs-index="'+i+'"'+event+' class="'+cssClass+'">'+text+'</a>');
//					$wr.find('#'+s.id+'-'+i).jqbsButton(s.elements[i]);
					}
				}

			function additionalProperties() {
				$wr.addClass('list-group');
				}

			function bindings() {
				$wr.find('a[jqbs-event]').on('click', function(event) {
					if (!$(this).hasClass('disabled')) {
						if (s.autoActivate) {
							$wr.find('a[jqbs-event]').removeClass('active');
							$(this).addClass('active');
							}
						s.$eventTarget.trigger($(this).attr('jqbs-event'), [$(this).attr('jqbs-index'), $(this), s.data]);
						}
					});
				}

			function init() {
				renderHTML();
				additionalProperties();
				bindings();
				}
			
			init();

			}
		};
	
	$.fn.jqbsListGroup=function(p1, p2) {
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
