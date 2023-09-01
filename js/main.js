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

    // $('.cam_wrap').slick({
    //     arrows: false,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ]
    // });

    $('.main_cam .arrows .left').on('click', function () {
        $('.cam_wrap').slick('slickPrev');
    });
    $('.main_cam .arrows .right').on('click', function () {
        $('.cam_wrap').slick('slickNext');
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

    $('.tap_list li').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.cam_slide').eq(idx).addClass('on')
            .siblings().removeClass('on');
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
});