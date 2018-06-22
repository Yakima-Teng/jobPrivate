$(function(){

//	var windowHeight=$(window).height();	
	$(window).scroll(function(){		
        var thisTop=$(this).scrollTop();
        console.log(thisTop);
        if( thisTop>550 ){
            $('.ct-column-video').addClass('column-video-in');
        };
        if( thisTop>1200 ){
            $('.ct-column-attitude').addClass('column-attitude-in');
        };
        if( thisTop>2200 ){
            $('.ct-column-life').addClass('column-life-in');
        };
        if( thisTop>3000 ){
            $('.ct-column-experience').addClass('column-experience-in');
        };
        if( thisTop>3300 ){
            $('.ct-column-experience .list-1').addClass('cur');
        };
        if( thisTop>3900 ){
            $('.ct-column-experience .list-2').addClass('cur');
        };
        if( thisTop>4500 ){
            $('.ct-column-experience .list-3').addClass('cur');
        };
        if( thisTop>5100 ){
            $('.ct-column-experience .img-04').addClass('cur');
        };
        if( thisTop>5600 ){
            $('.ct-column-summarize').addClass('column-summarize-in');
        };
        if( thisTop>5900 ){
            $('.page-footer').addClass('page-footer-in');
        };
    });

    var thisTop=$(this).scrollTop();
    if( thisTop>550 ){
        $('.ct-column-video').addClass('column-video-in');
    };
    if( thisTop>1500 ){
        $('.ct-column-attitude').addClass('column-attitude-in');
    };
    if( thisTop>2400 ){
        $('.ct-column-life').addClass('column-life-in');
    };
    if( thisTop>3000 ){
        $('.ct-column-experience').addClass('column-experience-in');
    };
    if( thisTop>3300 ){
        $('.ct-column-experience .list-1').addClass('cur');
    };
    if( thisTop>3900 ){
        $('.ct-column-experience .list-2').addClass('cur');
    };
    if( thisTop>4500 ){
        $('.ct-column-experience .list-3').addClass('cur');
    };
    if( thisTop>5100 ){
        $('.ct-column-experience .img-04').addClass('cur');
    };
    if( thisTop>5600 ){
        $('.ct-column-summarize').addClass('column-summarize-in');
    };
    if( thisTop>5900 ){
        $('.page-footer').addClass('page-footer-in');
    };

    $('.ct-column-life').find('.main').eq(0).addClass('cur');
    $('.btn-tab-main').find('li').bind('click',function(){
        var index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur')
        $('.ct-column-life').find('.main').eq(index).addClass('cur').siblings('.main').removeClass('cur');
    });
    $('.icon-close').bind('click',function(){
        $('.layrer-bg').fadeOut();
        $( this ).parent().fadeOut();
    });
    $('.ct-column-video').find('.video-img').bind('click',function(){
        $('.layrer-bg,.layrer-video').fadeIn();
    });
});