/* Loader
============================================== */
$(window).on("load", function() {
    "use strict";
    $(".loader").fadeOut(800);
});

jQuery(function($) {
    "use strict";

    /* Back to top
    ============================================== */
    var amountScrolled = 700;
    var backBtn = $("a.back-to");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > amountScrolled) {
            backBtn.fadeIn("slow");
        } else {
            backBtn.fadeOut("slow");
        }
    });
    backBtn.on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });



    /* Puch Menu
    ============================================== */
    var $menuLeft = $(".pushmenu-left");
    var $menuRight = $(".pushmenu-right");
    var $toggleleft = $("#menu_bars.left");
    var $toggleright = $("#menu_bars.right");
    var pushbody = $(".pushmenu-push");
    $toggleleft.on("click", function() {
        $(this).toggleClass("active");
        pushbody.toggleClass("pushmenu-push-toright");
        $menuLeft.toggleClass("pushmenu-open");
        return false;
    });
    $toggleright.on("click", function() {
        $(this).toggleClass("active");
        pushbody.toggleClass("pushmenu-push-toleft");
        $menuRight.toggleClass("pushmenu-open");
        return false;
    });


    /* Rang slider
    ============================================== */
     $(".nstSlider").nstSlider({
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            $(this).parent().find(".leftLabel").text(leftValue);
            $(this).parent().find(".rightLabel").text(rightValue);
        }
    });


    /* Equalise columns
    ============================================== */
    $(".item").each(function() {
        var highestBox = 0;
        $(".col-md-6", this).each(function() {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $(".col-md-6", this).height(highestBox);

    });


    /* Toggle button for more options
    ============================================== */
    $(".show-hide-detail").hide();
    $(".show-hide-detail:first").show();
    $(".show-hide-btn a").on('click', function() {
        var thid_data = $(this).attr('data-id');
        $(".show-hide-btn a").removeClass('active');
        $(this).addClass('active');
        if (!$("#" + thid_data).is(":visible")) {
            $(".show-hide-detail").hide();
            $("#" + thid_data).show();
        }
    });


    /* Vertical center
     ============================================== */
    var verticalCenterHeight = function() {
        var screenHeight = $(window).height();
        $(".vertical-center").each(function() {
            $(this).css('top', ($(this).parent().height() - $(this).height()) / 2);
        });
    }
    window.onload = verticalCenterHeight;
    window.onresize = verticalCenterHeight;


    /* Left Menu
    ============================================== */
    $(document).ready(function() {
        var lastId, $targetLink = $('.block-menu a[href^="#"]', document.body);
        $($targetLink, document.body).on('click', function(e) {
            $targetLink.removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            var pointer = $target.offset().top - 120;
            $('html, body').stop().animate({
                'scrollTop': pointer
            }, 900, 'swing', function() {});
        });
        var lastId, topMenu = $(".block-menu", document.body),
            topMenuHeight = 160,
            menuItems = topMenu.find('a[href^="#"]');
        var scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
        $(window).scroll(function() {

            if (topMenu.hasClass('affix')) {
                var fromTop = $(this).scrollTop() + topMenuHeight;
                var cur = scrollItems.map(function() {
                    if ($(this).offset().top < fromTop)
                        return this;
                });
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";
                if (lastId !== id) {
                    lastId = id;
                    menuItems.removeClass("active");
                    menuItems.filter("[href=#" + id + "]").addClass("active");
                }
            }
        });
    });

    /* Revolution
    ============================================== */
    var revapi = jQuery("#rev_slider_3").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        scrollbarDrag: "true",
        spinner: "off",
        delay: 3000,
        navigation: {
            arrows: {
                enable: true
            }
        },
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1170, 992, 767, 480],
        gridheight: [750, 700, 650, 500],
    });
    var revapi = jQuery("#rev_full").revolution({
        sliderType: "standard",
        scrollbarDrag: "true",
        spinner: "off",
        sliderLayout: "fullscreen",
        delay: 3000,
        navigation: {
            arrows: {
                enable: true
            }
        },
        responsiveLevels: [4096, 1024, 778, 480],
        gridwidth: [1170, 960, 750, 480],
        gridheight: [720, 600, 500, 300],
    });
    var revapi = jQuery("#rev_video").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        delay: 9000,
        spinner: "off",
        navigation: {
            arrows: {
                enable: true
            }
        },
        gridwidth: 1170,
        gridheight: 700
    });

    function revolutionSliderActiver() {
        if ($('.rev_slider_wrapper #slider1').length) {
            $("#slider1").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 5000,
                startwidth: 1170,
                startheight: 855,

                navigationType: "bullet",
                navigationArrows: "0",
                navigationStyle: "preview3",

                dottedOverlay: 'yes',

                hideTimerBar: "off",
                onHoverStop: "off",
                navigation: {
                    arrows: {
                        enable: true
                    }
                },
                gridwidth: [1170],
                gridheight: [855]
            });
        };
    }


    // ------- PARALLAX  -------
    $(".parallaxie").parallaxie({
        speed: 0.6,
        offset: 0,
    });
    
});

/* Wow
============================================== */
new WOW().init();
