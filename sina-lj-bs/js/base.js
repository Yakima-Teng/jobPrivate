$(function(){


	$(window).scroll(function(){		
        var thisTop=$(this).scrollTop();
        // console.log(thisTop);
        if( thisTop>100 ){
            $('.ct-column-rush').addClass('ct-column-rush-in');
        };
        if( thisTop>1800 ){
            $('.ct-column-expert').addClass('ct-column-expert-in');
        };
        if( thisTop>2400 ){
            $('.ct-column-everyone').addClass('ct-column-everyone-in');
        };
        if( thisTop>3400 ){
            $('.ct-column-recommend').addClass('ct-column-recommend-in');
        };
        if( thisTop>4200 ){
            $('.ct-column-summarize').addClass('ct-column-summarize-in');
        };
        if( thisTop>4400 ){
            $('.page-footer').addClass('page-footer-in');
        };
    });

    var thisTop=$(this).scrollTop();
    if( thisTop>100 ){
        $('.ct-column-rush').addClass('ct-column-rush-in');
    };
    if( thisTop>1800 ){
        $('.ct-column-expert').addClass('ct-column-expert-in');
    };
    if( thisTop>2400 ){
        $('.ct-column-everyone').addClass('ct-column-everyone-in');
    };
    if( thisTop>3400 ){
        $('.ct-column-recommend').addClass('ct-column-recommend-in');
    };
    if( thisTop>4200 ){
        $('.ct-column-summarize').addClass('ct-column-summarize-in');
    };
    if( thisTop>4400 ){
        $('.page-footer').addClass('page-footer-in');
    };

    $('.btn-tab').bind('mouseover',function(){
      var newIndex = $(this).parent().index();
      $('.tab-info').eq(newIndex).show().siblings('.tab-info').hide();
      $(this).parent().addClass('cur').siblings().removeClass('cur');
    });

    $('.icon-close').bind('click',function(){
        $('.layrer-bg').fadeOut();
        $( this ).parent().fadeOut();
    });
    $('.ct-column-rush').find('.video-img').bind('click',function(){
        $('.layrer-bg,.video-rush').fadeIn();
    });
    $('.ct-column-expert').find('.main-img').bind('click',function(){
        $('.layrer-bg,.video-expert').fadeIn();
    });
    $('.ct-column-everyone').find('.main-img').bind('click',function(){
        $('.layrer-bg,.video-everyone').fadeIn();
    });
    $('.ct-column-recommend').find('.video-img').bind('click',function(){
        $('.layrer-bg,.video-recommend').fadeIn();
    });
});