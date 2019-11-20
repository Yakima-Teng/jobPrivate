$(function(){
var pageMenu = $('.page-menu-list .menu');
var pageMenuLength = pageMenu.length;
var pageALLWight = pageMenuLength*100;
$('.page-menu-list').width(pageALLWight);

var moduleMenuWidth = $('.module-menu').width();
$('.module-menu-box').width( moduleMenuWidth - 60 - 112 -19 - 50 -20);

var pageMenuWidth = $('.page-menu').width();
$('.page-menu-box').width( pageMenuWidth - 380 - 65 - 20 - 14 - 100);
//左侧导航 
!$('.nav').length > 0 || (function () {
  $('.nav').toggle(function(){
    console.log('1')
    $(this).addClass('cur');
  },function(){
    console.log('2')
    $(this).removeClass('cur');
  });
})();

//日历放大缩小
!$('.btn-shrink-date').length > 0 || (function () {
 $('.btn-shrink-date').toggle(function(){
   $(this).css({'right':44});
   $('.page-contents').css({'width':'100%'});
   $(this).find('.icon-shrink').css({'backgroundPosition':'0 -19px'});
   $('.page-nav,.page-menu,.module-menu').hide();
 },function(){
   $(this).removeAttr('style');
   $(this).find('.icon-shrink').removeAttr('style');
   $('.page-nav,.page-menu,.module-menu').show();
 })
})();

//内容导航关闭操作
!$('.btn-close-current-box').length > 0 || (function () {
  $('.btn-close-current').live('click',function(){
    if($(this).hasClass('cur')){
      $(this).removeClass('cur').next().hide();
    }else{
      $(this).addClass('cur').next().show();
    }
  });
  $('.choice-list').find('.choice').live('click',function(){
    $(this).parent().hide();
    $('.btn-close-current').removeClass('cur');
  })
})();

//内容导航关闭
!$('.module-menu-list').length > 0 || (function () {
  var moduleMenu = $('.module-menu-list .menu');
  var moduleMenuLength = moduleMenu.length;
  moduleMenu.live('click',function(){
    $(this).addClass('cur').siblings().removeClass('cur');
  });
  moduleMenu.find('.icon').live('click',function(){
    $(this).parent().hide();
  })
  var menuALLWight = moduleMenuLength*100;
  $('.module-menu-list').width(menuALLWight);

})();

//左侧导航收缩
$('.btn-shrink').live('click',function(){

  if(!$(this).hasClass('cur')){
    $(this).addClass('cur');
    $('.page-nav').hide();
    $('.page-contents').css('width','100%');
    $('.shrink-logo').show();
    $('.module-menu-box').width( moduleMenuWidth - 60 - 112 -19 - 50 -20 + 200);
    $('.page-menu-box').width( pageMenuWidth - 380 - 65 - 20 - 14 - 100 + 100);
  }else{
    $('.module-menu-box').width( moduleMenuWidth - 60 - 112 -19 - 50 -20);
    $('.page-menu-box').width( pageMenuWidth - 380 - 65 - 20 - 14 - 100);
    $(this).removeClass('cur');
    $('.page-nav').show();
    $('.shrink-logo').hide();
    $('.page-contents').removeAttr('style');
  }
});



$('#marquee4').kxbdSuperMarquee({
  isAuto:false,
  distance:300,
  btnGo:{left:'#goL2',right:'#goR2'},
  direction:'left'
})

$('#marquee').kxbdSuperMarquee({
  isAuto:false,
  distance:300,
  btnGo:{left:'#goL',right:'#goR'},
  direction:'left'
})

});
