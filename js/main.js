new Vue({
    el: ".header",
    data: {
        isOpen: false
    },
    methods: {
        toggleNav() {
            this.isOpen = !this.isOpen;
        }
    }
});

new Vue({
    el: ".listing__slider",
    mounted: function() {
        $(".listing__slider").slick({
            mobileFirst: true,
            slidesToScroll: 1,
            slidesToShow: 2,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
});


new Vue({
    el: ".cta",
    data: {
        isOpen: false
    },
    mounted: function() {
        const timeout = setTimeout(() => {
            this.isOpen = !this.isOpen;
            clearTimeout(timeout);
        }, 3000);
    }
});