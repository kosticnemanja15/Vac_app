  $ = jQuery.noConflict();
  $(document).ready(function(){
   

   $('#menu-button').sidr({
            name: 'sidr-right',
            side: 'right',
            source: '.nav-holder'
        });

        $('body').click(function () {
            $.sidr('close', 'sidr-right');
        });
        $(window).resize(function () {
            $.sidr('close', 'sidr-right');
        });

        var config = {
            sensitivity: 10,
            interval: 5000,
            timeout: 50000
        };




          

});