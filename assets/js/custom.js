$(window).resize(function() {
    /*--------- Service Slider Js ----------*/
    service_slider();
});




$(document).ready(function () {
    service_slider();

    //Menu Js
    $('.menu_toggle_btn').click(function () {
        $('.header_menu').toggleClass('open_menu');
        $('body').toggleClass('cm-overflow');
    });

    //video
    $("#play_1").click(function(){
		$(this).prev('.gr_1').find('video').get(0).play();
		$(this).hide();
    });
    $(".gr_1").click(function(){
            $(this).find('video').get(0).pause();
            $("#play_1").show();
    });

    //Tab Js
        $('.slick_tab').slick({
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 1,
            asNavFor: '.rtl-slider-nav',
            slidesToScroll: 1,
            infinite: false,
            // prevArrow:"<div class='gen_btn order_1'><p>GEN. 01</p></div>",
            // nextArrow:"<div class='gen_btn order_2'><p>GEN. 02</p></div>",
            arrows: false,
            dots: true,
            draggable: false,
        });
        $('.slick_tab .slick-dots li:nth-child(1)').html('<div class="gen_btn order_1"><p>GEN. 01</p></div>');
        $('.slick_tab .slick-dots li:nth-child(2)').html('<div class="gen_btn order_2;"><p>GEN. 02</p></div>');


        
        // Inner Tab Js
        $("#v-pills-home-tab").click(moveToFirst);
        $("#v-pills-profile-tab").click(moveToSecond);
        $("#v-pills-messages-tab").click(moveToThird);
        $("#v-pills-settings-tab").click(moveToFour);

        function moveToFirst() {
            $("#v-pills-tabContent").attr('class', 'move-to-first');
            $(".cm_tab_btn").attr('class', 'tab');
            $("#v-pills-home-tab").attr('class', 'tab selected');
        }

        function moveToSecond() {
            $("#v-pills-tabContent").attr('class', 'move-to-second');
            $(".cm_tab_btn").attr('class', 'tab');
            $("#v-pills-profile-tab").attr('class', 'tab selected');
        }

        function moveToThird() {
            $("#v-pills-tabContent").attr('class', 'move-to-third');
            $(".cm_tab_btn").attr('class', 'tab');
            $("#v-pills-messages-tab").attr('class', 'tab selected');
        }

        function moveToFour() {
            $("#v-pills-tabContent").attr('class', 'move-to-four');
            $(".cm_tab_btn").attr('class', 'tab');
            $("#v-pills-settings-tab").attr('class', 'tab selected');
        }

        $("#v-pills-tab button").click(function(){
            $("#v-pills-tab button").removeClass("selected");
            $(this).addClass("selected");
        });
   
});

// Service Slider
function service_slider() {
    var checkWidth = $(window).width();
    var owlPost = $(".owl_service_box");
    if (checkWidth >= 1200) {
        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }
        owlPost.removeClass('owl-carousel owl-theme');
    } else if (checkWidth <= 1199) {
        owlPost.addClass('owl-carousel owl-theme');
        owlPost.owlCarousel({
            navText: false,
            loop: true,
            dots: false,
            margin: 15,
            nav: false,
            stagePadding: 20,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0,
                    dots: true,
                },
                375: {
                    items: 1,
                    stagePadding: 0,
                },
                600: {
                    dots: false,
                    items: 2,
                    stagePadding: 53,
                },
                992: {
                    items: 2,
                    stagePadding: 180,
                    margin: 50,
                },
            }
        });
    }
}