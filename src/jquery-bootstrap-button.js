(function($){

	var jqBS={
		type: 'jqbsButton',
		misc: $.fn.jqBS.misc,
		register: $.fn.jqBS.register,
		jqbsButton: function(element, options) {

			var $wr=$(element);
			var s=$.extend(true, {
				$eventTarget: $(document),
				type: 'default',
				label: '{empty label}',
				id: jqBS.misc.uniqNodeID()
				}, options);

			this.setType=setType;

			function setType(type) {
				$wr.removeClass('btn-'+s.type);
				s.type=type;
				$wr.addClass('btn-'+s.type);
				}

			function renderHTML() {
				var html=s.label;
				if (s.dropdown && s.dropdown.constructor===Array) {
					html+=' <span class="caret"></span>';
					}
				$wr.html(html);
				}

			function bindings() {
				if (s.dropdown && s.dropdown.constructor===Array) {
					// dropdown
					$wr.parent().find('[jqbs-event]').each(function (idx, element) {
						$(this).on('click', function() {
							if (!$(this).hasClass('disabled') && !$(this).parent().hasClass('disabled')) {
								var $target=(s.$eventTarget)?s.$eventTarget:$(document);
								var data={ $element: $(this) };
								$target.trigger($(this).attr('jqbs-event'), data);
								}
							});
						});
					}
				else {
					// simple button
					$wr.on('click', function() {
						if (!$(this).hasClass('disabled') && $(this).attr('jqbs-event')>'') s.$eventTarget.trigger($(this).attr('jqbs-event'), { $element: $(this) });
						});
					}
				}
			
			function additionalProperties(){
				$wr.addClass('btn btn-'+s.type);
				$wr.attr('jqbs-type', jqBS.type);
				$wr.attr('id', s.id);
				if (s.event) $wr.attr('jqbs-event', s.event);
				if (s.dropdown && s.dropdown.constructor===Array) {
					var menu=new jqBS.misc.menu();
					$wr.wrap('<div class="btn-group"></div>');
					$wr.parent().append(menu.renderMenu(s.dropdown, 'dropdown-menu'));
					$wr.addClass('dropdown-toggle').attr('data-toggle', 'dropdown').attr('aria-haspopup', 'true').attr('aria-expanded', 'false');
					}
				}

			function init() {
				if ($wr.prop("tagName")=='BUTTON') {
					renderHTML();
					additionalProperties();
					bindings();
					}
				else jqBS.misc.debug('warn', '@button_wrapper_tagname_must_be_button');
				}
				
			init();
			
			}
		};
	
	$.fn.jqbsButton=function(p1, p2) {
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