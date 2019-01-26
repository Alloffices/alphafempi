var cookieNaglowek=
     '<b>W ramach naszej witryny internetowej stosujemy pliki cookies w celu świadczenia Państwu usług na najwyższym poziomie</b>, w sposób dostosowany do indywidualnych potrzeb.'
     +' Korzystanie z tej witryny bez zmiany ustawień dotyczących cookies oznacza, że będą one zamieszczane w Państwa urządzeniu końcowym.'
     +' Mogą Państwo dokonać w każdym czasie zmiany ustawień dotyczących cookies.'
     +' <a class="cook" href="javascript:void(0);">Więcej informacji…</a>';
var cookieOpis=
     '<b>Ciasteczka – niewielkie informacje tekstowe</b>, wysyłane przez serwer WWW i zapisywane po stronie użytkownika (zazwyczaj na twardym dysku).'
     +' Domyślne parametry ciasteczek pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył.'
     +' Ciasteczka są stosowane najczęściej w przypadku liczników, sond, sklepów internetowych, stron wymagających logowania,'
     +'reklam i do monitorowania aktywności odwiedzających (źródło: <a class="cook" href="http://pl.wikipedia.org/wiki/Ciasteczko" target="_blank">wikipedia</a>).<br/><br/>'
     +' Jeżeli nie zgadzasz się na zbieranie informacji przez ciasteczka, możesz wyłączyć obsługę ciasteczek (cookies) w przeglądarce internetowej.<br/>'
     +'•<span> </span><a class="cook" href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek" target="_blank" rel="nofollow">Mozilla Firefox</a><br />'
     +'•<span> </span><a class="cook" href="http://windows.microsoft.com/pl-pl/internet-explorer/change-ie-settings#ie=ie-8" target="_blank" rel="nofollow">Microsoft Internet Explorer</a><br />'
     +'•<span> </span><a class="cook" href="http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647" target="_blank" rel="nofollow">Google Chrome</a><br />'
     +'•<span> </span><a class="cook" href="http://help.opera.com/Linux/12.10/pl/cookies.html" target="_blank" rel="nofollow">Opera</a><br />'
     +'•<span> </span><a class="cook" href="http://support.apple.com/kb/ph5042" target="_blank" rel="nofollow">Apple Safari</a><br /><br />'
     +'Przy innych przeglądarkach proponujemy znalezienie rozwiązania na stronie producenta przeglądarki.';

(function(e){
    e(function(){
        var t=document.cookie.split(";");
        for(var n=0;n<t.length;n++)
        {
            var r=t[n].substr(0,t[n].indexOf("="));
            var i=t[n].substr(t[n].indexOf("=")+1);r=r.replace(/^\s+|\s+$/g,"");
            if(r=="COOKIE_POLICY"&&i=="1")
            {
                return
            }
        }
        e("body").append('<div id="cookiePolicy"><div id="cookiePolicyWrap"><div id="cookiePolicyClose">×</div><div id="cookiePolicyText">'+cookieNaglowek+'</div><div id="cookiePolicyMore">'+cookieOpis+"</div></div></div>");
        e("body").append("<style type=\"text/css\">.cook{text-decoration:none !important; color:#C60000 !important;}.cook:hover{text-decoration:underline !important;}#cookiePolicyWrap{margin:0 auto;width:1170px;max-width:100%}#cookiePolicyClose{line-height:40px;font-size:40px;float:right;font-weight:bold;cursor:pointer;margin:0 0 0 10px;color:#333333}#cookiePolicyClose:hover{color:#222222}#cookiePolicyMore{clear:both;padding:10px 0 0 0;display:none;width:100%}div#cookiePolicy a{text-decoration:underline;color:blue;font-size:11px}div#cookiePolicy a:hover{text-decoration:none;color:blue;font-size:11px}div#cookiePolicy{position:fixed;bottom:0;left:0;width:100%;z-index:999999;padding:10px 0;color:#333333;background:#E6E6E6;border-top:1px solid #B4B4B4;font-size:11px;font-family:Arial,Helvetica,Tahoma,Verdana; background: -moz-linear-gradient(top,  rgba(230,230,230,0.95) 0%, rgba(200,200,200,0.95) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(230,230,230,0.95)), color-stop(100%,rgba(200,200,200,0.95)));background: -webkit-linear-gradient(top,  rgba(230,230,230,0.95) 0%,rgba(200,200,200,0.95) 100%);background: -o-linear-gradient(top,  rgba(230,230,230,0.95) 0%,rgba(200,200,200,0.95) 100%);background: -ms-linear-gradient(top,  rgba(230,230,230,0.95) 0%,rgba(200,200,200,0.95) 100%);background: linear-gradient(to bottom,  rgba(230,230,230,0.95) 0%,rgba(200,200,200,0.95) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2e6e6e6', endColorstr='#f2c8c8c8',GradientType=0 );</style>");
        e("#cookiePolicyText a").bind("click touch",function()
        {
            e("#cookiePolicyMore").slideToggle()
        });
        e("#cookiePolicyClose").bind("click touch",function()
        {
            var t=new Date;t.setDate(t.getDate()+365);
            document.cookie="COOKIE_POLICY=1; expires="+t.toUTCString();
            e("#cookiePolicy").slideUp();
            return false
        })
    })
})
(jQuery);