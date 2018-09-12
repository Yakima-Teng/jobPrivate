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

    $('.ct-column-rush').find('.video-img').bind('click',function(){
        $('.layrer-bg,.video-rush').fadeIn();
        var ifSrc = $(this).attr('videoSrc');
        $('.video-rush').find('iframe').attr('src',ifSrc);
    });
    $('.ct-column-expert').find('.main-img').bind('click',function(){
        $('.layrer-bg,.video-expert').fadeIn();
        var ifSrc = $(this).attr('videoSrc');
        $('.video-expert').find('iframe').attr('src',ifSrc);
    });
    $('.ct-column-everyone').find('.main-img').bind('click',function(){
        $('.layrer-bg,.video-everyone').fadeIn();
        var ifSrc = $(this).attr('videoSrc');
        $('.video-everyone').find('iframe').attr('src',ifSrc);
    });
    
    $('.ct-column-recommend').find('.video-img').bind('click',function(){
        $('.layrer-bg,.video-recommend').fadeIn();
        var ifSrc = $(this).attr('videoSrc');
        $('.video-recommend').find('iframe').attr('src',ifSrc);
    });


    $('.video-rush').find('.icon-close').bind('click',function(){  
        var srcNew = $(this).parent().find('iframe').attr('src');
        $('.ct-column-rush').find('.video-img').attr({videoSrc:srcNew});
    });
    
    $('.video-expert').find('.icon-close').bind('click',function(){  
        var srcNew = $(this).parent().find('iframe').attr('src');
        $('.ct-column-expert').find('.main-img').attr({videoSrc:srcNew});
    });
    $('.video-everyone').find('.icon-close').bind('click',function(){  
        var srcNew = $(this).parent().find('iframe').attr('src');
        $('.ct-column-everyone').find('.main-img').attr({videoSrc:srcNew});
    });
    $('.video-recommend').find('.icon-close').bind('click',function(){  
        var srcNew = $(this).parent().find('iframe').attr('src');
        $('.ct-column-recommend').find('.video-img').attr({videoSrc:srcNew});
    });
    $('.icon-close').bind('click',function(){    
        $('.layrer-bg').fadeOut();
        $( this ).parent().fadeOut();
        $( this ).parent().find('iframe').attr('src','');
    });

});