$(window).resize(function() {
    responsiveMenu();
    //fixedHeader();
    iframeResize();

    var window_width = document.documentElement.clientWidth;
    if (window_width >= 640)
    {
        $('.mobile-wrapper').show();
        $('header').removeClass('affl-static');
    }
});