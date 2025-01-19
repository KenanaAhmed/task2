const nextIcon = "<i class='fa-solid fa-arrow-right-long' style='color: #92722a;'></i>";
const prevIcon = "<i class='fa-solid fa-arrow-left-long' style='color: #92722a;'></i>";

$(document).ready(function() {
    $('.first-content .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            nextIcon,
            prevIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            500: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })
});
$(document).ready(function() {
    $('.third-content .owl-carousel').owlCarousel({
        center: true,
        rtl: true,
        loop: true,
        lazyLoad: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            nextIcon,
            prevIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 3
            }
        }
    })
});
$(document).ready(function() {
    $('.forth-content .owl-carousel').owlCarousel({
        center: true,
        rtl: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [
            nextIcon,
            prevIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 3
            },
            900: {
                items: 5
            }
        }
    })
});
$('#partnerCarousel').hover(function() {
    $(this).carousel('pause');
}, function() {
    $(this).carousel('cycle');
});