(function($) {


    $(function() {
        smoothScroll.init({
            selector: '[data-scroll]',
            speed: 800
        });

    });
    $(function() {
        $('.sh-holder').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false

        });
       
          $('.sh-column').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false

        });
    });
}(jQuery));
