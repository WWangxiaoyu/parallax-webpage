$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj=$(this);

        $(window).scoll(function(){
            var ypos=-($window.scrollTop()/$bgobj.data('speed'));

            var coords='50%'+yPos+'px';

            $bgobj.css({backgroundPosition:coords});
        });
    });
});