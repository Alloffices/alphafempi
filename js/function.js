/*
 *[0] Loader
 *[1] Scroll to element
 *[2] Responsive menu
 *[3] Probe
 *[4] Document referrer
 *[5] Math
 *[6] Print_r
 *[7] Fixed header
 *[8] Mourning
 *[9] Copy to clipboard
 *[10] Recaptcha Scale
 *[11] CopyToClipboard
 *[12] iframe resize
 *[13] dotted
 *[14] autocomplete
 */
/*----------------------------------------------/
    [0] Loader
-----------------------------------------------*/
function fullLoaderSet() {
    if ($('#page-loader').hasClass('active')) {
        $('#page-loader').removeClass('active');
    } else {
        $('#page-loader').addClass('active');
    }
}
/*----------------------------------------------/
    [1] Scroll to element
-----------------------------------------------*/
function scrollToElement(target) {
    var topoffset = 30;
    var speed = 800;
    var destination = jQuery( target ).offset().top - topoffset;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() { /*window.location.hash = target;*/ });
    return false;
}
/*----------------------------------------------/
    [2] Responsive menu
-----------------------------------------------*/
function menu_wrapper() {
    if ($('.menu .resh-abs').css('display') == 'none') {
        var window_width = document.documentElement.clientWidth;
        if (window_width < 640) {
            $('.mobile-wrapper').hide();
            $('header').addClass('affl-static');
        }
        else {
            $('.mobile-wrapper').show();
            $('header').removeClass('affl-static');
        }
    } else {
        $('.mobile-wrapper').show();
        $('header').removeClass('affl-static');
    }
}

var oldW = document.documentElement.clientWidth;
var varload = true;
function responsiveMenu() {
    var window_width = document.documentElement.clientWidth;
    if (window_width < 1024) {
        $('.nav-menu-item').show();
        if (oldW >= 1024 || varload == true) {
            varload = false; 
        }
    } else {
        varload = true;
        $('.nav-menu-item').hide();
        $('.nav-menu-primary').show();
        $('.nav-menu-secondary').hide();
    }
}

function showSecodaryMenu(id) {
    var menu = $('#nav-menu-secondary-'+id);
    if (menu.css('display') == 'none') {
        $('.nav-menu-primary').hide();
        menu.show();
    } else {
        menu.hide();
        $('.nav-menu-primary').show();
    }
}
/*----------------------------------------------/
    [3] Probe
-----------------------------------------------*/
function answerProbe(id_probe,id_answer,id) {
    fullLoaderSet();
    if (id_probe > 0 && id_answer > 0) {
        $.ajax({
            type: 'POST',
            url: 'index.php?ajax=1',
            dataType : 'json',
            data: {
                module: 'probe',
                id_probe:id_probe,
                id_answer:id_answer,
                id:id,
                action: 'addAnswer',
                lang: lang,
            },
            success : function(json) {
                if (json['error'] != '') {
                    $('#warning-modal .modal-body').html('<div class="alert alert-warning">'+json['error']+'</div>');
                    $('#warning-modal').modal('show');
                    fullLoaderSet();
                } else {
                    $('.probe-'+id_probe).html(json['data']);
                    fullLoaderSet();
                }
            },
            error : function () {
                $('#warning-modal .modal-body').html('<div class="alert alert-warning">'+language['error_202']+'</div>');
                $('#warning-modal').modal('show');
                fullLoaderSet();
            }
        });
    } else {
        $('#warning-modal .modal-body').html('<div class="alert alert-warning">'+language['error_202']+'/div>');
        $('#warning-modal').modal('show');
        fullLoaderSet();
    }
}
/*----------------------------------------------/
    [4] Document referrer
-----------------------------------------------*/
function locationReferrer(url) {
	if (document.referrer == "") {
	    location.href = url;
	} else {
	    window.history.back();
	}
}
/*----------------------------------------------/
    [5] Math
-----------------------------------------------*/
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
/*----------------------------------------------/
    [6] Print_r
-----------------------------------------------*/
function print_r(o) {
	function f(o, p, s) {
		for(x in o) {
			if ('object' == typeof o[x]) {
				s += p + x + ' obiekt: \n';
				pre = p + '\t';
				s = f(o[x], pre, s);
			} else {
				s += p + x + ' : ' + o[x] + '\n';
			}
		}
		return s;
	}
	return f(o, '', '');
}
/*----------------------------------------------/
    [7] Fixed header
-----------------------------------------------*/
function fixedHeader() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1) {
            var window_width = document.documentElement.clientWidth;
            if (window_width > 768) {
                $('header').addClass('header-fixed');
            } else {
                $('header').removeClass('header-fixed');
            }
		} else {
            $('header').removeClass('header-fixed');
        }
	});
}
/*
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);*/

/*----------------------------------------------/
    [8] Mourning
-----------------------------------------------*/
function Mourning(operation) {
    if (operation == 'on') {
        $('img').each(function() {
            $(this).addClass('grayscale');
        });
        $('.grayscale').gray();
    }
    if (operation == 'off') {
        $('img').each(function() {
            $(this).removeClass('grayscale');
        });
        $('.grayscale').gray('grayscale-off');
    }
}

/*----------------------------------------------/
    [9] Copy to clipboard
-----------------------------------------------*/
function copyToClipboard(elementId) {
    // Create a "hidden" input
    var aux = document.createElement("input");
                      
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
                      
    // Append it to the body
    document.body.appendChild(aux);
                      
    // Highlight its content
    aux.select();
                      
    // Copy the highlighted text
    document.execCommand("copy");
                      
    // Remove it from the body
    document.body.removeChild(aux);
}
/*----------------------------------------------/
    [10] Recaptcha Scale
-----------------------------------------------*/
function recaptchaScale() {
    var recaptcha = $(".g-recaptcha");
    $(".g-recaptcha").each(function() {
        var recaptcha = $(this);
        if(recaptcha.css('margin') == '1px') {
            var newScaleFactor = recaptcha.parent().innerWidth() / 304;
            recaptcha.css('transform', 'scale(' + newScaleFactor + ')');
            recaptcha.css('transform-origin', '0 0');
        }
        else {
            recaptcha.css('transform', 'scale(1)');
            recaptcha.css('transform-origin', '0 0');
        } 
    });  
}

/*
 *@media(max-width: 390px) {
    .g-recaptcha {
        margin: 1px;
    }
}*/
/*----------------------------------------------/
    [11] CopyToClipboard
-----------------------------------------------*/
function copyToClipboard(elementId) {
    // Create a "hidden" input
    var aux = document.createElement("input");
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    // Append it to the body
    document.body.appendChild(aux);
    // Highlight its content
    aux.select();
    // Copy the highlighted text
    document.execCommand("copy");
    // Remove it from the body
    document.body.removeChild(aux);
}

/*----------------------------------------------/
    [12] iframe resize
-----------------------------------------------*/
function iframeResize() {
    $('iframe').each(function(){
        var width = parseInt($(this).attr('data-maxwidth'))||0;
        var height = parseInt($(this).attr('data-maxheight'))||0;
        var true_width = $(this).actual('innerWidth');
        if (width > 0 && height > 0) {
            var true_height = true_width*height/width;
            $(this).height(true_height);
        }
    });
}

/*----------------------------------------------/
    [13] dotted
-----------------------------------------------*/

function dottedPosition(scroll_width) {
    /*var $dotted = window_width - 1400 + scroll_width;
    if ($dotted > 0) {
        $('.dotted').css('right',($dotted/2)+'px');
    }*/
}

function wopen(url, w, h, target) {
    target = target || '';
    w = w || 640;
    h = h || 350;
    var left = (window.screenLeft ? window.screenLeft : window.screenX) + (ww / 2) - (w / 2);
    var top = (window.screenTop ? window.screenTop : window.screenY) + (wh / 2) - (h / 2) - 100;
    if (top <= 0) top = 20;
    window.open(url, target, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left);
    return false;
}

function resized() {
    ww = $(window).innerWidth();
    wh = $(window).innerHeight();
}

/*----------------------------------------------/
    [14] Autocomplete
-----------------------------------------------*/
(function($) {
	$.fn.autocomplete = function(option) {
		return this.each(function() {
			this.timer = null;
			this.items = new Array();
	
			$.extend(this, option);
	
			$(this).attr('autocomplete', 'off');
			
			// Focus
			$(this).on('focus', function() {
				this.request();
			});
			
			// Blur
			$(this).on('blur', function() {
				setTimeout(function(object) {
					object.hide();
				}, 200, this);				
			});
			
			// Keydown
			$(this).on('keydown', function(event) {
				switch(event.keyCode) {
					case 27: // escape
						this.hide();
						break;
					default:
						this.request();
						break;
				}				
			});
			
			// Click
			this.click = function(event) {
				event.preventDefault();
	
				value = $(event.target).parent().attr('data-value');
	
				if (value && this.items[value]) {
					this.select(this.items[value]);
				}
			}
			
			// Show
			this.show = function() {
				var pos = $(this).position();
	
				$(this).siblings('ul.dropdown-menu').css({
					top: pos.top + $(this).outerHeight(),
					left: pos.left
				});
	
				$(this).siblings('ul.dropdown-menu').show();
			}
			
			// Hide
			this.hide = function() {
				$(this).siblings('ul.dropdown-menu').hide();
			}		
			
			// Request
			this.request = function() {
				clearTimeout(this.timer);
		
				this.timer = setTimeout(function(object) {
					object.source($(object).val(), $.proxy(object.response, object));
				}, 200, this);
			}
			
			// Response
			this.response = function(json) {
				html = '';
	
				if (json.length) {
					for (i = 0; i < json.length; i++) {
						this.items[json[i]['value']] = json[i];
					}
	
					for (i = 0; i < json.length; i++) {
						if (!json[i]['category']) {
							html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
						}
					}
	
					// Get all the ones with a categories
					var category = new Array();
	
					for (i = 0; i < json.length; i++) {
						if (json[i]['category']) {
							if (!category[json[i]['category']]) {
								category[json[i]['category']] = new Array();
								category[json[i]['category']]['name'] = json[i]['category'];
								category[json[i]['category']]['item'] = new Array();
							}
	
							category[json[i]['category']]['item'].push(json[i]);
						}
					}
	
					for (i in category) {
						html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';
	
						for (j = 0; j < category[i]['item'].length; j++) {
							html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
						}
					}
				}
	
				if (html) {
					this.show();
				} else {
					this.hide();
				}
	
				$(this).siblings('ul.dropdown-menu').html(html);
			}
			
			$(this).after('<ul class="dropdown-menu"></ul>');
			$(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));	
			
		});
	}
})(window.jQuery);