(function($){

	var jqBS={
		type: 'jqbsPanel',
		misc: $.fn.jqBS.misc,
		register: $.fn.jqBS.register,
		jqbsPanel: function(element, options) {

			var $wr=$(element);
			var s=$.extend(true, {
				type: 'default',
				header: null,
				body: '',
				footer: null
				}, options);
		

			this.setBody=setBody;
			this.setHeader=setHeader;
			this.setFooter=setFooter;
			this.setType=setType;

			function setType(type) {
				$wr.removeClass('panel-'+s.type);
				s.type=type;
				$wr.addClass('panel-'+s.type);
				}

			function setHeader(text) {
				if (text && text!==null) {
					if ($wr.find('.panel-heading h3').length==0) {
						$wr.find('.panel-body').before('<div class="panel-heading"><h3 class="panel-title"></h3></div>');
						}
					$wr.find('.panel-heading h3').html(text);
					}
				else $wr.find('.panel-heading').remove();
				}

			function setFooter(text) {
				if (text && text!==null) {
					if ($wr.find('.panel-footer').length==0) {
						$wr.find('.panel-body').after('<div class="panel-footer"></div>');
						}
					$wr.find('.panel-footer').html(text);
					}
				else $wr.find('.panel-footer').remove();
				}

			function setBody(text) {
				if (text && text!==null) $wr.find('.panel-body').html(text); else $wr.find('.panel-body').html('');
				}

			function renderHTML() {
				return '<div class="panel-body"></div>';
				}

			function init() {
				$wr.html(renderHTML());
				$wr.addClass('panel panel-'+s.type);
				// ----
				setHeader(s.header);
				setFooter(s.footer);
				setBody(s.body);
				}
				
			init();
			
			}
		};
	
	$.fn.jqbsPanel=function(p1, p2) {
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
	