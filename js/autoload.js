var viewport = ResponsiveBootstrapToolkit;
var window_width = $('.responsive-bootstrap-toolkit').width();
var window_height = window.innerHeight;
    
$(document).ready(function() {
   
    /*language*/
    $('.language a').click(function(){
       var language = $(this).find('input:hidden[name=language_code]').val();
       var redirect = $(this).find('input:hidden[name=language_redirect]').val();
       //$.cookie('lang_code',language);
       location.href = redirect;
    });
    
    $('.lang a').click(function(){
       var language = $(this).find('input:hidden[name=language_code]').val();
       var redirect = $(this).find('input:hidden[name=language_redirect]').val();
       //$.cookie('lang_code',language);
       location.href = redirect;
    });
   
    /*social slider*/
    $('.social-slider-left div.social-slider-button').click(function(){
        var parent = $(this).parent();
        var left = parseInt(parent.css('left'))||0;
       
        if (left < 0) {
            $('.social-slider-left .social-slider-content').stop().animate({ left: -320 },350);
            parent.stop().animate({ left: 0 },350);
        } else {
            parent.stop().animate({ left: -320 },350);
        } 
    });
   
    $('.social-slider-right .social-slider-button').click(function(){
        var parent = $(this).parent();
        var right = parseInt(parent.css('right'))||0;
        
        if (right < 0) {
            $('.social-slider-right .social-slider-content').stop().animate({ right: -320 },350);
            parent.stop().animate({ right: 0 },350);
        } else {
            parent.stop().animate({ right: -320 },350);
        } 
    });
    $('[data-tooltip="tooltip"]').tooltip();
    $('[data-popover="popover"]').popover();
    
    $('header').affix({
		offset: {
			top: function(){
				var t = this;
				$(window).resize(function(){
					t.top = 70;
				});
				
				return (t.top = 70);
			},
			//bottom: 0,
		}
	});
    //$('.resh-abs .resh-left-sidebar').css('min-height',$('.resh-abs .resh-right-sidebar').actual('outerHeight')+'px');
    //$('.resh-abs .resh-right-sidebar').css('min-height',$('.resh-abs .resh-left-sidebar').actual('outerHeight')+'px');
    $('.resh-abs .resh-left-sidebar').css('height',(window_height-71)+'px');
    $('.resh-abs .resh-right-sidebar').css('height',(window_height-71)+'px');
    $('.resh-toggle').click(function(){
        $('.resp-menu-icon').toggleClass("rotate");
        if ($('.resh-abs').css('display') == 'none') {
            $('.resh-abs').show();
            $('header').addClass('affl');
        } else {
            $('.resh-abs').hide();
            $('header').removeClass('affl');
        }
    });
    
    iframeResize();
});

$(window).resize(function() {
    var window_height = window.innerHeight;
    $('.resh-abs .resh-left-sidebar').css('height',(window_height-71)+'px');
    $('.resh-abs .resh-right-sidebar').css('height',(window_height-71)+'px');
    /*
    var window_height = window.innerHeight;
    $('.resh-abs .resh-left-sidebar').css('min-height',(window_height-71)+'px');
    $('.resh-abs .resh-right-sidebar').css('min-height',(window_height-71)+'px');
    */
});

$('#dotted').onePageNav({
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)'
});

dottedPosition(0);

$(window).resize(function() {
    dottedPosition(0);
});

$(function() {
    $(document).on('show.bs.modal', '.modal', function() {
        var maxZ = parseInt($('.modal-backdrop').css('z-index')) || 1040;

        $('.modal:visible').each(function() {
            maxZ = Math.max(parseInt($(this).css('z-index')), maxZ);
        });

        $('.modal-backdrop').css('z-index', maxZ);
        $(this).css("z-index", maxZ + 1);
        $('.modal-dialog', this).css("z-index", maxZ + 2);
        dottedPosition(17);
    });

    $(document).on('hidden.bs.modal', '.modal', function () {
        if ($('.modal:visible').length) {
            $(document.body).addClass('modal-open');

           var maxZ = 1040;

           $('.modal:visible').each(function() {
               maxZ = Math.max(parseInt($(this).css('z-index')), maxZ);
           });

           $('.modal-backdrop').css('z-index', maxZ-1);
       }
       dottedPosition(0);
    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('.btn-up-page').stop( true, true ).animate({opacity: "1"}, 125);
    } else {
        $('.btn-up-page').stop( true, true ).animate({opacity: "0"}, 125);
    }
});

var ww, wh;
$(window).resize(function() {
    setTimeout(resized, 200);
});

responsiveMenu();