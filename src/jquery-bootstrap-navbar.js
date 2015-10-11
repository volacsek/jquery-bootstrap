(function($){

	var jqBS={
		type: 'jqbsNavbar',
		misc: $.fn.jqBS.misc,
		register: $.fn.jqBS.register,
		jqbsNavbar: function(element, options) {

			var $wr=$(element);
			var s=$.extend(true, {
				type: 'default',
				fixedTop: top,
				label: {
					brand: 'Brand',
					toggleNavigation: 'Toggle navigation'
					}
				}, options);
		

			this.menuSuspend=menuSuspend;
			this.register=function () { 
				return jqBS.register; 
				}

			function menuSuspend(p) {
				var $el=$wr.find('[jqbs-event="'+p.event+'"]');
				if ($el && p.suspend===true) $el.parent().addClass('disabled'); else $el.parent().removeClass('disabled');
				}

			function renderNavbarHeader() {
				var html='<div class="navbar-header">'+
						'	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
						'		<span class="sr-only">'+s.label.toggleNavigation+'</span>'+
						'		<span class="icon-bar"></span>'+
						'		<span class="icon-bar"></span>'+
						'		<span class="icon-bar"></span>'+
						'	</button>'+
						'	<a class="navbar-brand" href="#">'+s.brand.label+'</a>'+
						'</div>';
				return html;
				}

			function renderHTML() {
				var menu=new $.fn.jqBS.misc.menu();
				var html=renderNavbarHeader()+
						'<div class="collapse navbar-collapse">'+
							menu.renderMenu(s.left, 'nav navbar-nav')+
							menu.renderMenu(s.right, 'nav navbar-nav navbar-right')+
						'</div>';
				$wr.html('<div class="container-fluid">'+html+'</div>');
				}

			function additionalProperties(){
				$wr.addClass('navbar navbar-'+s.type);
				$wr.attr('jqbs-type', jqBS.type);
				if (s.fixedTop) $wr.addClass('navbar-fixed-top');
				$wr.find('[jqbs-disabled=true]').parent().addClass('disabled');
				}

			function bindings() {
				$wr.find('[jqbs-event]').each(function (idx, element) {
					$(this).on('click', function() {
						if (!$(this).hasClass('disabled') && !$(this).parent().hasClass('disabled')) {
							var $target=(s.$eventTarget)?s.$eventTarget:$(document);
							$target.trigger($(this).attr('jqbs-event'), { $element: $(element) });
							}
						});
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
	
	$.fn.jqbsNavbar=function(p1, p2) {
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
	