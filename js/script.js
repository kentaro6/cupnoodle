'use strict';


jQuery(function () {
    jQuery(window).scroll(function () {
        jQuery('.fadein').each(function () {
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 0) {
                jQuery(this).addClass('scrollin');
            }
        });
    });
    jQuery(window).scroll();
});
jQuery(function () {
    jQuery(window).scroll(function () {
        jQuery('.fadein2').each(function () {
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 0) {
                jQuery(this).addClass('scrollin2');
            }
        });
    });
    jQuery(window).scroll();
});


$(function () {

    var effect_btm = 500; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    //親要素と子要素のcssを定義
    $('.scroll-fade').css({
        opacity: 0
    });
    $('.scroll-fade').children().each(function () {
        $(this).css({
            opacity: 0,
            transform: 'translateY(' + effect_move + 'px)',
            transition: effect_time + 'ms'
        });
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function () {
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        //エフェクトが発動したとき、子要素をずらしてフェードさせる
        $('.scroll-fade').each(function () {
            var this_pos = $(this).offset().top;
            if (effect_pos > this_pos) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function (i) {
                    $(this).delay(100 + i * 200).queue(function () {
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });
});

$(window).on('load scroll', function () {

    var box = $('.fadeIn');
    var animated = 'animated';

    box.each(function () {

        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        //画面内のどの位置で処理を実行するかで「100」の値を変更
        if (scrollPos > boxOffset - wh + 500) {
            $(this).addClass(animated);
        } else {
            (scrollPos < boxOffset - wh + 500) 
                $(this).removeClass(animated);
        }
    });

});

$(function(){
    $('.cn-products-cnt-img img').addClass('move');
    $(window).scroll(function(){
      $(".cn-products-cnt-img").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).find("img").removeClass('move');
        } else {
          $(this).find("img").addClass('move');
        }
      });
    });
  });
