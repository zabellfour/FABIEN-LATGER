(function($) {


    $(function() {
        smoothScroll.init({
            selector: '[data-scroll]',
            speed: 800
        });

    });
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            items:1,
            loop: true,
            nav: true,
            dots:false
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
