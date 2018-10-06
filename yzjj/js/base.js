$(function(){
$(window).scroll(function(){		
    var thisTop=$(this).scrollTop();
    if( thisTop>100 ){
        $('.ct-column-rush').addClass('ct-column-rush-in');
    };
    if( thisTop>800 ){
        $('.ct-column-expert').addClass('ct-column-expert-in');
    };
    if( thisTop>2000 ){
        $('.ct-column-everyone').addClass('ct-column-everyone-in');
    };
    if( thisTop>2400 ){
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
if( thisTop>800 ){
    $('.ct-column-expert').addClass('ct-column-expert-in');
};
if( thisTop>2000 ){
    $('.ct-column-everyone').addClass('ct-column-everyone-in');
};
if( thisTop>2400 ){
    $('.ct-column-recommend').addClass('ct-column-recommend-in');
};
if( thisTop>4200 ){
    $('.ct-column-summarize').addClass('ct-column-summarize-in');
};
if( thisTop>4400 ){
    $('.page-footer').addClass('page-footer-in');
};

$('.btn-list').bind('mouseover',function(){
    var newIndex = $(this).index();
    $('.info-list').eq(newIndex).show().siblings('.info-list').hide();
    $(this).addClass('cur').siblings().removeClass('cur');

    if( $(this).hasClass('btn-woman') ){
       
        $('em.before').stop().animate({left: 138},200)

    }else if( $(this).hasClass('btn-man') ){
        
        $('em.before').stop().animate({left: 460},200)

    }else if( $(this).hasClass('btn-he') ){

        $('em.before').stop().animate({left: 810},200)
    };
});

// $('.video-rush').find('.icon-close').bind('click',function(){  
//     var srcNew = $(this).parent().find('iframe').attr('src');
//     $('.ct-column-rush').find('.video-img').attr({videoSrc:srcNew});
// });
// $('.video-expert').find('.icon-close').bind('click',function(){  
//     var srcNew = $(this).parent().find('iframe').attr('src');
//     $('.ct-column-expert').find('.main-img').attr({videoSrc:srcNew});
// });

// $('.video-recommend').find('.icon-close').bind('click',function(){  
//     var srcNew = $(this).parent().find('iframe').attr('src');
//     $('.ct-column-recommend').find('.video-img').attr({videoSrc:srcNew});
// });

// $('.ct-column-rush').find('.video-img').bind('click',function(){
//     $('.layrer-bg,.video-rush').fadeIn();
// });
// $('.ct-column-expert').find('.main-img').bind('click',function(){
//     $('.layrer-bg,.video-expert').fadeIn();
//     var ifSrc = $(this).attr('videoSrc');
//     $('.video-expert').find('iframe').attr('src',ifSrc);
// });
// $('.ct-column-recommend').find('.video-img').bind('click',function(){
//     $('.layrer-bg,.video-recommend').fadeIn();
// });

$('.icon-close').bind('click',function(){    
    $('.layrer-bg').fadeOut();
    $( this ).parent().fadeOut();
    $( this ).parent().find('iframe').attr('src','');
});


});
