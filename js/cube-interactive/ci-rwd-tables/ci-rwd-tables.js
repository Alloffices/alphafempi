(function ($) {
    $.fn.ciRwdTables = function (configObject) { 
        var $tables = $(this);
        var config = {
            wrapperClass: 'ci-rwd-tables-table-wrapper',
            innerWrapperClass: 'ci-rwd-tables-inner-wrapper',
            wrappedClass: 'ci-rwd-tables-wrapped',
            scrollClass: 'ci-rwd-tables-scrolled',
            scrollEndClass: 'ci-rwd-tables-scroll-end'
        };
        
        if (typeof configObject === 'object') {
            $.extend(config, configObject);
        }
        
        var $tableWrapper;      
        var editableRwdTables = function($tables) {
			$tables.each(function() {
				var $innerWrapper = $(this).parent('.' + config.innerWrapperClass),
				    $tableWrapper = $innerWrapper.parent('.' + config.wrapperClass);
					
				if ($innerWrapper.get(0).scrollWidth > $innerWrapper.get(0).clientWidth) {
					$tableWrapper.removeClass(config.scrollEndClass);
				} else {
					$tableWrapper.addClass(config.scrollEndClass);
					$tableWrapper.removeClass(config.scrollClass);
				}
			});
		};
        
        this.each(function() {
            var $me = $(this);
            
            if ($me.hasClass(config.wrappedClass)) return;
            
			$tableWrapper = $('<div class="' + config.wrapperClass + '"><div class="' + config.innerWrapperClass + '"></div></div>');
			$me.wrap($tableWrapper);
			$me.addClass(config.wrappedClass);
        });
        
        $('.' + config.innerWrapperClass).scroll(function() {
			var $currentInnerWrapper = $(this),
				$currentTableWrapper = $currentInnerWrapper.parent('.' + config.wrapperClass);
				
			if ($currentInnerWrapper.scrollLeft() > 0) {
				$currentTableWrapper.addClass(config.scrollClass);
			} else {
				$currentTableWrapper.removeClass(config.scrollClass);
			}
			
			if ($currentInnerWrapper.scrollLeft() + $currentInnerWrapper.innerWidth() >= $currentInnerWrapper[0].scrollWidth) {
				$currentTableWrapper.addClass(config.scrollEndClass);
			} else {
				$currentTableWrapper.removeClass(config.scrollEndClass);
			}
		});
        
        $(window).resize(function() {
            editableRwdTables($tables);
        });
        editableRwdTables($tables);
    };
})(jQuery);

$(document).ready(function() {
   $('.editable').find('table').ciRwdTables();
});


