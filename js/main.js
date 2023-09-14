$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.main_slide').slick({
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.header .btn_ham').on('click', function () {
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li').on('click', function(e){
        e.preventDefault();

        let idx = $(this).index();
        $(this).find('.sub').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.main_vi .arrows .up').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .down').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.main_biz .count_num').each(function(){
        var $this = $(this),
        countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 5000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
    });

    $('.story_wrap>*').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.menu li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.con_list .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.menu li').on("click", function() {
        $('.cam_slide01').css('display', 'block'); 
        $('.cam_slide01').slick('setPosition');
        $('.cam_slide02').css('display', 'block'); 
        $('.cam_slide02').slick('setPosition');
        $('.cam_slide03').css('display', 'block'); 
        $('.cam_slide03').slick('setPosition');
        $('.cam_slide04').css('display', 'block'); 
        $('.cam_slide04').slick('setPosition');
    });

    $('.cam_slide01').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.cam_slide02').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.cam_slide03').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.cam_slide04').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.main_cam .cam01 .left').on('click', function () {
        $('.cam_slide01').slick('slickPrev');
    });
    $('.main_cam .cam01 .right').on('click', function () {
        $('.cam_slide01').slick('slickNext');
    });
    $('.main_cam .cam02 .left').on('click', function () {
        $('.cam_slide02').slick('slickPrev');
    });
    $('.main_cam .cam02 .right').on('click', function () {
        $('.cam_slide02').slick('slickNext');
    });
    $('.main_cam .cam03 .left').on('click', function () {
        $('.cam_slide03').slick('slickPrev');
    });
    $('.main_cam .cam03 .right').on('click', function () {
        $('.cam_slide03').slick('slickNext');
    });
    $('.main_cam .cam04 .left').on('click', function () {
        $('.cam_slide04').slick('slickPrev');
    });
    $('.main_cam .cam04 .right').on('click', function () {
        $('.cam_slide04').slick('slickNext');
    });

    $('.fund_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })
    $('.child_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

    $('.btn_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
    });

    $('.header').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

    $('.btn_ham').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });
});