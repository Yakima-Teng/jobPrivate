$(function(){
$(window).scroll(function(){
    var thisTop=$(this).scrollTop();
    console.log(thisTop);
    if( thisTop>994 ){
        $('.page-header').css({'backgroundColor':'#0c33dc'});
    }else{
        $('.page-header').css({'backgroundColor':'rgba(255,255,255,0.1)'});
    };
    if( thisTop<200 ){
        $('.page-header').css({'backgroundColor':'rgba(255,255,255,0.1)'});
    }else{
        $('.page-header').css({'backgroundColor':'#0c33dc'});
    };
});

var thisTop=$(this).scrollTop();
if( thisTop>994 ){
    $('.page-header').css({'backgroundColor':'#0c33dc'});
}else{
    $('.page-header').css({'backgroundColor':'rgba(255,255,255,0.1)'});
};
if( thisTop<200 ){
    $('.page-header').css({'backgroundColor':'rgba(255,255,255,0.1)'});
}else{
    $('.page-header').css({'backgroundColor':'#0c33dc'});
};

$('.intr-customized').find('.main').bind('mouseover', function(){
    $(this).addClass('cur').siblings().removeClass('cur');
    $(this).find('em').show().siblings('span').hide(); 
});
$('.intr-customized').find('.main').bind('mouseleave', function(){
    $(this).removeClass('cur');
    $(this).find('em').hide().siblings('span').show(); 
});

$('.btn-registered').bind('click',function(){
    $('.layrer-bg,.layrer-registered').fadeIn();
});

$('.btn-login').bind('click',function(){
    $('.layrer-bg,.layrer-login').fadeIn();
});


$('.icon-close,.registered-form .btn-submit,.login-form .btn-submit ').bind('click',function(){    
    $('.layrer-bg').fadeOut();
    $( this ).parents('.layrer-box').fadeOut();
});

$('.layrer-login .btn-password').bind('click',function(){ 
    $(this).addClass('cur').siblings('.btn-password-rendom').removeClass('cur');
    $('.rendom-pw').hide();
});

$('.layrer-login .btn-password-rendom').bind('click',function(){ 
    $(this).addClass('cur').siblings('.btn-password').removeClass('cur');
    $('.rendom-pw').show();
});

});
