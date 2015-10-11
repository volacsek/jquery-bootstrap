(function($){

	var jqBS={
		type: 'jqbsButtonGroup',
		misc: $.fn.jqBS.misc,
		register: $.fn.jqBS.register,
		jqbsButtonGroup: function(element, options) {

			var $wr=$(element);
			var s=$.extend(true, {
				type: 'group', // group || toolbar
				elements: []
				}, options);

			this.appendElement=appendElement;

			function appendElement() {

				}

			function renderHTML() {
				for (var i in s.elements) {
					if (s.type=='group') {
						$wr.append('<button id="'+s.id+'-'+i+'"></button>');
						$wr.find('#'+s.id+'-'+i).jqbsButton(s.elements[i]);
						}
					else if (s.type=='toolbar') {
						for (var i in s.elements) {
							$wr.append('<div id="'+s.id+'-'+i+'"></div>');
							$wr.find('#'+s.id+'-'+i).jqbsButtonGroup(s.elements[i]);
							}
						}
					}
				}

			function additionalProperties() {
				$wr.addClass('btn-'+s.type);
				$wr.attr('role', s.type);
				}

			function init() {
				renderHTML();
				additionalProperties();
				}
			
			init();

			}
		};
	
	$.fn.jqbsButtonGroup=function(p1, p2) {
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
